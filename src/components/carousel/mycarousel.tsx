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

function MyCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false})
  );
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        <CarouselItem>
          <CardCarousel />
        </CarouselItem>
        <CarouselItem>
          <CardCarousel />
        </CarouselItem>
        <CarouselItem>
          <CardCarousel />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default MyCarousel;
