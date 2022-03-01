import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../components/header/index";
import {Grid, Pagination} from "@mui/material";
import * as PropTypes from "prop-types";
import {pink} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

import axios from "axios";
import ProductCard from "../components/card/ProductCard";
import HeaderPhone from "../components/header/App";


function Item(props) {
    return null;
}

Item.propTypes = {
    elevation: PropTypes.number,
    props: PropTypes.node
};


export default function Home(props) {

    return (
        <Box
            sx={{
                width: '100%',
                '& > .MuiBox-root > .MuiBox-root': {
                    p: 1,
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                },
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    gap: 1,
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: `"header header header header"
        "main main . sidebar"`,
                }}
            >
                <Box sx={{gridArea: 'header'}}>{props.top}<Pagination count={10} color="primary"/></Box>
                <Box
                    sx={{
                        bgcolor: pink[800],
                        marginTop: 6,

                    }}
                >
                    {props.left}
                </Box>

                <Box sx={{gridArea: 'sidebar', bgcolor: 'error.main', marginTop: 6,}}>
                    <Box sx={{
                        bgcolor: pink[800],
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 1,
                        gridTemplateColumns: {
                            xs: '0fr ',
                            sm: '1fr ',
                            md: '1fr 1fr',
                            lg: '1fr 1fr'
                        },
                    }}>{props.rigth}</Box>
                </Box>

            </Box>
        </Box>
    );
}
