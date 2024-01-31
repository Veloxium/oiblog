import React from "react";
import PopProfile from "../popprofile/popprofile";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Loader2Icon, LogInIcon } from "lucide-react";

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
          <Button
            variant={"default"}
            className="flex gap-2"
            onClick={() => signIn()}
          >
            <LogInIcon size={16} />
            <h5>Log in</h5>
          </Button>
        )
      )}
    </div>
  );
}

export default NavigationUser;
