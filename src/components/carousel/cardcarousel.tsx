import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardCarousel({ item }: { item: any }) {
  return (
    <Link href={`/${item.slug}`} className="cursor-pointer">
      <div className="relative h-[460px] rounded-md flex items-end justify-start bg-slate-400">
        {item.img && (
          <Image
            src={item.img}
            alt="carousel"
            className="object-cover rounded-md"
            fill
          />
        )}
        <div className="z-10 px-4 py-2 m-2 w-full rounded-lg hover:backdrop-blur-lg bg-opacity-25 hover:backdrop-filter">
          <p className="text-sm text-white capitalize">
            {item.cat.title} | {item.createdAt.slice(0, 10)}
          </p>
          <p className="-mt-0 text-white font-bold text-2xl">{item.title}</p>
          <div
            className="text-white line-clamp-3"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
          <p className="text-white text-xs">Oleh : {item.user.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardCarousel;
