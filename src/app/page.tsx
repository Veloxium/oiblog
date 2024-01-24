import MyCarousel from "@/components/carousel/mycarousel";


export default function Home() {
  return (
    <main>
      <div className="mt-6">
        <h1 className="text-xl mb-2 font-normal">Artikel Terbaru</h1>
        <MyCarousel />
      </div>
    </main>
  );
}
