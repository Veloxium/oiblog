"use client";

import { Input } from "@/components/ui/input";
import React, { FormEvent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { kategori } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// const ReactQuill = dynamic(import("react-quill"), { ssr: false });

function BuatPage() {
  const [value, setValue] = React.useState("");
  const { status } = useSession();
  const [image, setImage] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);
  const router = useRouter();
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const titleforslug = formData.get("title") as string;
      const slug = titleforslug.substring(0, 13).replace(/\s/g, "-").toLocaleLowerCase();
      formData.append("desc", value);
      // formData.append("image", file as File);
      formData.append("slug", slug);
      // const formDataObject = Object.fromEntries(formData.entries());
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
  }

  if (status === "loading")
    return (
      <main className="minh flex items-center justify-center">Loading...</main>
    );
  if (status === "unauthenticated") {
    return router.push("/login");
  }

  return (
    <main>
      <div className="minh mt-4">
        <h1 className="text-xl font-norma mb-4 mt-10">Ayo Buat Artikelmu</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
          <p className="-mb-2 font-bold">Judul</p>
          <div className="flex flex-col md:flex-row gap-4">
            <Input type="text" name="title" placeholder="Judul Artikel" />
            <Select name="catSlug">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pilih Topik" />
              </SelectTrigger>
              <SelectContent>
                {kategori.map((item) => (
                  <SelectItem
                    key={item.title}
                    value={item.title.replace(/\s/g, "").toLocaleLowerCase()}
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="-mb-2 font-bold">Isi Artikel</p>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Tulis Artikel mu disini..."
          />
          <p className="-mb-2 font-bold">Gambar Latar</p>
          <div>
            <Input
              type="file"
              placeholder="Gambar Latar"
              name="image"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  setImage(URL.createObjectURL(file));
                  setFile(file);
                }
              }}
            />
          </div>
          <Button type="submit">Post Artikel</Button>
        </form>
      </div>
    </main>
  );
}

export default BuatPage;
