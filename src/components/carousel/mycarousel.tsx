import ListCarousel from "./listcarousel";

const getData = async () => {
  const res = await fetch(`https://oiblog.vercel.app/api/posts/newest`, {
    method: "GET",
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

async function MyCarousel() {
  const {posts} = await getData();
  return (
    <ListCarousel items = {posts}/>
  );
}

export default MyCarousel;
