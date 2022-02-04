<?php


namespace App\Service;


use Symfony\Contracts\HttpClient\HttpClientInterface;

class BetaseriesServices
{
    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function getFilm(): array
    {
        $response = $this->client->request(
            'GET',
            "https://api.themoviedb.org/4/list/5?page=1&api_key=7220ce44fed075da0c331991d5c64c0d&language=fr-FR"
        );

        return $response->toArray();
    }
    public function getImage(): array
    {
        $response = $this->client->request(
            'GET',
            "https://api.betaseries.com/pictures/movies/id=85248?type=popular&key=ec75c3fe5493&language=fr-FR"
        );

        return $response->toArray();
    }

}
