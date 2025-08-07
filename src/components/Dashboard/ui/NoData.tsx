import React from "react";
import { SlDrawer } from "react-icons/sl";

const NoData = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full py-8 px-4">
      <SlDrawer className="size-24" />
      No data, please retry !
    </div>
  );
};

export default NoData;
