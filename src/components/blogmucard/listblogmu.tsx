"use client";

import { useSession } from "next-auth/react";
import useSWR from "swr";
import BlogmuCard from "./blogmucard";


const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

function ListBlogmu() {
  const { status } = useSession({ required: true });
  const email = useSession().data?.user?.email;
  const { data, mutate, isLoading } = useSWR(
    `https://oiblog.vercel.app/api/posts/user?email=${email}`,
    fetcher
  );
  if (isLoading || status === "loading")
    return (
      <main className="py-20 flex items-center justify-center">Loading...</main>
    );
  return (
    <div>
      {data.posts?.map((item: any) => (
        <BlogmuCard item={item} key={item.id} mutate={mutate} />
      ))}
      {
        data.posts.length === 0 && (
          <main className="py-20 flex items-center justify-center">Tidak ada Blog</main>
        )
      }
    </div>
  );
}

export default ListBlogmu;
