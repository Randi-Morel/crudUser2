import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const AddUser = ({nuevoUsuario, updateUser, modal, open, close, onChange, handleChange, profession}) => {

    const onClick = () => {
        if (modal.id) {
            updateUser()
        } else {
            nuevoUsuario()
        }
    }

    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle> {modal.id ? "Update" : "Add"} User</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        User info
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={modal.name}
                        onChange={onChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="age"
                        name="age"
                        label="Age"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={modal.age}
                        onChange={onChange}
                    />
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl variant='standard' fullWidth>
                        <InputLabel id="profession-label">Profession</InputLabel>
                        <Select
                            id="profession-select"
                            value={profession}
                            label="Profession"
                            onChange={handleChange}
                        >
                            <MenuItem value={'medicine'}>Medicine</MenuItem>
                            <MenuItem value={'software engineering'}>Software Engineering</MenuItem>
                            <MenuItem value={'education'}>Education</MenuItem>
                        </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={modal.email}
                        onChange={onChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Cancel</Button>
                    <Button onClick={onClick}>{modal.id ? "Update" : "Add"}</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}