"use server";
import {
  createServerComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteFunctions(
  formData: FormData
): Promise<{ message: string } | undefined> {
  const FunctionsId = formData.get("id");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = (session as Session)?.user;

  if (!user) {
    console.error(
      "User is not authenticated within deleteFunctions server action"
    );
    return;
  }

  const { error } = await supabase
    .from("Functionses")
    .delete()
    .match({ id: FunctionsId, user_id: user.id });

  if (error) {
    console.error("Error deleting data", error);
    return;
  }

  revalidatePath("/Functions-list");

  return { message: "Success" };
}
