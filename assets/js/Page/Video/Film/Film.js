import React, {useEffect, useState} from 'react';
import ProductCard from "../../../components/card/ProductCard";
import axios from "axios";
import {Pagination} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {pink} from "@mui/material/colors";
import Box from "@mui/material/Box";
import Search from "../../../components/header/Search";
import Button from "@mui/material/Button";

const Film = ({types,type}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    const [pagecount, setpagecount] = useState([]);
    const [page, setPage] = React.useState(1);

    const url=`https://api.themoviedb.org/3/${type}/${types}?page=${page}&api_key=7220ce44fed075da0c331991d5c64c0d&language=fr-FR`
    const getData =async () => {
        axios
            .get(url)
            .then(
                (res) => {
                    setIsLoaded(true);
                    setProduct(res.data['results']);
                    setpagecount(50)

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        getData()
        window.scrollTo(0, 0);
    }, [page,types,type])

    const handleChange = (event, value) => {
        setPage(value);
    }
    const  titre=(text)=> {
        let result=text.substr(0,15)
        if (text.length>15){
            return `${result}...`
    }
        else {
            return result
        }
    }
    let navigate = useNavigate();
    function handleClick() {
        if (type==="movie"){
            navigate(`/react/film/recherche`)

        }
        else{
            navigate(`/react/serie/recherche`)
        }
    }
    if (error){
        return <h1>eror</h1>
    }
    else if (!isLoaded){
        return <h1>chargement...</h1>
    }
    else {
        return (
            <>
                <Button
                    variant="contained"
                    sx={{
                        my: 2,
                        color: 'white',
                        display: 'block',
                        backgroundColor: pink[900],
                        marginLeft: 2
                    }}
                    onClick={handleClick}

                >
                    Rechercher une film
                </Button>
                <Box sx={{
                    display: 'grid',
                    columnGap: 2,
                    rowGap: 1,
                    marginBottom: 1,
                    gridTemplateColumns: {
                        xs: '1fr 1fr',
                        sm: '1fr 1fr 1fr',
                        md: '1fr 1fr 1fr 1fr',
                        lg: '1fr 1fr 1fr 1fr 1fr'
                    },
                }}>
                    {
                        product.map((products) => (
                                <Link to={type === "movie" ?`/react/film/${products.id}`:`/react/serie/${products.id}`} key={`${products.id}`}>
                                    <ProductCard sx={{boxShadow: 6,}}
                                                 title={type === "movie" ? products.title : products.name}
                                                 img={`https://iage.tmdb.org/t/p/w500${products.poster_path}`}/>
                                </Link>
                            )
                        )
                    }
                </Box>


                <Pagination count={pagecount} page={page} onChange={handleChange} color="primary"/>

            </>
        )

    }

};

export default Film;
