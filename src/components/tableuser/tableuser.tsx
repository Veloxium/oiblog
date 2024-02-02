"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import useSWR from "swr";
import { Button, buttonVariants } from "../ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

function TableUser() {
  const { data, mutate, isLoading } = useSWR(
    `https://oiblog.vercel.app/api/admin`,
    fetcher
  );
  console.log(data);
  if (isLoading) {
    return (
      <main className="py-20 flex items-center justify-center">Loading...</main>
    );
  }

  const handleUser = async (email: string) => {
    const res = await fetch(
      `https://oiblog.vercel.app/api/admin?user=${email}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }
    toast.success(data.message, {
      position: "top-right",
    });
    mutate();
  };

  const handleBlog = async (id: string) => {
    const res = await fetch(`https://oiblog.vercel.app/api/admin?post=${id}`, {
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
    <div className="flex flex-col gap-20 mb-20">
      <div>
        <p className="mb-4 font-bold">List Users</p>
        <Table>
          <TableCaption>A list of Oi Blog Users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Tagline</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.users.map((user: any, index: number) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell
                  className={user.role === "admin" ? "text-blue-600" : ""}
                >
                  {user.role}
                </TableCell>
                <TableCell>{user.tagline}</TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger
                      className={cn(buttonVariants({ variant: "destructive" }))}
                    >
                      Delete
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-[90%] rounded-md">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-destructive">
                          Delete User
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Apakah anda yakin ingin menghapus user ini?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction
                          className={cn(
                            buttonVariants({ variant: "destructive" })
                          )}
                          onClick={() => handleUser(user.email)}
                        >
                          Lanjutkan
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <p className="mb-4 font-bold">List Posts</p>
        <Table>
          <TableCaption>A list of Blogs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>UserEmail</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Views</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.posts.map((post: any, index: number) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.userEmail}</TableCell>
                <TableCell>{post.slug}</TableCell>
                <TableCell>{post.views}</TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger
                      className={cn(buttonVariants({ variant: "destructive" }))}
                    >
                      Delete
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-[90%] rounded-md">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-destructive">
                          Delete Blog
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Apakah anda yakin ingin menghapus blog ini?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction
                          className={cn(
                            buttonVariants({ variant: "destructive" })
                          )}
                          onClick={() => handleBlog(post.id)}
                        >
                          Lanjutkan
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TableUser;
