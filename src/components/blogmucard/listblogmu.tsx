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
    `http://localhost:3000/api/posts/user?email=${email}`,
    fetcher
  );
  if (status === "loading")
    return (
      <main className="py-20 flex items-center justify-center">Loading...</main>
    );
  return (
    <div>
      {data?.posts?.map((item: any) => (
        <BlogmuCard item={item} key={item.id} mutate={mutate} />
      ))}
    </div>
  );
}

export default ListBlogmu;
