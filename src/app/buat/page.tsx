import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import BlogForm from "@/components/blogform/blogform";
import { getAuthSession } from "@/utils/auth";
// const ReactQuill = dynamic(import("react-quill"), { ssr: false });

export const metadata: Metadata = {
  title: "Buat",
};

async function BuatPage() {
  const data = await getAuthSession();

  if (!data) {
    redirect("/login");
  }

  return (
    <main>
      <div className="minh">
        <BlogForm />
      </div>
    </main>
  );
}

export default BuatPage;
