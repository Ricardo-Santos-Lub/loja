'use client'
import { ArrowForward, Key, PasswordOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";

export default function Login() {
  
    return (
        <Box component={"section"} >
            <Box component="form" 
            >
                <Typography variant="h5">Acessar Sua Conta</Typography>
                <Input
                    id={`login`}
                    placeholder="Login"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                    sx={{ width: "100%" }}
                />
                <Input
                    id={`senha`}
                    placeholder="Senha"
                    sx={{ width: "100%" }}
                />
                <Button startIcon={<ArrowForward />} variant="contained" sx={{ width: "100%" }}>Entrar</Button>
            </Box>
        </Box>
    );
}