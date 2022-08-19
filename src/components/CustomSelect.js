import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";


export default function CustomSelect({options = [], value, onChange, label, style, disabled}) {

    return (
        <FormControl variant='standard' fullWidth style={style}>
            <InputLabel>{label}</InputLabel>
            <Select
                disabled={disabled}
                value={value}
                label={label}
                onChange={onChange}
            >
                {options.map(((option, index) => {
                    return (
                        <MenuItem key={index} value={option}>{option}</MenuItem>
                    )
                }))}
            </Select>
        </FormControl>
    )
}
