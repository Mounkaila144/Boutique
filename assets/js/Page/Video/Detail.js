import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Pagination} from "@mui/material";
import OnlyCard from "../../components/card/OnlyCard";
import {Link, useParams} from "react-router-dom";
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {grey, indigo, pink, red} from "@mui/material/colors";
import Moment from 'moment'


const Detail = ({types}) => {
    let params = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    const [pagecount, setpagecount] = useState([]);
    const [genre,setGenre]=useState([])
    const url = `https://api.themoviedb.org/3/${types}/${params.id}?api_key=7220ce44fed075da0c331991d5c64c0d&language=fr-FR`
    const getData = async () => {
        axios
            .get(url)
            .then((res) => {
                setIsLoaded(true);
                setProduct(res.data);
                setGenre(res.data["genres"]);
                setpagecount(50)

            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }

    useEffect(() => {
        getData()
    }, [])
    const handleChange = (event, value) => {
        setPage(value);
    }
   const a=(date)=>{
      return  Moment(date).format('DD-MM-YYYY')
   }
    if (error) {
        return <h1>eror</h1>
    } else if (!isLoaded) {
        return <h1>chargement...</h1>
    } else {
        return (<>
                <Card sx={{display: 'flex', backgroundColor: pink[900],}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        {types === "movie" ? <CardContent sx={{flex: '1 0 auto'}}>
                                <Typography sx={{color: pink[400]}} component="div" variant="h3">
                                    {product.title}
                                </Typography>
                                <Typography color={"white"} variant="subtitle1" component="div">
                                    {product.overview}
                                </Typography>
                                <Typography sx={{marginTop: 5, color: grey[100]}} variant="subtitle1" component="div">
                                    Date de sorti :{product.release_date}
                                </Typography>
                            </CardContent> :

                            <CardContent sx={{flex: '1 0 auto'}}>
                                <Typography sx={{color: pink[400]}} component="div" variant="h3">
                                    {product.name}
                                </Typography>
                                <Typography color={"white"} variant="subtitle1" component="div">
                                    {product.overview}
                                </Typography>
                                <Typography sx={{marginTop: 5, color: grey[100]}} variant="subtitle1" component="div">
                                    Date : du {a(product.first_air_date)} au {a(product.last_air_date)}
                                </Typography>
                                <Typography sx={{marginTop: 5, color: grey[100]}} variant="subtitle1" component="div">
                                    Genre : {genre.map((genres)=>(
                                    `${genres.name} `
                                ))}
                                </Typography>

                            </CardContent>}
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{width: 300}}
                        image={`https://iage.tmdb.org/t/p/w500${product.poster_path}`}
                        alt={product.title }
                    />
                </Card>
            </>)
    }
};

export default Detail;
