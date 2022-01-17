<?php

namespace App\Controller;

use App\Entity\Video;
use App\Form\SerieType;
use App\Repository\VideoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('admin/serie',name:'admin_')]
class SerieController extends AbstractController
{
    #[Route('/', name: 'serie_index', methods: ['GET'])]
    public function index(VideoRepository $serieRepository): Response
    {
        return $this->render('serie/index.html.twig', [
            'series' => $serieRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'serie_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $serie = new Video();
        $form = $this->createForm(SerieType::class, $serie);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($serie);
            $entityManager->flush();

            return $this->redirectToRoute('serie_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('serie/new.html.twig', [
            'serie' => $serie,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'serie_show', methods: ['GET'])]
    public function show(Video $serie): Response
    {
        return $this->render('serie/show.html.twig', [
            'serie' => $serie,
        ]);
    }

    #[Route('/{id}/edit', name: 'serie_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Video $serie, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(SerieType::class, $serie);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('serie_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('serie/edit.html.twig', [
            'serie' => $serie,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'serie_delete', methods: ['POST'])]
    public function delete(Request $request, Video $serie, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$serie->getId(), $request->request->get('_token'))) {
            $entityManager->remove($serie);
            $entityManager->flush();
        }

        return $this->redirectToRoute('serie_index', [], Response::HTTP_SEE_OTHER);
    }
}
