import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect, useState} from "react";
import axios from "axios";
import {Backdrop, CircularProgress} from "@mui/material";
import PubCard from "../components/card/PubCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Menu(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    const [pagecount, setpagecount] = useState([]);

    const url = `https://127.0.0.1:8000/api/pubs.json?`
    const getData = async () => {
        axios
            .get(url)
            .then((res) => {
                setIsLoaded(true);
                setProduct(res.data);
                setpagecount(50)

            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }
    useEffect(() => {
        getData()
        window.scrollTo(0, 0);
    }, [])
    if (error) {
        return <h1>Erreur de chargement veuiller recharger la page</h1>
    } else if (!isLoaded) {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    } else {
        return(
            <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 12, sm: 12, md: 12}}>
                {product.map((products) => (
                    <Grid item xs={12} sm={12} md={4} >
                 <PubCard products={products} />
                    </Grid>

                ))}
            </Grid>

        )

}}
