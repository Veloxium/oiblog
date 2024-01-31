"use client";

import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const handleSubmit = () => {
    if (search === "") {
      router.push("/");
      return;
    }
    router.push(`/?search=${search}`);
    return setSearch("");
  };
  return (
    <div className="flex justify-between items-start my-4">
      <h1 className="text-xl font-normal">Blog Terbaru</h1>
      <div className="flex w-full max-w-xs items-center space-x-2">
        <Input
          type="email"
          placeholder="Judul Blog"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value.toLowerCase())
          }
        />
        <Button onClick={handleSubmit}>
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
