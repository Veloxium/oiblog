import Comment from "@/components/comment/comment";
import ListArticleDetail from "@/components/listarticle/listarticledetail";
import ProfileTag from "@/components/profiletag/profiletag";
import { Bold } from "lucide-react";
import Image from "next/image";

function DetailPage() {
  return (
    <main>
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 flex flex-col gap-4">
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
          <div className="flex justify-between items-center">
            <p className="text-sm p-2 bg-slate-100 rounded-md">2 Jan 2024</p>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 p-2 bg-slate-100 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <p className="-mt-0 text-sm">20</p>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-100 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              doloremque omnis facilis?
            </h1>
            <div className="py-4">
              <ProfileTag />
            </div>
            <div className="">
              <p>
                <strong>Lorem ipsum dolor sit</strong>, amet consectetur
                adipisicing elit. Voluptatem totam asperiores dicta aperiam
                voluptatibus enim maiores veritatis earum dolorem, alias hic cum
                ipsum et, voluptatum accusantium repudiandae modi sequi suscipit
                voluptate eligendi voluptates! Dolore autem, sapiente veritatis
                amet ipsum dolorem fuga est aut repellat ab laboriosam minima
                corrupti eius ea pariatur dicta natus optio magni impedit
                officia architecto consectetur? Dolore dolorem debitis nobis.
                Officia eos tenetur, assumenda <i>repudiandae eveniet</i> quia
                laborum distinctio vero at necessitatibus impedit velit.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, <u>nam dolorum doloremque</u> esse et deserunt enim
                repellendus laudantium quas saepe. Iusto nobis repellat ipsa
                nostrum? Voluptatibus odit dolor at iure.
              </p>
              <br />
              <p>
                Temporibus perferendis ex, reiciendis, esse natus iste
                voluptates vel recusandae placeat pariatur suscipit. Error quas
                cupiditate voluptatum? Vero perspiciatis optio, dignissimos
                nostrum corrupti magni dolorum, minus harum distinctio error
                expedita enim dolores eum blanditiis et, sunt quidem facere
                ratione doloribus. Quis possimus quae quas, veniam ratione
                eligendi dignissimos et exercitationem voluptates officia
                voluptatem nobis tenetur.
              </p>
              <br />
              <p>
                dolorum suscipit? Iste eius quo aliquam non consequatur
                veritatis atque quia commodi quasi magni laboriosam, debitis
                repudiandae omnis rerum laborum ipsam sint ex! Recusandae ea
                officiis et iure, repellendus illum iste praesentium sed,
                reprehenderit quibusdam itaque omnis laudantium, possimus
                consectetur maiores aliquam sunt animi eum beatae assumenda!
                Veniam laborum architecto pariatur magnam perspiciatis error
                eaque dolor vitae, quis iure veritatis quo minus assumenda,
                rerum laboriosam est? Maxime, sapiente sint.
              </p>
            </div>
            <div className="my-10">
              <Comment />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-4">
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
