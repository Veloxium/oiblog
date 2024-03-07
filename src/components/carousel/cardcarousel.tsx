import { dateFormat } from "@/utils/dateformat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardCarousel({ item }: { item: any }) {
  return (
    <Link href={`/article/${item.slug}`} className="cursor-pointer group">
      <div className="relative h-[460px] rounded-md overflow-hidden flex items-end justify-start">
        {item.img && (
          <Image
            src={item.img}
            alt="carousel"
            className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
            priority
            fill
          />
        )}
        <div
          className="relative bg-gradient-to-t z-10 px-6 py-4 w-full h-full flex flex-col justify-end rounded-lg from-black to-transparent to-30% hover:to-85% transition-all 
        duration-300 ease-in-out
        "
        >
          <p className="text-sm text-white capitalize">
            {item.cat.title} | {dateFormat(item.createdAt.slice(0, 10))}
          </p>
          <p className=" text-white font-bold text-3xl">{item.title}</p>
          <div
            className="text-white text-lg line-clamp-3 textdesccarousel"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
          <p className="text-white">Oleh : {item.user.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardCarousel;
