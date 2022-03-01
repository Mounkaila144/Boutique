import React, {useEffect, useState} from 'react';
import ProductCard from "../../../components/card/ProductCard";
import axios from "axios";
import {Pagination} from "@mui/material";

const GenreFilm = ({genre}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    const [pagecount, setpagecount] = useState([]);
    const [page, setPage] = React.useState(1);

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=7220ce44fed075da0c331991d5c64c0d&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`
    const getData = async () => {
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
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
    }
    return (
        <>
            {
                product.map((products) => (
                        <ProductCard title={products.title} img={`https://image.tmdb.org/t/p/w500${products.poster_path}`}/>
                    )
                )
            }

            <Pagination count={pagecount} page={page} onChange={handleChange} color="primary"/>

        </>
    )

};

export default GenreFilm;
