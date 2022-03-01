import * as React from 'react';
import * as PropTypes from "prop-types";
import {useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";
import ProductCard from "../components/card/ProductCard";
import HeaderPhone from "../components/header/App";
import Home from "../components/Home";
import {pink} from "@mui/material/colors";
import {bindTrigger} from "material-ui-popup-state";
import Button from "@mui/material/Button";
import {Pagination} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function App() {
    const styles = (theme) => ({
        root: {
            padding: theme.spacing(1),
            [theme.breakpoints.down('md')]: {
                backgroundColor: theme.palette.secondary.main,
            },
            [theme.breakpoints.up('md')]: {
                backgroundColor: theme.palette.primary.main,
            },
            [theme.breakpoints.up('lg')]: {
                backgroundColor: green[500],
            },
        },
    });
    const [lien,setlien] = useState(0);
    useEffect(()=>{
        setlien(window.location.pathname)
    },[<Outlet/>])
    console.log(lien)
    return (
        <Home
        top={<HeaderPhone/>}
        left={

            <Outlet/>
        }
        rigth={
            <>
                <Typography>
                    bonjour
                </Typography>
            </>
        }
        />
    );
}
