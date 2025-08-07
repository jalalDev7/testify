import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { BiPlus, BiShoppingBag, BiUser } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { GiHelp } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-fit p-4 bg-[#5c5cf7] min-h-screen lg:min-w-64 max-w-64 fixed top-0 left-0 justify-between">
      <div className="flex flex-col w-full">
        <div className=" flex-row items-center gap-2 mt-4 hidden lg:flex">
          <FaLaptopCode className="size-8" />
          <h1 className="uppercase text-xl font-semibold">Testify</h1>
        </div>
        <Link href="/create">
          <div className="flex gap-2 w-full bg-blue-500 text-white  items-center justify-center rounded-md py-1 px-2 lg:px-4 mt-2 lg:mt-8">
            <BiPlus className="size-6" />
            <h1 className="hidden lg:flex">Create new user</h1>
          </div>
        </Link>
        <div className="flex flex-col w-full mt-4 gap-2">
          <Link
            href="/"
            className="flex flex-row items-center gap-2 bg-blue-200 text-black hover:bg-blue-200 hover:text-black px-2 py-1 rounded-md transition-all duration-200 ease-in-out"
          >
            <BiUser className="size-6 lg:size-4" />
            <h1 className="hidden lg:flex">Users</h1>
          </Link>
          <Link
            href="/"
            className="flex flex-row items-center gap-2 hover:bg-blue-200 hover:text-black px-2 py-1 rounded-md transition-all duration-200 ease-in-out"
          >
            <AiFillProduct className="size-6 lg:size-4" />
            <h1 className="hidden lg:flex">Products</h1>
          </Link>
          <Link
            href="/"
            className="flex flex-row items-center gap-2 hover:bg-blue-200 hover:text-black px-2 py-1 rounded-md transition-all duration-200 ease-in-out"
          >
            <BiShoppingBag className="size-6 lg:size-4" />
            <h1 className="hidden lg:flex">Orders</h1>
          </Link>
          <Link
            href="/"
            className="flex flex-row items-center gap-2 hover:bg-blue-200 hover:text-black px-2 py-1 rounded-md transition-all duration-200 ease-in-out"
          >
            <CiSettings className="size-6 lg:size-4" />
            <h1 className="hidden lg:flex">Settings</h1>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 hover:bg-blue-200 hover:text-black px-2 py-1 rounded-md transition-all duration-200 ease-in-out"
        >
          <GiHelp className="size-6 lg:size-4" />
          <h1 className="hidden lg:flex">Get help</h1>
        </Link>
        <button className="flex flex-row items-center gap-2 hover:bg-blue-200 hover:text-black px-2 py-1 rounded-md transition-all duration-200 ease-in-out">
          <LuLogOut className="size-6 lg:size-4" />
          <h1 className="hidden lg:flex">Logout</h1>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
