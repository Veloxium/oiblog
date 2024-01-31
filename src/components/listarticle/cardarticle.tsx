"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProfileTag from "../profiletag/profiletag";
import { toast } from "sonner";
import { dateFormat } from "@/utils/dateformat";

function CardArticle({ item }: { item: any }) {
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(`http://localhost:3000/article/${url}`);
  };
  return (
    <Card
      key={item.id}
      className="group flex flex-col justify-between shadow-md m-2"
    >
      <div>
        <div className="relative w-full h-40 overflow-hidden rounded-md">
          {item.img && (
            <Image
              src={`http:/localhost:3000${item.img}`}
              alt="carousel"
              className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
              priority
              fill
            />
          )}
        </div>
        <CardHeader>
          <CardDescription className="capitalize">
            {item.cat?.title} | {dateFormat(item.createdAt.slice(0, 10))}
          </CardDescription>
          <CardTitle className="leading-normal">{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="-mt-5 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
        </CardContent>
      </div>
      <div>
        <CardFooter>
          <div className="flex w-full justify-between items-center">
            <Link href={`/article/${item.slug}`}>
              <Button variant={"outline"} className="bg-slate-50">
                Selengkapnya
              </Button>
            </Link>
            <Button
              variant={"default"}
              onClick={() => {
                copyToClipboard(item.slug);
                toast.success("Link berhasil disalin", {
                  position: "top-right",
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default CardArticle;
