import Image from "next/image";

// const getData = async (email: string) => {
//   const res = await fetch(`http://localhost:3000/api/users/${email}`, {
//     method: "GET",
//   });
//   if (!res.ok) {
//     throw new Error(res.statusText);
//   }
//   return res.json();
// };

async function ProfileTag({ email, image, name }: { email: string; image: string; name: string}) {
  // const { user } = await getData(email);
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 rounded-full">
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
        <p className="-mt-0 text-xs">{name}</p>
        <p className="-mt-0 text-xs text-slate-400">{email}</p>
      </div>
    </div>
  );
}

export default ProfileTag;
