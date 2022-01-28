<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('admin/client',name:'admin_')]
class ClientController extends AbstractController
{
    #[Route('/', name: 'client_index', methods: ['GET'])]
    public function index(UserRepository $clientRepository): Response
    {
        return $this->render('admin/client/index.html.twig', [
            'clients' => $clientRepository->findAll(),
        ]);
    }
   #[Route('/localisation', name: 'client_localisation', methods: ['GET'])]
    public function localisation(UserRepository $clientRepository): Response
    {
        return $this->render('admin/client/localisation.html.twig', [
            'clients' => $clientRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'client_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $client = new User();
        $form = $this->createForm(UserType::class, $client);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($client);
            $entityManager->flush();

            return $this->redirectToRoute('admin_client_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/client/new.html.twig', [
            'client' => $client,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'client_show', methods: ['GET'])]
    public function show(User $client): Response
    {
        return $this->render('admin/client/show.html.twig', [
            'client' => $client,
        ]);
    }

    #[Route('/{id}/edit', name: 'client_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $client, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(UserType::class, $client);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('admin_client_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/client/edit.html.twig', [
            'client' => $client,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'client_delete', methods: ['POST'])]
    public function delete(Request $request, User $client, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$client->getId(), $request->request->get('_token'))) {
            $entityManager->remove($client);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_client_index', [], Response::HTTP_SEE_OTHER);
    }
}
