import Comment from "@/components/comment/comment";
import DetailTag from "@/components/detailtag/detailtag";
import ListArticleDetail from "@/components/listarticle/listarticledetail";
import ProfileTag from "@/components/profiletag/profiletag";
import Image from "next/image";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    method: "GET",
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

async function DetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { post } = await getData(slug);
  return (
    <main>
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <p className="font-bold text-lg capitalize">{post.cat.title}</p>
          <div className="relative w-full h-80">
            {post.img && (
              <Image
                src={post.img}
                alt="carousel"
                className="object-cover rounded-md"
                priority
                fill
              />
            )}
          </div>
          <DetailTag post={post} />
          <div>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <div className="pt-4 pb-8">
              <ProfileTag email={post.user.email} name={post.user.name} image={post.user.image} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.desc }}
              className="text-lg"
            />
            <div className="my-10">
              <Comment postSlug={slug} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <p className="font-bold text-lg">Artikel Lainnya</p>
          <div>
            <ListArticleDetail />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
