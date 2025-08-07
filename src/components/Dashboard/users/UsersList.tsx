"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";
import { getUsers } from "@/data/users";
import { UserType } from "@/types";
import { BiEdit, BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import LoadingData from "../ui/LoadingData";
import NoData from "../ui/NoData";
import { useState } from "react";
import UserDetailDialog from "./UserDetailDialog";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";

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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" sx={{ color: "black" }}>
              Users list
            </Typography>
            <Typography sx={{ color: "black" }}>
              Manage your users, update or delete.
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            {isLoading ? (
              <LoadingData />
            ) : users ? (
              <>
                <Table sx={{ minWidth: 650 }} aria-label="users table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: "bold", width: "12px" }}
                        size="small"
                      >
                        Avatar
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Nom</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Prenom</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Details</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="right">
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user: UserType) => (
                      <TableRow
                        key={user.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Avatar src={user.avatar} alt={user.first_name} />
                        </TableCell>
                        <TableCell>{user.first_name}</TableCell>
                        <TableCell>{user.last_name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <UserDetailDialog data={user}>
                            <Button>Show more data</Button>
                          </UserDetailDialog>
                        </TableCell>
                        <TableCell align="right">
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              justifyContent: "flex-end",
                              alignItems: "center",
                            }}
                          >
                            <BiEdit className="size-5 text-blue-500 cursor-pointer" />
                            <MdDelete className="size-5 text-red-500 cursor-pointer" />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
