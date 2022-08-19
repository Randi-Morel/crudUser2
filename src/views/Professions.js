import React from 'react'
import {Box, Table} from '@mui/material'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Professions = ({users, search}) => {

    return (

        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Users</TableCell>
                        <TableCell align="center">Profession</TableCell>
                        <TableCell align="center">Rama</TableCell>
                        <TableCell align="center">Experiencia</TableCell>
                        <TableCell align="center">Mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.filter(user => {
                        return user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search) || user.age.toString().includes(search)
                    }).map((user) => (
                        <TableRow key={user.id}>
                            <TableCell align="center">{user.name}</TableCell>
                            <TableCell align="center">{user.profession.name}</TableCell>
                            <TableCell align="center">{user.profession.branches}</TableCell>
                            <TableCell align="center">{user.profession.experience}</TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

