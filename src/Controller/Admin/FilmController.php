<?php

namespace App\Controller\Admin;

use App\Entity\Video;
use App\Form\FilmType;
use App\Repository\VideoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('admin/film',name:'admin_')]
class FilmController extends AbstractController
{
    #[Route('/', name: 'film_index', methods: ['GET'])]
    public function index(VideoRepository $filmRepository): Response
    {
        return $this->render('admin/film/index.html.twig', [
            'films' => $filmRepository->findBy(['genre'=>'film']),
        ]);
    }

    #[Route('/new', name: 'film_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $film = new Video();
        $form = $this->createForm(FilmType::class, $film);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($film);
            $entityManager->flush();

            return $this->redirectToRoute('admin_film_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/film/new.html.twig', [
            'film' => $film,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'film_show', methods: ['GET'])]
    public function show(Video $film): Response
    {
        return $this->render('admin/film/show.html.twig', [
            'film' => $film,
        ]);
    }

    #[Route('/{id}/edit', name: 'film_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Video $film, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(FilmType::class, $film);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('admin_film_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/film/edit.html.twig', [
            'film' => $film,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'film_delete', methods: ['POST'])]
    public function delete(Request $request, Video $film, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$film->getId(), $request->request->get('_token'))) {
            $entityManager->remove($film);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_film_index', [], Response::HTTP_SEE_OTHER);
    }
}
