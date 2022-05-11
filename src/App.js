import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import Teachers from "./components/Teachers";
import Create from "./components/Create";
import CreateStudent from "./components/CreateStudent";
import CreateTeacher from "./components/CreateTeacher";
import Assign from "./components/Assign";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/create" element={<Create /> } />
          <Route path="/createstudent" element={<CreateStudent />} />
          <Route path="/createteacher" element={<CreateTeacher />} />
          <Route path="/assign" element={<Assign />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
