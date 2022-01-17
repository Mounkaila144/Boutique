<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
class Article
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $prisAchat;

    #[ORM\Column(type: 'integer')]
    private $prisVente;

    #[ORM\Column(type: 'integer')]
    private $quantiteInitial;

    #[ORM\Column(type: 'integer')]
    private $quantiteRestant;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrisAchat(): ?int
    {
        return $this->prisAchat;
    }

    public function setPrisAchat(int $prisAchat): self
    {
        $this->prisAchat = $prisAchat;

        return $this;
    }

    public function getPrisVente(): ?int
    {
        return $this->prisVente;
    }

    public function setPrisVente(int $prisVente): self
    {
        $this->prisVente = $prisVente;

        return $this;
    }

    public function getQuantiteInitial(): ?int
    {
        return $this->quantiteInitial;
    }

    public function setQuantiteInitial(int $quantiteInitial): self
    {
        $this->quantiteInitial = $quantiteInitial;

        return $this;
    }

    public function getQuantiteRestant(): ?int
    {
        return $this->quantiteRestant;
    }

    public function setQuantiteRestant(int $quantiteRestant): self
    {
        $this->quantiteRestant = $quantiteRestant;

        return $this;
    }
}
