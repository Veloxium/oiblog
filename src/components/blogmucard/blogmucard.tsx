import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { dateFormat } from "@/utils/dateformat";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

function BlogmuCard({ item, mutate }: { item: any; mutate: any }) {
  const handleDelete = async () => {
    const res = await fetch(`/api/posts/user?id=${item.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    toast.success(data.message, {
      position: "top-right",
    });
    mutate();
  };
  return (
    <Card className="group flex flex-col md:flex-row  justify-between shadow-md m-2">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-80 h-40 md:h-full overflow-hidden rounded-md">
          {item.img && (
            <Image
              src={item.img}
              alt="card image"
              className="object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
              priority
              fill
            />
          )}
        </div>
        <div className="flex flex-col justify-between">
          <CardHeader>
            <CardDescription className="capitalize">
              {item.cat.title} | {dateFormat(item.createdAt.slice(0, 10))}
            </CardDescription>
            <CardTitle className="leading-normal">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="-mt-5 line-clamp-3 max-w-60"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            />
          </CardContent>
        </div>
      </div>
      <div>
        <CardFooter className="min-w-[200px] flex-col items-center justify-center h-full gap-4">
          <Link href={`/blogku/${item.id}`} className="w-full" >
            <Button variant={"outline"} className="w-full bg-slate-50">
              Edit
            </Button>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger
              className={
                cn(buttonVariants({ variant: "destructive" })) + " w-full"
              }
            >
              Hapus
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[90%] rounded-md">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Apakah Anda Yakin Ingin Menghapus Blog?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Anda akan menghapus blog ini dan tindakan tidak dapat
                  dipulihkan.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className={
                    cn(buttonVariants({ variant: "destructive" })) + "w-full"
                  }
                >
                  Lanjutkan
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </div>
    </Card>
  );
}

export default BlogmuCard;
