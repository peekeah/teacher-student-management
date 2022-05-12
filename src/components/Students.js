import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function Students() {
  const URL = "https://61cbf244198df60017aebdbf.mockapi.io/students";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => setData(res.data));
  }, []);

  return (
    <>
      <div className="container mx-auto mt-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>City</TableCell>
                {/* <TableCell>Actions</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  {/* <TableCell align="right">{item.name}</TableCell> */}
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  {/* <TableCell><></></TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Students;
