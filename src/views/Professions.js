import React from 'react'
import {Box, Table} from '@mui/material'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";

export const Professions = () => {
    const [users, setUsers] = React.useState('');
    const [search, setSearch] = React.useState('');
    
  return (
    <div>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="Buscar..."
                    type="text"
                    size={'small'}
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    style={{height:50, textDecorationLine:'none', textDecorationWidth:0}}
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
            </Box>
                     
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
                        {/* {users.filter(user => {
                            return user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search) || user.age.toString().includes(search)
                        }).map((user) => (
                            <TableRow key={user.id}>
                                <TableCell align="center">{user.name}</TableCell>
                                <TableCell align="center">{user.profession.name}</TableCell>
                                <TableCell align="center">{user.profession.branches}</TableCell>
                                <TableCell align="center">{user.profession.experience}</TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

