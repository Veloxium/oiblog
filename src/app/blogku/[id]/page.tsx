import EditBlogForm from "@/components/editblogform/editblogform";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit Blog",
};


const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/user/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

async function EditPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const { post } = await getData(id);
  return (
    <main>
      <div className="minh">
        <EditBlogForm data={post} />
      </div>
    </main>
  );
}

export default EditPage;
