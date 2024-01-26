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

function ListArticle() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="group flex flex-col justify-between">
        <div>
          <div className="relative w-full h-40 overflow-hidden rounded-md">
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
            <CardDescription>Teknologi | 2 Jan 2024</CardDescription>
            <CardTitle>Lorem Ipsum 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="-mt-3 line-clamp-4 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              sit dolorem velit nisi expedita qui ea delectus fugit nesciunt
              possimus.
            </p>
          </CardContent>
        </div>
        <div>
          <CardContent>
            <div className="flex justify-between items-center">
              <Link href={"/detail"}>
                <Button variant={"outline"}>Selengkapnya</Button>
              </Link>
              <Button variant={"outline"}>
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
          <CardFooter>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full">
                <Image
                  src={
                    "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="carousel"
                  className="object-cover rounded-full"
                  fill
                />
              </div>
              <div className="flex flex-col">
                <p className="-mt-0 text-xs">Mochammad Fernanda</p>
                <p className="-mt-0 text-xs text-slate-400">Mahluk Mars</p>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
      <Card className="group flex flex-col justify-between">
        <div>
          <div className="relative w-full h-40 overflow-hidden rounded-md">
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
            <CardDescription>Teknologi | 2 Jan 2024</CardDescription>
            <CardTitle>Lorem Ipsum 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="-mt-3 line-clamp-4 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              sit dolorem velit nisi expedita qui ea delectus fugit nesciunt
              possimus. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Maiores nesciunt, aliquid fuga cupiditate iste natus
              officiis.
            </p>
          </CardContent>
        </div>
        <div>
          <CardContent>
            <div className="flex justify-between items-center">
              <Link href={"/detail"}>
                <Button variant={"outline"}>Selengkapnya</Button>
              </Link>
              <Button variant={"outline"}>
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
          <CardFooter>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full">
                <Image
                  src={
                    "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="carousel"
                  className="object-cover rounded-full"
                  fill
                />
              </div>
              <div className="flex flex-col">
                <p className="-mt-0 text-xs">Mochammad Fernanda</p>
                <p className="-mt-0 text-xs text-slate-400">Mahluk Mars</p>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
      <Card className="group flex flex-col justify-between">
        <div>
          <div className="relative w-full h-40 overflow-hidden rounded-md">
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
            <CardDescription>Teknologi | 2 Jan 2024</CardDescription>
            <CardTitle>Lorem Ipsum 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="-mt-3 line-clamp-4 text-justify">
              Lorem ipsum dolor sit, lit nisi expedita qui ea delectus fugit
              nesciunt possimus.
            </p>
          </CardContent>
        </div>
        <div>
          <CardContent>
            <div className="flex justify-between items-center">
              <Link href={"/detail"}>
                <Button variant={"outline"}>Selengkapnya</Button>
              </Link>
              <Button variant={"outline"}>
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
          <CardFooter>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full">
                <Image
                  src={
                    "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="carousel"
                  className="object-cover rounded-full"
                  fill
                />
              </div>
              <div className="flex flex-col">
                <p className="-mt-0 text-xs">Mochammad Fernanda</p>
                <p className="-mt-0 text-xs text-slate-400">Mahluk Mars</p>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
      <Card className="group flex flex-col justify-between">
        <div>
          <div className="relative w-full h-40 overflow-hidden rounded-md">
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
            <CardDescription>Teknologi | 2 Jan 2024</CardDescription>
            <CardTitle>Lorem Ipsum 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="-mt-3 line-clamp-4 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              sit dolorem velit nisi expedita qui ea delectus fugit nesciunt
              possimus.
            </p>
          </CardContent>
        </div>
        <div>
          <CardContent>
            <div className="flex justify-between items-center">
              <Link href={"/detail"}>
                <Button variant={"outline"}>Selengkapnya</Button>
              </Link>
              <Button variant={"outline"}>
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
          <CardFooter>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full">
                <Image
                  src={
                    "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="carousel"
                  className="object-cover rounded-full"
                  fill
                />
              </div>
              <div className="flex flex-col">
                <p className="-mt-0 text-xs">Mochammad Fernanda</p>
                <p className="-mt-0 text-xs text-slate-400">Mahluk Mars</p>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
      <Card className="group flex flex-col justify-between">
        <div>
          <div className="relative w-full h-40 overflow-hidden rounded-md">
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
            <CardDescription>Teknologi | 2 Jan 2024</CardDescription>
            <CardTitle>Lorem Ipsum 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="-mt-3 line-clamp-4 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              sit dolorem velit nisi expedita qui ea delectus fugit nesciunt
              possimus. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Maiores nesciunt, aliquid fuga cupiditate iste natus
              officiis.
            </p>
          </CardContent>
        </div>
        <div>
          <CardContent>
            <div className="flex justify-between items-center">
              <Link href={"/detail"}>
                <Button variant={"outline"}>Selengkapnya</Button>
              </Link>
              <Button variant={"outline"}>
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
          <CardFooter>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full">
                <Image
                  src={
                    "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="carousel"
                  className="object-cover rounded-full"
                  fill
                />
              </div>
              <div className="flex flex-col">
                <p className="-mt-0 text-xs">Mochammad Fernanda</p>
                <p className="-mt-0 text-xs text-slate-400">Mahluk Mars</p>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
      <Card className="group flex flex-col justify-between">
        <div>
          <div className="relative w-full h-40 overflow-hidden rounded-md">
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
            <CardDescription>Teknologi | 2 Jan 2024</CardDescription>
            <CardTitle>Lorem Ipsum 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="-mt-3 line-clamp-4 text-justify">
              Lorem ipsum dolor sit, lit nisi expedita qui ea delectus fugit
              nesciunt possimus.
            </p>
          </CardContent>
        </div>
        <div>
          <CardContent>
            <div className="flex justify-between items-center">
              <Link href={"/detail"}>
                <Button variant={"outline"}>Selengkapnya</Button>
              </Link>
              <Button variant={"outline"}>
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
          <CardFooter>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full">
                <Image
                  src={
                    "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="carousel"
                  className="object-cover rounded-full"
                  fill
                />
              </div>
              <div className="flex flex-col">
                <p className="-mt-0 text-xs">Mochammad Fernanda</p>
                <p className="-mt-0 text-xs text-slate-400">Mahluk Mars</p>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}

export default ListArticle;
