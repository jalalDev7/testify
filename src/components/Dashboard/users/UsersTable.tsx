import { UserType } from "@/types";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import UserDetailDialog from "./UserDetailDialog";
import { Avatar, Box, Button } from "@mui/material";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const UsersTable = ({ users }: { users: UserType[] }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="users table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold", width: "12px" }} size="small">
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
              <UserDetailDialog data={user}>
                <Avatar src={user.avatar} alt={user.first_name} />
              </UserDetailDialog>
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
  );
};

export default UsersTable;
