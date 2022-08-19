import React from 'react'
import {AddUser} from '../components/AddUser';
import Button from "@mui/material/Button";
import {Box, Tab,} from '@mui/material'
import TextField from "@mui/material/TextField";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Professions} from "../views/Professions";
import TableUser from "../views/TableUser";

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

export default function Client() {
    const [users, setUsers] = React.useState(userDemo);
    const [open, setOpen] = React.useState(false);
    const [model, setModel] = React.useState(new UserModel());
    const [search, setSearch] = React.useState('');


    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                <Button variant='outlined' size={'large'} style={{height: 50}} onClick={() => setOpen(true)}>New
                    User</Button>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="Search..."
                    type="text"
                    size={'small'}
                    variant="filled"
                    InputProps={{disableUnderline: true}}
                    style={{height: 50, textDecorationLine: 'none', textDecorationWidth: 0}}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Box>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange}>
                        <Tab label="Users" value="1"/>
                        <Tab label="Professions" value="2"/>
                    </TabList>
                </Box>
                <TabPanel value="1">{
                    <TableUser users={users} search={search} onDelete={onDelete} onEdit={onEdit}/>
                }</TabPanel>
                <TabPanel value="2">
                    <Professions users={users} search={search}/>
                </TabPanel>
            </TabContext>

            <AddUser model={model} open={open} close={onReset} nuevoUsuario={nuevoUsuario} updateUser={updateUser} onChange={onChange}/>
        </div>
    )
}
