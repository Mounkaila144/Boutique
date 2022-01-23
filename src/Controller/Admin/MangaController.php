<?php

namespace App\Controller\Admin;

use App\Entity\Video;
use App\Form\MangaType;
use App\Repository\VideoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('admin/manga',name:'admin_')]
class MangaController extends AbstractController
{
    #[Route('/', name: 'manga_index', methods: ['GET'])]
    public function index(VideoRepository $mangaRepository): Response
    {
        return $this->render('admin/manga/index.html.twig', [
            'mangas' => $mangaRepository->findBy(['genre'=>'manga']),
        ]);
    }

    #[Route('/new', name: 'manga_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $manga = new Video();
        $form = $this->createForm(MangaType::class, $manga);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($manga);
            $entityManager->flush();

            return $this->redirectToRoute('admin_manga_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/manga/new.html.twig', [
            'manga' => $manga,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'manga_show', methods: ['GET'])]
    public function show(Video $manga): Response
    {
        return $this->render('admin/manga/show.html.twig', [
            'manga' => $manga,
        ]);
    }

    #[Route('/{id}/edit', name: 'manga_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Video $manga, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(MangaType::class, $manga);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('admin_manga_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/manga/edit.html.twig', [
            'manga' => $manga,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'manga_delete', methods: ['POST'])]
    public function delete(Request $request, Video $manga, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$manga->getId(), $request->request->get('_token'))) {
            $entityManager->remove($manga);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_manga_index', [], Response::HTTP_SEE_OTHER);
    }
}
