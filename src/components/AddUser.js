import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomSelect from "./CustomSelect";
import {Professions, Software, Education, Medicine, Experience} from "../util/contants";

export const AddUser = ({nuevoUsuario, updateUser, open, close, onChange, model}) => {

    const onClick = () => {
        if (model.id) {
            updateUser()
        } else {
            nuevoUsuario()
        }
    }


    const ProfessionType = React.useMemo(() => {
        switch (model.profession.name) {
            case 'Medicine':
                return Medicine
            case 'Software Engineering':
                return Software
            case 'Education':
                return Education
            default:
                return []
        }
    }, [model.profession.name])


    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle> {model.id ? "Update" : "Add"} User</DialogTitle>
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
                        value={model.name}
                        style={{marginBottom:8}}
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
                        value={model.age}
                        style={{marginBottom:20}}
                        onChange={onChange}
                    />

                    <CustomSelect style={{marginBottom: 20}} label={'Profession'}
                                  onChange={(e) => onChange(e, 'profession', 'name')} value={model.profession.name}
                                  options={Professions}/>


                        <CustomSelect disabled={!model.profession.name} style={{marginBottom: 20}} label={'Rama'}
                                      onChange={(e) => onChange(e, 'profession', 'branches')}
                                      value={model.profession.branches} options={ProfessionType}/>



                        <CustomSelect disabled={!model.profession.branches} style={{marginBottom: 20}} label={'Experiencia'}
                                      onChange={(e) => onChange(e, 'profession', 'experience')} value={model.profession.experience}
                                      options={Experience}/>




                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={model.email}
                        style={{marginBottom:8}}
                        onChange={onChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Cancel</Button>
                    <Button onClick={onClick}>{model.id ? "Update" : "Add"}</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
