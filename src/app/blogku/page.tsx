import ListBlogmu from "@/components/blogmucard/listblogmu";
import { Metadata } from "next";
import { useSession } from "next-auth/react";

export const metadata: Metadata = {
  title: "Blogmu",
};

function BlogmuPage() {
  return (
    <main>
      <div className="minh">
        <h1 className="text-xl font-norma mb-4">Daftar Blog-mu</h1>
        <div className="my-10">
          <ListBlogmu />
        </div>
      </div>
    </main>
  );
}

export default BlogmuPage;
