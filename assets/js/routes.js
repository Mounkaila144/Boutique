import React from 'react';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import App from "./Page/App";
import Film from "./Page/Video/Film/Film";
import GenreFilm from "./Page/Video/Film/GenreFilm";
import Serie from "./Page/Video/Serie/Serie";
import GenreFilmIndex from "./Page/Video/Film/GenreIndex";
import GenreSerieIndex from "./Page/Video/Serie/GenreIndex";
import Detail from "./Page/Video/Detail";
import Recherche from "./Page/Video/Recherche";


const RouteApp = () => {
    const k = [
        {"id": 28,       "name": "Action"},
        {"id": 12,       "name": "Adventure"},
        {"id": 16,       "name": "Animation"},
        {"id": 35,       "name": "Comedy"},
        {"id": 80,       "name": "Crime"},
        {"id": 99,       "name": "Documentary"},
        {"id": 18,       "name": "Drama"},
        {"id": 10751,    "name": "Family"},
        {"id": 14,       "name": "Fantasy"},
        {"id": 36,       "name": "History"},
        {"id": 27,       "name": "Horror"},
        {"id": 10402,    "name": "Music"},
        {"id": 9648,     "name": "Mystery"},
        {"id": 10749,    "name": "Romance"},
        {"id": 878,      "name": "Science Fiction"},
        {"id": 10770,    "name": "TV Movie"},
        {"id": 53,       "name": "Thriller"},
        {"id": 10752,    "name": "War"},
        {"id": 37, "name": "Western"}
    ]
    const k2=[
        {"id": 10759, "name": "Action & Adventure"},
        {"id": 16, "name": "Animation"},
        {"id": 35, "name": "Comedy"},
        {"id": 80, "name": "Crime"},
        {"id": 99, "name": "Documentary"},
        {"id": 18, "name": "Drama"},
        {"id": 10751, "name": "Family"},
        {"id": 10762, "name": "Kids"},
        {"id": 9648, "name": "Mystery"},
        {"id": 10763, "name": "News"},
        {"id": 10764, "name": "Reality"},
        {"id": 10765, "name": "Sci-Fi & Fantasy"},
        {"id": 10766, "name": "Soap"},
        {"id": 10767, "name": "Talk"},
        {"id": 10768, "name": "War & Politics"},
        {"id": 37, "name": "Western"}]
    let params = useParams();
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="react/" element={<App/>}>

                        <Route path="film">
                            <Route path={"recherche"} element={<Recherche types={"movie"}/>}/>
                            <Route path={":id"} element={<Detail types={"movie"}/>}/>
                            <Route path={"popular"}  element={<Film types={"popular"} type={"movie"}/>}/>
                            <Route path={"popular"}  element={<Film types={"popular"} type={"movie"}/>}/>
                            <Route path={"top"} element={<Film types={"top_rated"} type={"movie"}/>}/>
                            <Route path={"new"} element={<Film types={"upcoming"} type={"movie"}/>}/>
                            <Route path={"genrelist"} element={<GenreFilmIndex/>} type={"movie"}/>
                            <Route path={"genre"} > {
                                k.map((genres) => (
                                    <Route key={genres.id} path={genres.name.toLowerCase().replace(" ","")}  element={<GenreFilm genre={genres.id}/>}/>
                                    )
                                )
                            }</Route>
                        </Route>
                        <Route path="serie">
                            <Route path={"recherche"} element={<Recherche types={"tv"}/>}/>
                            <Route path={":id"} element={<Detail types={"tv"}/>}/>
                            <Route path={"popular"} element={<Film types={"popular"} type={"tv"}/>}/>
                            <Route path={"top"} element={<Film types={"top_rated"} type={"tv"}/>}/>
                            <Route path={"new"} element={<Film types={"on_the_air"} type={"tv"}/>}/>
                            <Route path={"genrelist"} element={<GenreFilmIndex/>} type={"tv"}/>
                            <Route path={"genre"} > {
                                k2.map((genres) => (
                                        <Route key={genres.id} path={genres.name.toLowerCase().replace(" ","")}  element={<GenreFilm genre={genres.id}/>}/>
                                    )
                                )
                            }</Route>
                        </Route>

                        <Route
                            path="react/*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <h1>There's nothing here!</h1>
                                </main>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
    );
};

export default RouteApp;
