"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import timeAgo from "@/utils/timeAgo";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

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
  const user = useSession().data?.user;
  const [desc, setDesc] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    setDisabled(true);
    const res = await fetch(`http://localhost:3000/api/comments`, {
      method: "POST",
      body: JSON.stringify({
        desc,
        postSlug,
      }),
    });
    const { message } = await res.json();
    setDesc("");
    mutate();
    toast.success(message, {
      position: "top-right",
    });
    setDisabled(false);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/comments`, {
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
    });
    mutate();
    const { message } = await res.json();
    toast.info(message,{
      position: "top-right",
    });
  };

  return (
    <div className="flex flex-col gap-2 border-t-2 pt-6">
      <h2 className="text-xl font-bold">Komentar({data?.comments.length})</h2>
      {status === "authenticated" ? (
        <div className="flex gap-4 py-4">
          <div className="relative w-8 h-8 rounded-full aspect-square">
            {user && (
              <Image
                src={user.image || ""}
                alt="userprofile"
                className="object-cover rounded-full aspect-square"
                fill
              />
            )}
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
            <Button
              variant={disabled ? "secondary" : "default"}
              disabled={disabled}
              onClick={handleSubmit}
            >
              {disabled ? "Posting..." : "Tambahkan Komentar"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 py-8 rounded-md justify-center bg-slate-200">
          <p>Login terlebih dahulu😭</p>
        </div>
      )}
      {isLoading ? (
        <div className="my-4">
          <div className="flex gap-4 py-4 rounded-md justify-center bg-slate-200">
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        data?.comments.map((item: any) => (
          <div className="mt-1" key={item.id}>
            <div className="flex flex-col bg-slate-100 px-4 py-4 rounded-md items-start">
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="relative w-8 h-8 rounded-full aspect-square">
                    <Image
                      src={
                        item.user.image ||
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
                <div className="flex items-start">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="w-6 h-6 " />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(item.desc)}
                      >
                        Copy
                      </DropdownMenuItem>
                      {user?.email === item.user.email && (
                        <DropdownMenuItem
                          className="text-destructive"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="">{item.desc}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Comment;
