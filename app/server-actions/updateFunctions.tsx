"use server";
import {
  createServerComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateFunctions(
  formData: FormData
): Promise<{ message: string } | undefined> {
  const id = formData.get("id");
  const model = formData.get("model");
  const brand = formData.get("brand");
  const referenceNumber = formData.get("referenceNumber");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = (session as Session)?.user;

  if (!user) {
    console.error(
      "User is not authenticated within updateFunctions server action"
    );
    return;
  }

  const { data, error } = await supabase
    .from("Functionses")
    .update({
      model,
      brand,
      reference_number: referenceNumber,
    })
    .match({ id, user_id: user.id });

  if (error) {
    console.error("Error updating data", error);
    return;
  }

  revalidatePath("/Functions-list");

  return { message: "Success" };
}
