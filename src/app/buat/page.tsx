import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import BlogForm from "@/components/blogform/blogform";
// const ReactQuill = dynamic(import("react-quill"), { ssr: false });

export const metadata: Metadata = {
  title: "Buat",
};

function BuatPage() {
  return (
    <main>
      <div className="minh">
        <BlogForm />
      </div>
    </main>
  );
}

export default BuatPage;
