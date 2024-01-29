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

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts/newest`, {
    method: "GET",
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

async function ListArticleDetail() {
  const { posts } = await getData();

  return (
    <div className="flex flex-col gap-6 mb-20">
      {posts.map(
        (item: {
          id: string;
          title: string;
          slug: string;
          desc: string;
          img: string | null;
          views: number;
          catSlug: string;
          userEmail: string;
          createdAt: string;
          cat: { title: string };
        }) => (
          <Link href={`/${item.slug}`}>
            <Card
              key={item.id}
              className="group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative w-full h-36 overflow-hidden rounded-md">
                  {item.img && (
                    <Image
                      src={
                       item.img
                      }
                      alt="card artikel"
                      className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
                      fill
                    />
                  )}
                </div>
                <CardHeader>
                  <CardDescription className="text-xs capitalize">
                    {item.cat.title} | {item.createdAt.slice(0, 10)}
                  </CardDescription>
                  <CardTitle className="-mt-0 line-clamp-3">
                    {item.title}
                  </CardTitle>
                </CardHeader>
              </div>
            </Card>
          </Link>
        )
      )}

      <div>
        <Button variant={"outline"} className="w-full">
          Lihat Semua
        </Button>
      </div>
    </div>
  );
}

export default ListArticleDetail;
