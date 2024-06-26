"use client";
import React from 'react'
import {useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const schema = yup.object({
    name: yup.string().required("Please Enter Name!"),
    email: yup.string().email().required("Please Enter Email!"),
  }).required()

export default function userDetails({handleIsAddClose, rows}) {

    const [utype, setUtype] = useState('User');

    const {register,handleSubmit,reset,formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if(rows){

            setUtype(rows.type)

            reset({
                id: rows.id,
                name: rows.name,
                email: rows.email,
            })
        }
    }, [])

    const onSubmit = (data) => {
        
        Object.assign(data,{type: utype});
        console.log(data);

        if(rows) {                    
            axios.put('/api/users',JSON.stringify(data))
            .then(response => {
                console.log('Data ',response);
                // setData(response.data);
                // setLoading(false);
                toast.success('🦄 Data Added!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                handleIsAddClose();

            })
            .catch(err => {
                console.log('Error ',err);
                toast.error(err, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            })
        } else{
                    
            axios.post('/api/users',JSON.stringify(data))
            .then(response => {
                console.log('Data ',response);
                // setData(response.data);
                // setLoading(false);
                toast.success('🦄 Data Added!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                handleIsAddClose();

            })
            .catch(err => {
                console.log('Error ',err);
                toast.error(err, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            })
        }
    };

    const handleChange = (event) => {
        setUtype(event.target.value);
    };

    return (
        <>
        <div className="flex justify-start">
            <ArrowBackIcon className="mr-2" onClick={()=>handleIsAddClose()} />
            <h2 className="font-bold mb-4">Add User</h2>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                    <TextField fullWidth size="small" label="Name" {...register("name")} variant="outlined" />
                    <p className="text-orange-600 ml-1 text-xs">{errors.name?.message}</p>
                </div>

                <div className="div">
                    <TextField fullWidth size="small" label="Email" {...register("email")} variant="outlined" />
                    <p className="text-orange-600 ml-1 text-xs">{errors.email?.message}</p>
                </div>

                <div className="div">
                    <FormControl fullWidth>
                        <InputLabel size="small">
                            Type
                        </InputLabel>
                        <Select                            
                            value={utype}
                            label="Type"
                            size="small"
                            onChange={handleChange}
                        >
                            <MenuItem value="User">User</MenuItem>
                            <MenuItem value="Manager">Manager</MenuItem>
                            <MenuItem value="Admin">Admin</MenuItem>
                        </Select>
                    </FormControl>
                </div>

            </div>
            <div className="mt-2 flex justify-end">
                <Button type="submit"  variant="outlined" className="mb-2">
                    Save
                </Button>
            </div>
        </form>

        </>
    )
}
