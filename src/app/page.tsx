import MyCarousel from "@/components/carousel/mycarousel";
import ListArticle from "@/components/listarticle/listarticle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mt-6">
        <MyCarousel />
      </div>
      <div className="my-16 flex flex-col gap-6">
        <div className="flex justify-between items-start my-4">
          <h1 className="text-xl font-normal">Artikel Terbaru</h1>
          <div className="flex w-full max-w-xs items-center space-x-2">
            <Input type="email" placeholder="Judul Artikel" />
            <Button type="submit">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Button>
          </div>
        </div>
        <ListArticle />
      </div>
    </main>
  );
}
