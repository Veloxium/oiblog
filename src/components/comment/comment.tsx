import Image from "next/image";
import { Button } from "../ui/button";

function Comment() {
  const authenticated = true;

  return (
    <div className="flex flex-col gap-2 border-t-2 pt-6">
      <h2 className="text-xl font-bold">Comments(3)</h2>
      {authenticated ? (
        <div className="flex gap-4 py-4">
          <div className="relative w-8 h-8 rounded-full aspect-square">
            <Image
              src={
                "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="carousel"
              className="object-cover rounded-full aspect-square"
              fill
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <textarea
              name=""
              id=""
              className="w-full bg-slate-100 px-4 py-3 rounded-md"
              rows={4}
              placeholder="Tulis komentar disini..."
            ></textarea>
            <Button variant={"outline"}>Post</Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 py-8 rounded-md justify-center bg-slate-200">
          <p>Login terlebih dahulu😭</p>
        </div>
      )}
      <div className="flex flex-col gap-6 my-8">
        <div className="flex gap-4">
          <div className="relative w-8 h-8 rounded-full aspect-square">
            <Image
              src={
                "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="carousel"
              className="object-cover rounded-full aspect-square"
              fill
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex gap-2 items-end">
              <p className="-mt-0 font-medium">Mark Newbergh</p>
              <span className="text-sm text-gray-500">1j yang lalu</span>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              officia, voluptatem, voluptates, quibusdam natus quidem quod
              voluptatum fugit doloribus quia dolorum. Quasi officia,
              voluptatem, voluptates.
            </p>
          </div>
        </div>
          <div className="flex gap-4">
            <div className="relative w-8 h-8 rounded-full aspect-square">
              <Image
                src={
                  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="carousel"
                className="object-cover rounded-full aspect-square"
                fill
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex gap-2 items-end">
                <p className="-mt-0 font-medium">Mark Newbergh</p>
                <span className="text-sm text-gray-500">1j 40m yang lalu</span>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative w-8 h-8 rounded-full aspect-square">
              <Image
                src={
                  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="carousel"
                className="object-cover rounded-full aspect-square"
                fill
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex gap-2 items-end">
                <p className="-mt-0 font-medium">Mark Newbergh</p>
                <span className="text-sm text-gray-500">2j 3m yang lalu</span>
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                officia, voluptatem, voluptates,
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Comment;
