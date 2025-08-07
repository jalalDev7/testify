import React from "react";
import { BiLoader } from "react-icons/bi";

const LoadingData = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full py-16 px-4 min-h-[550px]">
      <BiLoader className="size-16 animate-spin" />
      Loading data...
    </div>
  );
};

export default LoadingData;
