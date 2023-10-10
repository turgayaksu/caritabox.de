import { redirect } from "next/navigation";

import { getCurrentUser } from "@/libs";

const AdminPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.role) {
    return redirect("/");
  }

  return redirect("/dashboard");
};

export default AdminPage;
