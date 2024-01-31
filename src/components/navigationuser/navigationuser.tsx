import React from "react";
import PopProfile from "../popprofile/popprofile";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loader2Icon } from "lucide-react";

function NavigationUser() {
  const pathname = usePathname();
  const { status } = useSession();

  return (
    <div>
      {status === "loading" ? (
        <Button variant={"secondary"}>
          <h5>Loading...</h5>
        </Button>
      ) : status === "authenticated" ? (
        <PopProfile />
      ) : (
        pathname !== "/login" && (
          <div className="flex gap-2 md:gap-4">
            <Link href={"/login"}>
              <Button variant={"outline"}>
                <h5>Log in</h5>
              </Button>
            </Link>
            <Link href={"/login"}>
              <Button variant={"default"}>
                <h5>Sign up with Google</h5>
              </Button>
            </Link>
          </div>
        )
      )}
    </div>
  );
}

export default NavigationUser;
