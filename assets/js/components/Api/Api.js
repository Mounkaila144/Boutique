import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function Api() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [film, setFilm] = useState([]);

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?page=1&api_key=7220ce44fed075da0c331991d5c64c0d&language=fr-FR")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setFilm(result["results"]);
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    film.map(item => (
        console.log(item.title)
    ))

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <ul>
                {film.map(item => (
                    <li>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    }
}
