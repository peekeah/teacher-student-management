import React, { useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";

function Assign() {
  const URL = "https://61cbf244198df60017aebdbf.mockapi.io";

  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    setCounter(counter + 1);

    axios
      .get(`${URL}/Teacher`)
      .then((res) => setTeacherList(res.data.map((teacher) => teacher.name)));
  }, []);

  useEffect(() => {
    const getStudents = async () => {
      const response = await axios.get(`${URL}/students`);
      const students = response.data
        .filter((item) => (item = !item.teacher))
        .map((item) => ({ ...item, teacher: "" }))
        .filter((item) => item !== Object.values(item).includes["teacher"]);
      setData(students);
    };
    getStudents();
  }, [counter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const id = name;
    const dataCopy = [...data];
    const index = Object.values(dataCopy).findIndex((item) => item.id === id);
    let temp = dataCopy[index];
    temp["teacher"] = value;
    dataCopy[index] = temp;
    setData(dataCopy);
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const index = data.findIndex((item) => item.id === id);
    let selectedItem = data[index];
    delete selectedItem.id;
    
    if(selectedItem.teacher) {
      try {
        await axios.put(`${URL}/students/${id}`, selectedItem);
        setCounter(counter + 1);
      } catch (err) {
        console.log(err);
      }
      alert("Success!")
     
    } else {
      alert("Plese Select the mentor from list")
    }
  };

  return (
    <>
      <div className="container mx-auto mt-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Assign Mentor</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Select
                      labelId="demo-simple-select-label"
                      id={item.id}
                      value={item.teacher}
                      name={item.id}
                      defaultValue="Simon"
                      sx={{ width: "70%" }}
                      label="Select Teacher"
                      onChange={handleChange}
                      variant="outlined"
                    >
                      {teacherList.map((teacher, id) => (
                        <MenuItem key={`select${id}`} value={teacher}>
                          {teacher}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      type="submit"
                      onClick={(e) => handleSubmit(e, item.id)}
                    >
                      <SaveIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Assign;
