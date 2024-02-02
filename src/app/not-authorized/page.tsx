import Image from "next/image";
import React from "react";

export default function NotAuthorizedPage() {
  return (
    <div className="minh flex flex-col items-center p-10 gap-10">
      <Image src="/cat.jpg" alt="haiyaa" width={500} height={500} />
      <p className="text-destructive font-bold">Access Denied</p>
    </div>
  );
}
