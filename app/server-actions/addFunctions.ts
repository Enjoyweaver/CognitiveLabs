"use server";
import {
  createClient,
  Session,
} from "@/utils/supabase/server"";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function addFunctions(
  formData: FormData
): Promise<{ message: string } | undefined> {
  const model = formData.get("model");
  const brand = formData.get("brand");
  const referenceNumber = formData.get("referenceNumber");

  const cookieStore = cookies();
  const supabase = createClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = (session as Session)?.user;

  if (!user) {
    console.error(
      "User is not authenticated within addFunctions server action"
    );
    return;
  }

  const { data, error } = await supabase.from("Functionses").insert([
    {
      model,
      brand,
      reference_number: referenceNumber,
      user_id: user.id,
    },
  ]);

  if (error) {
    console.error("Error inserting data", error);
    return;
  }

  revalidatePath("/Functions-list");

  return { message: "Success" };
}
