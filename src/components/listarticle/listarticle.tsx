import MyPagination from "../pagination/mypagination";
import CardArticle from "./cardarticle";

const getData = async (page: number, cat: string, search: string) => {
  const res = await fetch(
    `https://oiblog.vercel.app/api/posts?page=${page}&cat=${cat}&search=${search}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

async function ListArticle({
  page,
  cat,
  search,
}: {
  page: number;
  cat: string;
  search: string;
}) {
  const { posts, count } = await getData(page, cat, search);
  const POST_PER_PAGE = 6;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.map(
          (item: {
            id: string;
            title: string;
            slug: string;
            desc: string;
            img: string | null;
            views: number;
            catSlug: string;
            createdAt: string;
            cat: { title: string };
            user: { name: string; image: string; tagline: string };
          }) => (
            <CardArticle key={item.id} item={item} />
          )
        )}
      </div>
      {posts == "" && (
        <div className="flex justify-center items-center h-40">
          Tidak ada Blog
        </div>
      )}
      <div className="mt-8">
        <MyPagination
          hasPrev={hasPrev}
          hasNext={hasNext}
          page={page}
          cat={cat}
        />
      </div>
    </div>
  );
}

export default ListArticle;
