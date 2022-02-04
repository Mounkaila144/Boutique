<?php

namespace App\Controller;

use App\Form\SearchVideoType;
use App\Service\BetaseriesServices;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'dafault')]
    public function index(BetaseriesServices $callApiService,Request $request,
                          PaginatorInterface $paginator): Response
    {
        $film=$callApiService->getFilm();
        $debut="https://image.tmdb.org/t/p/w500";
        $fin="&key=ec75c3fe5493";
        $data=$paginator->paginate(
            $film,
            $request->query->getInt('page',1),
            19
        );

        $form=$this->createForm(SearchVideoType::class)->createView();

        return $this->render('main/index.html.twig', [
            'data' => $data,
            'debut'=>$debut,
            'fin'=>$fin,
            'form' => $form,
        ]);

    }
}
