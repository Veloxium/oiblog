"use client";

import React, { FormEvent, useEffect } from "react";
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
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const storage = getStorage(app);


function EditBlogForm({ data }: { data: any }) {
  const [value, setValue] = React.useState(data.desc);
  const [image, setImage] = React.useState(data.img);
  const [file, setFile] = React.useState<File | null>(null);
  const [imgUrl, setImgUrl] = React.useState("");
  const [selectTopik, setSelectTopik] = React.useState(data.catSlug);
  const { status } = useSession({
    required: true,
  });

  const router = useRouter();

   useEffect(() => {
     const upload = () => {
       const name = `${Date.now() + file!.name}`;
       const storageRef = ref(storage, name);
       const uploadTask = uploadBytesResumable(storageRef, file!);
       uploadTask.on(
         "state_changed",
         (snapshot) => {
           const progress =
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log("Upload is " + progress + "% done");
           switch (snapshot.state) {
             case "paused":
               console.log("Upload is paused");
               break;
             case "running":
               console.log("Upload is running");
               break;
           }
         },
         (error) => {
           console.log(error);
         },
         () => {
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
             setImgUrl(downloadURL);
           });
         }
       );
     };
     file && upload();
   }, [file]);

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
      formData.append("img", imgUrl);
      const dataObject = Object.fromEntries(formData.entries());
      console.log(dataObject);
      // const res = await fetch("/api/posts", {
      //   method: "POST",
      //   body: JSON.stringify(dataObject),
      // });
      // const { message } = await res.json();
      // toast.info(message, {
      //   position: "top-right",
      // });
      // router.push("/blogku");
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
      <h1 className="text-xl font-norma mb-4">Edit Blog-mu</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
        <p className="-mb-2 font-bold">Judul</p>
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            type="text"
            name="title"
            placeholder="Judul Blog"
            defaultValue={data.title}
          />
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files) {
                const file = e.target.files[0];
                setImage(URL.createObjectURL(file));
                setFile(file);
              }
            }}
          />
        </div>
        <Button type="submit">Update Blog</Button>
      </form>
    </div>
  );
}

export default EditBlogForm;
