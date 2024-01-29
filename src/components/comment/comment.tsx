"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import timeAgo from "@/utils/timeAgo";
import { useState } from "react";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

function Comment({ postSlug }: { postSlug: string }) {
  const { status } = useSession();
  const [desc, setDesc] = useState("");
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch(`http://localhost:3000/api/comments`, {
      method: "POST",
      body: JSON.stringify({
        desc,
        postSlug,
      }),
    });
    setDesc("");
    mutate();
  };

  return (
    <div className="flex flex-col gap-2 border-t-2 pt-6">
      <h2 className="text-xl font-bold">Comments({data?.comments.length})</h2>
      {status === "authenticated" ? (
        <div className="flex gap-4 py-4">
          <div className="relative w-8 h-8 rounded-full aspect-square">
            <Image
              src={
                "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="carousel"
              className="object-cover rounded-full aspect-square"
              fill
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <textarea
              value={desc}
              name="desc"
              className="w-full bg-slate-100 px-4 py-3 rounded-md"
              rows={4}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Tulis komentar disini..."
            ></textarea>
            <Button variant={"default"} onClick={handleSubmit}>
              Post
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 py-8 rounded-md justify-center bg-slate-200">
          <p>Login terlebih dahulu😭</p>
        </div>
      )}
      <div className="flex flex-col gap-2 my-4">
        {isLoading ? (
          <div className="flex gap-4 py-4 rounded-md justify-center bg-slate-200">
            <p>Loading...</p>
          </div>
        ) : (
          data?.comments.map((item: any) => (
            <div
              className="flex flex-col bg-slate-100 px-4 py-4 rounded-md items-start"
              key={item.id}
            >
              <div className="flex gap-4 items-center">
                <div className="relative w-8 h-8 rounded-full aspect-square">
                  <Image
                    src={
                      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="carousel"
                    className="object-cover rounded-full aspect-square"
                    fill
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="-mt-1 font-medium">{item.user.name}</p>
                  <span className="-mt-2 text-sm text-gray-500">
                    {timeAgo(item.createdAt)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="">{item.desc}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comment;
