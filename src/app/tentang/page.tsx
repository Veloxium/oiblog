import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tentang",
};

function TentangPage() {
  return (
    <main>
      <div className="min-h-[80vh] flex flex-col items-center gap-10 py-10">
        <div className="relative w-[200px] h-[200px]">
          <Image src={"/cat.jpg"} alt="cat" fill className="object-cover" />
        </div>
        <div className="max-w-[800px]">
          <p>
            Selamat datang di <span className="font-bold">Oi Blog</span> -
            platform blog serbaguna yang memberikan kebebasan kepada penggunanya
            untuk mengekspresikan diri dan berbagi informasi. Dengan beragam
            topik yang tersedia, setiap pengguna dapat memilih dan membuat blog
            sesuai dengan minat pribadi mereka.
          </p>
          <p>Terimakasih Sudah Mampir 🥰</p>
          <p>
            <a
              target="_blank"
              href="https://github.com/Veloxium"
              className=" text-blue-600 dark:text-blue-400 hover:underline"
            >
              - Veloxium
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default TentangPage;
