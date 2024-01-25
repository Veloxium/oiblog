import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

function ListArticleDetail() {
  return (
    <div className="flex flex-col gap-6 mb-20">
      <Link href={"/"}>
        <Card className="group flex flex-col justify-between cursor-pointer">
          <div>
            <div className="relative w-full h-36 overflow-hidden rounded-md">
              <Image
                src={
                  "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="carousel"
                className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
                fill
              />
            </div>
            <CardHeader>
              <CardDescription className="text-xs">
                Teknologi | 2 Jan 2024
              </CardDescription>
              <CardTitle className="-mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, dolorum?
              </CardTitle>
            </CardHeader>
          </div>
        </Card>
      </Link>
      <Link href={"/"}>
        <Card className="group flex flex-col justify-between cursor-pointer">
          <div>
            <div className="relative w-full h-36 overflow-hidden rounded-md">
              <Image
                src={
                  "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="carousel"
                className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
                fill
              />
            </div>
            <CardHeader>
              <CardDescription className="text-xs">
                Teknologi | 2 Jan 2024
              </CardDescription>
              <CardTitle className="-mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, dolorum?
              </CardTitle>
            </CardHeader>
          </div>
        </Card>
      </Link>
      <Link href={"/"}>
        <Card className="group flex flex-col justify-between cursor-pointer">
          <div>
            <div className="relative w-full h-36 overflow-hidden rounded-md">
              <Image
                src={
                  "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="carousel"
                className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
                fill
              />
            </div>
            <CardHeader>
              <CardDescription className="text-xs">
                Teknologi | 2 Jan 2024
              </CardDescription>
              <CardTitle className="-mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, dolorum?
              </CardTitle>
            </CardHeader>
          </div>
        </Card>
      </Link>
      <Link href={"/"}>
        <Card className="group flex flex-col justify-between cursor-pointer">
          <div>
            <div className="relative w-full h-36 overflow-hidden rounded-md">
              <Image
                src={
                  "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="carousel"
                className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
                fill
              />
            </div>
            <CardHeader>
              <CardDescription className="text-xs">
                Teknologi | 2 Jan 2024
              </CardDescription>
              <CardTitle className="-mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, dolorum?
              </CardTitle>
            </CardHeader>
          </div>
        </Card>
      </Link>
      <div>
        <Button variant={"outline"} className="w-full">
          Lihat Semua
        </Button>
      </div>
    </div>
  );
}

export default ListArticleDetail;
