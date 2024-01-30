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
import Link from "next/link";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";

function PopProfile() {
  const { data } = useSession();
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
        {/* </Button> */}
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col">
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
            <Link href={"/editprofile"}>
              <Button variant={"outline"} className="w-full">
                Edit Profile
              </Button>
            </Link>
            <Link href={"/yourartikel"}>
              <Button variant={"outline"} className="w-full">
                Your Artikel
              </Button>
            </Link>
            <AlertDialog>
              <AlertDialogTrigger
                className={cn(buttonVariants({ variant: "destructive" }))}
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
                  <AlertDialogAction onClick={() => signOut()}>
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
