import Comment from "@/components/comment/comment";
import DetailTag from "@/components/detailtag/detailtag";
import ListArticleDetail from "@/components/listarticle/listarticledetail";
import ProfileTag from "@/components/profiletag/profiletag";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Detail Blog",
};

const getData = async (slug: string) => {
  const res = await fetch(`https://oiblog.vercel.app/api/posts/${slug}`, {
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
        <div className="w-full flex flex-col gap-4">
          <p className="font-bold text-lg capitalize">{post.cat.title}</p>
          <div className="relative w-full h-96">
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
            <div className="mt-8 mb-10">
              <ProfileTag tagline={post.user.tagline} name={post.user.name} image={post.user.image} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.desc }}
              className="text-lg textdesc"
            />
            <div className="my-10">
              <Comment postSlug={slug} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[400px] flex flex-col gap-4">
          <p className="font-bold text-lg">Blog Lainnya</p>
          <div>
            <ListArticleDetail />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
