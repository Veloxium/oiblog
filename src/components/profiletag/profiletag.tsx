import Image from "next/image";

function ProfileTag() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 rounded-full">
        <Image
          src={
            "https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="carousel"
          className="object-cover rounded-full"
          fill
        />
      </div>
      <div className="flex flex-col">
        <p className="-mt-0 text-xs">Mochammad Fernanda</p>
        <p className="-mt-0 text-xs text-slate-400">Mahluk Mars</p>
      </div>
    </div>
  );
}

export default ProfileTag