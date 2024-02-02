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
          <div key={item.id}>
            <Link href={`/article/${item.slug}`}>
              <Card className="group flex flex-col justify-between cursor-pointer hover:bg-slate-100">
                <div>
                  <div className="relative w-full h-36 overflow-hidden rounded-md">
                    {item.img && (
                      <Image
                        src={item.img}
                        alt="card blog"
                        className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
                        fill
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardDescription className="capitalize">
                      {item.cat.title} | {item.createdAt.slice(0, 10)}
                    </CardDescription>
                    <CardTitle className="line-clamp-3 py-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                </div>
              </Card>
            </Link>
          </div>
        )
      )}

      <Link href={"/"} className="w-full">
        <Button variant={"default"} className="w-full">
          Lihat Semua
        </Button>
      </Link>
    </div>
  );
}

export default ListArticleDetail;
