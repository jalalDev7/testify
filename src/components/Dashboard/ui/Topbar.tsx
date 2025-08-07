import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex flex-row items-center w-full border-b border-gray-400 pb-2 px-2 gap-4">
      <Image
        className="size-10 rounded-full"
        src="/profile.jpg"
        alt="avatar"
        width={500}
        height={500}
      />
      <div className="flex flex-col text-sm">
        <h2 className="font-semibold  text-black">@Username</h2>

        <h3 className="font-light text-gray-500">Admin</h3>
      </div>
    </div>
  );
};

export default Topbar;
