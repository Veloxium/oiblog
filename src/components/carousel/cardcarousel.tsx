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
      <div className="z-10 px-4 py-1 m-2 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-25">
        <p className=" text-white">Mochammad Fernanda</p>
        <p className="-mt-1 text-white font-bold text-2xl">Lorem Ipsum 2024</p>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          quisquam aut doloribus ea voluptatem, vel nihil velit magnam rerum ad
          aperiam explicabo officiis facilis!
        </p>
        <p className="text-sm text-white"> Sumbawa Barat | 2 Jan 2024</p>
      </div>
    </div>
  );
}

export default CardCarousel;
