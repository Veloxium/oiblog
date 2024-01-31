import Image from "next/image";

function ProfileTag({ tagline, image, name }: { tagline: string; image: string; name: string}) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10 rounded-full">
        {image && (
          <Image
            src={image}
            alt="profile"
            className="object-cover rounded-full"
            fill
          />
        )}
      </div>
      <div className="flex flex-col">
        <p className="-mt-0 text-md">{name}</p>
        <p className="-mt-0 text-sm text-slate-400">{tagline}</p>
      </div>
    </div>
  );
}

export default ProfileTag;
