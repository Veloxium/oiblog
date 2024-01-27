import Image from "next/image";
import React from "react";

function CardCarousel() {
  return (
    <div className="relative h-[460px] rounded-md flex items-end justify-start bg-slate-400">
      <Image
        src={
          "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="carousel"
        className="object-cover rounded-md"
        fill
      />
      <div className="z-10 px-4 py-2 m-2 backdrop-filter rounded-lg backdrop-blur-lg bg-opacity-25">
        <p className="text-sm text-white">Wisata dan Kuliner | 2 Jan 2024</p>
        <p className="-mt-0 text-white font-bold text-2xl">Lorem Ipsum 2024</p>
        <p className="text-white line-clamp-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          quisquam aut doloribus ea voluptatem, vel nihil velit magnam rerum ad
          aperiam explicabo officiis facilis!
        </p>
        <p className="text-white text-xs">Blogger : Mochammad Fernanda</p>
      </div>
    </div>
  );
}

export default CardCarousel;
