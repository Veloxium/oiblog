"use client";

import React, { FormEvent } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
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
import Image from "next/image";

function BlogForm() {
  const [value, setValue] = React.useState("");
  const [image, setImage] = React.useState("");
  const [selectTopik, setSelectTopik] = React.useState("");
  const { status } = useSession({
    required: true,
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const desc = value;
    if (!title.trim() || !desc.trim()) {
      toast.error("Judul dan deskripsi tidak boleh kosong", {
        position: "top-right",
      });
      return;
    }
    if (selectTopik === "") {
      toast.error("Topik belum dpilih", {
        position: "top-right",
      });
      return;
    }

    if (!image) {
      toast.error("Gambar belum dipilih", {
        position: "top-right",
      });
      return;
    }

    try {
      const titleforslug = title;
      const slug = titleforslug
        .substring(0, 13)
        .replace(/\s/g, "-")
        .toLocaleLowerCase();
      formData.append("desc", value);
      formData.append("slug", slug);
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      const { message } = await res.json();
      toast.info(message, {
        position: "top-right",
      });
      (e.target as HTMLFormElement).reset();
      setValue("");
      setSelectTopik("");
    } catch (error) {
      console.log(error);
    }
  }

  if (status === "loading")
    return (
      <main className="minh flex items-center justify-center">Loading...</main>
    );

  return (
    <div>
      <h1 className="text-xl font-norma mb-4">Ayo Buat Blog-mu</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
        <p className="-mb-2 font-bold">Judul</p>
        <div className="flex flex-col md:flex-row gap-4">
          <Input type="text" name="title" placeholder="Judul Blog" />
          <Select
            name="catSlug"
            value={selectTopik}
            onValueChange={(value) => setSelectTopik(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pilih Topik" />
            </SelectTrigger>
            <SelectContent>
              {kategori?.map((item) => (
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
        <p className="-mb-2 font-bold">Isi Blog</p>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Tulis Blog Mu disini..."
        />
        <p className="-mb-2 font-bold">Gambar Latar</p>
        <div className="flex flex-col gap-2">
          {image && (
            <div className="relative w-full h-[200px] rounded-md overflow-hidden">
              <Image
                src={image}
                alt="Gambar Latar"
                className="object-cover"
                fill
              />
            </div>
          )}
          <Input
            type="file"
            placeholder="Gambar Latar"
            name="image"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files) {
                const file = e.target.files[0];
                setImage(URL.createObjectURL(file));
              }
            }}
          />
        </div>
        <Button type="submit">Post Blog</Button>
      </form>
    </div>
  );
}

export default BlogForm;
