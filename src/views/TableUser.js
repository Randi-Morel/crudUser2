import React from 'react';
import {Box, IconButton, Tab, Table, Typography} from '@mui/material';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";


export default function TableUser({users, search, onEdit, onDelete}) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Users</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Profession</TableCell>
                        <TableCell align="center">Branch</TableCell>
                        <TableCell align="center">Experiencia</TableCell>
                        <TableCell align="center">Mail</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.filter(user => {
                        return user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search) || user.age.toString().includes(search)
                    }).map((user) => (
                        <TableRow key={user.id}>
                            <TableCell align="center">{user.name}</TableCell>
                            <TableCell align="center">{user.age}</TableCell>
                            <TableCell align="center">{user.profession.name}</TableCell>
                            <TableCell align="center">{user.profession.branches}</TableCell>
                            <TableCell align="center">{user.profession.experience}</TableCell>
                            <TableCell align="center">{user.email}</TableCell>

                            <TableCell align='center'>
                                <IconButton onClick={() => onEdit(user.id)} style={{marginRight: 25}}
                                            aria-label="delete">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton onClick={() => onDelete(user.id)} style={{marginRight: 15}}
                                            aria-label="delete">
                                    <ClearIcon color='error'/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
