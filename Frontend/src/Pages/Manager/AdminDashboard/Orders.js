import React, {useEffect, useState} from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Axios from "axios";
import {useNavigate} from "react-router-dom";


function preventDefault(event) {
    event.preventDefault();
}

export default function Orders() {

    const navigate = useNavigate();
    const [dashTable,setDashTable] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/DashboardUsers/Table").then((response) => {
            setDashTable(response.data);
        });
    },[]);

    return (
        <React.Fragment>
            <Title>Recently Added Users</Title>
            <Table size="small"  >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>User Type</TableCell>
                        <TableCell>Email</TableCell>
                        {/*<TableCell align="right">Sale Amount</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody >
                    {dashTable.map((row) => (
                        <TableRow key={row.UserID} >
                            <TableCell>{row.UserID}</TableCell>
                            <TableCell>{row.Date}</TableCell>
                            <TableCell>{row.UserName}</TableCell>
                            <TableCell>{row.UserRole}</TableCell>
                            <TableCell>{row.Email}</TableCell>
                            {/*<TableCell align="right">{`$${row.amount}`}</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" onClick={(event)=> {navigate("/AccountManagement", {replace: true});preventDefault(event)}} sx={{ mt: 3,cursor:'pointer' }}>
                See more Users
            </Link>
        </React.Fragment>
    );
}