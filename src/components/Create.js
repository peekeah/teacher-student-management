import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const navigate = useNavigate();
  return (
    <>
        <div className="container d-flex gap-5 justify-content-center align-items-center" style={{height: "75vh"}}>
            <Button variant="contained" color="secondary" onClick={() => navigate('/createstudent')}>Create Student</Button>
            <Button variant="contained" color="secondary" onClick={() => navigate('/createteacher')}>Create Teacher</Button>
        </div>
    </>
  )
}
