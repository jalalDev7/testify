"use client";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";
import { getUsers } from "@/data/users";
import { UserType } from "@/types";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import LoadingData from "../ui/LoadingData";
import NoData from "../ui/NoData";
import { useState } from "react";
import UserDetailDialog from "./UserDetailDialog";
import { Avatar, Box, Container } from "@mui/material";
import UsersTable from "./UsersTable";
import SectionHeader from "../ui/SectionHeader";

// in that component i use some components from MUI as you mentioned in the email.
export default function UsersList() {
  const [page, setPage] = useState(1);
  const { data: users, isLoading } = useQuery(["users", page], () =>
    getUsers(page)
  );
  const nextPage = () => {
    if (page < 2) {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
          borderRadius: "10px",
          px: 4,
          py: 2,
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full">
            <SectionHeader
              title="Users"
              subtitle="Manage your users, delete or update."
            />
            <div className="flex flex-row items-center -space-x-2">
              {users &&
                users.map((user: UserType) => (
                  <UserDetailDialog data={user} key={user.id}>
                    <Avatar
                      src={user.avatar}
                      alt={user.first_name}
                      sx={{ width: 40, height: 40 }}
                      className="hover:scale-125 transform transition-all duration-300 ease-in-out cursor-pointer border border-gray-700"
                    />
                  </UserDetailDialog>
                ))}
            </div>
          </div>
          <TableContainer component={Paper}>
            {isLoading ? (
              <LoadingData />
            ) : users ? (
              <>
                <UsersTable users={users} />
                <Box className="flex flex-row items-center gap-2 px-4 py-1 w-full ">
                  <h3 className="text-sm">Page {page}</h3>
                  <div
                    className={`gap-2 flex flex-row items-center text-sm border rounded-md px-2 py-1 cursor-pointer ${
                      page === 1 ? "opacity-20 cursor-default" : ""
                    }`}
                    onClick={prevPage}
                  >
                    <BiLeftArrow />
                  </div>
                  <div
                    className={`gap-2 flex flex-row items-center text-sm border rounded-md px-2 py-1 cursor-pointer ${
                      page === 2 ? "opacity-20 cursor-default" : ""
                    }`}
                    onClick={nextPage}
                  >
                    <BiRightArrow />
                  </div>
                </Box>
              </>
            ) : (
              <NoData />
            )}
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
}
