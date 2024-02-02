"use client";

import { dateFormat } from "@/utils/dateformat";
import { Button } from "../ui/button";

function DetailTag({ post }: { post: any }) {
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(`https://oiblog.vercel.app/article/${url}`);
  };

  return (
    <div className="flex justify-between items-center">
      <p className="text-sm p-2 bg-slate-100 rounded-md">
        {dateFormat(post.createdAt.slice(0, 10))}
      </p>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 px-4 bg-slate-100 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p className="-mt-0 text-sm">{post.views}</p>
        </div>
        <Button
          variant={"secondary"}
          size={"icon"}
          onClick={() => copyToClipboard(post.slug)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default DetailTag;
