import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserInfo } from "../service/api";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await getUserInfo();
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      setUserData(res.data);
    } catch (err) {
      navigate("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <TableContainer
      sx={{ maxWidth: 650, margin: "auto", marginTop: "100px" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableRow>
          <TableCell
            sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
            align="center"
          >
            Firstname
          </TableCell>
          <TableCell sx={{ fontSize: "1.25rem" }} align="center">
            {userData.firstname}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
            align="center"
          >
            Lastname
          </TableCell>
          <TableCell sx={{ fontSize: "1.25rem" }} align="center">
            {userData.lastname}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
            align="center"
          >
            Email
          </TableCell>
          <TableCell sx={{ fontSize: "1.25rem" }} align="center">
            {userData.email}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
            align="center"
          >
            Phone
          </TableCell>
          <TableCell sx={{ fontSize: "1.25rem" }} align="center">
            {userData.phone}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
            align="center"
          >
            Address
          </TableCell>
          <TableCell sx={{ fontSize: "1.25rem" }} align="center">
            {userData.address}
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default About;
