"use client";

import CardCarousel from "@/components/carousel/cardcarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

function ListCarousel({ items }: { items: any }) {
  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="my-2"
    >
      <CarouselContent>
        {items.map((item: any) => (
          <CarouselItem key={item.id}>
            <CardCarousel item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ListCarousel;
