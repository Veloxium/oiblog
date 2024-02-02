"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { Input } from "../ui/input";
import useSWR from "swr";
import { toast } from "sonner";
import { useState } from "react";
import Link from "next/link";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

function PopProfile() {
  const [tagline, setTagline] = useState("");
  const { data: user } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/users/${user?.user.email}`,
    fetcher
  );

  const editTagline = async () => {
    const res = await fetch(`http://localhost:3000/api/users/${user.email}`, {
      method: "PUT",
      body: JSON.stringify({
        tagline,
      }),
    });
    const { message } = await res.json();
    mutate();
    toast.success(message, {
      position: "top-right",
    });
    mutate();
  };

  return (
    <Popover>
      <PopoverTrigger
        className="
        flex gap-2 items-center rounded-md
      border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2
      "
      >
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
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <h5>Profile</h5>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col pt-2">
          <div className="flex gap-4 items-center">
            <div className="relative w-12 h-12 rounded-full aspect-square">
              {data?.user?.image && (
                <Image
                  src={data?.user?.image}
                  alt="profile"
                  className="object-cover rounded-full aspect-square"
                  sizes="48px"
                  fill
                />
              )}
            </div>
            <div className="flex flex-col">
              <h2>{data?.user?.name}</h2>
              <h5 className="text-sm text-slate-400">{data?.user?.email}</h5>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <div className="flex justify-center p-2 rounded-md bg-slate-100 dark:bg-slate-800">
              <p className="mt-0 text-sm">{data?.user.tagline}</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Edit Tagline
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[90%] rounded-md">
                <AlertDialogHeader>
                  <AlertDialogTitle>Edit Tagline</AlertDialogTitle>
                  <AlertDialogDescription>
                    Tagline akan ditampilkan di halaman Blog Ku.
                    <Input
                      type="text"
                      name="title"
                      placeholder="Tagline"
                      onChange={(e) => setTagline(e.target.value)}
                      className="mt-2 text-foreground"
                      defaultValue={data?.user.tagline}
                    />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Batal</AlertDialogCancel>
                  <AlertDialogAction
                    className={cn(buttonVariants({ variant: "default" }))}
                    onClick={() => editTagline()}
                  >
                    Simpan
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            {user.role === "admin" && (
              <Button
                variant={"outline"}
                className="w-full text-blue-600 dark:text-blue-400"
                onClick={() => {
                  window.location.href = "/admin-dashboard";
                }}
              >
                Admin
              </Button>
            )}
            <AlertDialog>
              <AlertDialogTrigger
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Logout
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[90%] rounded-md">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Apakah Anda Yakin Ingin Logout?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Anda akan keluar dari akun ini dan akses website akan
                    terbatas.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Batal</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => signOut()}
                    className={cn(buttonVariants({ variant: "destructive" }))}
                  >
                    Lanjutkan
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default PopProfile;
