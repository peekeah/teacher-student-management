import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Button onClick={() => navigate("/students")} color="inherit">Students</Button>
            <Button onClick={() => navigate("/teachers")} color="inherit">teachers</Button>
            <Button onClick={() => navigate("/create")} color="inherit">create</Button>
            <Button onClick={() => navigate("/assign")} color="inherit">assign</Button>
            {/* <Button color="inherit">Teachers</Button>
            <Button onClick={() => navigate("/createstudent")} color="inherit">Create</Button>
            <Button onClick={() => navigate("/createteacher")} color="inherit">Assign</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
