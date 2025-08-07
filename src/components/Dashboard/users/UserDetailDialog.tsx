"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { UserType } from "@/types";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,

  p: 4,
};

export default function UserDetailDialog({
  children,
  data,
}: {
  data: UserType;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="cursor-pointer" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ borderRadius: "10px", ...style }}>
          <div className="flex flex-col w-full">
            <div className="flex w-full items-center justify-center p-4">
              <Image
                className="size-32 rounded-full"
                src={data.avatar}
                alt="avatar"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col w-full gap-2 text-black">
              <h1>
                <span className="font-semibold">First name :</span>{" "}
                {data.first_name}
              </h1>
              <h1>
                <span className="font-semibold">Last name :</span>{" "}
                {data.last_name}
              </h1>
              <h1>
                <span className="font-semibold">Email :</span> {data.email}
              </h1>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
