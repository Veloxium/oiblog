import ListArticleDetail from "@/components/listarticle/listarticledetail";
import Image from "next/image";

function DetailPage() {
  return (
    <main>
      <div className="w-full flex gap-8">
        <div className="w-2/3 flex flex-col gap-4">
          <p className="font-bold">Teknologi</p>
          <div className="relative w-full h-80">
            <Image
              src={
                "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="carousel"
              className="object-cover rounded-md"
              fill
            />
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <p className="font-bold">Artikel Lainnya</p>
          <div>
           <ListArticleDetail />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
