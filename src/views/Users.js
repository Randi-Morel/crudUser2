import React from 'react'
import {AddUser} from '../components/AddUser';
import Button from "@mui/material/Button";
import {Box, IconButton, Table} from '@mui/material'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import TextField from "@mui/material/TextField";

class UserModel {
    id = null;
    name = '';
    age = '';
    email = '';
    profession = {
        name: null,
        branches: null,
        experience: null,
    };
}

const userDemo = [
    {
        id: 1,
        name: 'Jansi',
        age: 28,
        email: 'Jansi@gmail.com',
        profession: {
            name: null,
            branches: null,
            experience: null,
        }
        },
    {
        id: 2,
        name: 'Randy',
        age: 17,
        email: 'Randy@hotmail.com',
        profession: {
            name: null,
            branches: null,
            experience: null,
        },
    }
]

export const Users = () => {
    const [users, setUsers] = React.useState(userDemo);
    const [open, setOpen] = React.useState(false);
    const [model, setModel] = React.useState(new UserModel());
    const [search, setSearch] = React.useState('');

    const onReset = () => {
        setModel(new UserModel())
        setOpen(false)
    };

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    const nuevoUsuario = () => {
        let id = uuidv4()
        let userList = [...users]
        userList.push({...model, id})
        setUsers(userList)
        onReset()
    };

    const updateUser = () => {
        let userList = [...users]
        userList.splice(users.findIndex(u => u.id === model.id), 1, model);
        setUsers(userList)
        onReset()
    };

    const onEdit = (userId) => {
        let userList = [...users]
        let currentUser = userList.find(u => u.id === userId)
        setModel(prevState => ({...prevState, ...currentUser}))
        setOpen(true)
    };

    const onDelete = (userId) => {
        let userList = [...users].filter(u => u.id !== userId)
        setUsers(userList)
        onReset()
    };

    const onChange = (e, object, objectName) => {
        const {type, target} = e
        const {name, value} = target

        if (type === 'change') {
            setModel(prevState => ({...prevState, [name]: value}))
        }

        if (type === 'click' && object === 'profession') {
            let prevState = {...model}
            prevState[object][objectName] = value
            setModel(prevState)
        }
    };

    return (
        <div>

            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
                <Button variant='outlined' size={'large'} style={{height:50}} onClick={() => setOpen(true)}>Nuevo Usuario</Button>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="Buscar..."
                    type="text"
                    size={'small'}
                    variant="filled"
                    style={{height:50, textDecorationLine:'none', textDecorationWidth:0}}
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
            </Box>

            <AddUser model={model} open={open} close={onReset} nuevoUsuario={nuevoUsuario} updateUser={updateUser}
                     onChange={onChange}/>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Users</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Profession</TableCell>
                            <TableCell align="center">Rama</TableCell>
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
        </div>
    )
}
