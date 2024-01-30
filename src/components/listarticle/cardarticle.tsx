"use client";

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

function CardArticle({ item }: { item: any }) {
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(`http://localhost:3000/article/${url}`);
  };
  return (
    <Card key={item.id} className="group flex flex-col justify-between">
      <div>
        <div className="relative w-full h-40 overflow-hidden rounded-md">
          {item.img && (
            <Image
              src={item.img}
              alt="carousel"
              className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
              priority
              fill
            />
          )}
        </div>
        <CardHeader>
          <CardDescription className="capitalize">
            {item.cat.title} | {item.createdAt.slice(0, 10)}
          </CardDescription>
          <CardTitle>{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="-mt-3 line-clamp-4 text-justify"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
        </CardContent>
      </div>
      <div>
        <CardContent>
          <div className="flex justify-between items-center">
            <Link href={`/article/${item.slug}`}>
              <Button variant={"outline"}>Selengkapnya</Button>
            </Link>
            <Button
              variant={"outline"}
              onClick={() => copyToClipboard(item.slug)}
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
        </CardContent>
        <CardFooter><ProfileTag email={item.user.email} name={item.user.name} image={item.user.image}/></CardFooter>
      </div>
    </Card>
  );
}

export default CardArticle;
