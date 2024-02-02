import TableUser from "@/components/tableuser/tableuser";
import { getAuthSession } from "@/utils/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";


export const metadata: Metadata = {
  title: "Admin Dashboard",
};


async function AdminDashboardpage() {
  const data = await getAuthSession();
  if (!data) {
    return redirect("/not-authorized");
  }
  if (data.user.role !== "admin") {
    return redirect("/not-authorized");
  }
  return (
    <main>
      <div className="minh">
        <h1 className="text-xl font-norma mb-4 text-blue-600 dark:text-blue-400">
          Admin Dashboard
        </h1>
        <TableUser />
      </div>
    </main>
  );
}

export default AdminDashboardpage;
