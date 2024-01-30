import MyCarousel from "@/components/carousel/mycarousel";
import ListArticle from "@/components/listarticle/listarticle";
import SearchBar from "@/components/searchbar/searchbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home({ searchParams }: { searchParams: any }) {
  const page = parseInt(searchParams?.page as string) || 1;
  const cat = (searchParams?.cat as string) || "";
  const search = (searchParams?.search as string) || "";

  return (
    <main>
      <div className="mt-6">
        <MyCarousel />
      </div>
      <div className="my-16 flex flex-col gap-6">
        <SearchBar /> 
        <ListArticle page={page} cat={cat} search={search} />
      </div>
    </main>
  );
}
