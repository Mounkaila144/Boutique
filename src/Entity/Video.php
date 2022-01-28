<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\VideoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VideoRepository::class)]
#[ApiResource]
class Video
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 50)]
    private $nom;

    #[ORM\Column(type: 'string', length: 10)]
    private $genre;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $saison;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $episode;

    #[ORM\ManyToMany(targetEntity: Type::class, inversedBy: 'videos')]
    private $type;

    public function __construct()
    {
        $this->type = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(string $genre): self
    {
        $this->genre = $genre;

        return $this;
    }
    

    public function getSaison(): ?int
    {
        return $this->saison;
    }

    public function setSaison(?int $saison): self
    {
        $this->saison = $saison;

        return $this;
    }

    public function getEpisode(): ?int
    {
        return $this->episode;
    }

    public function setEpisode(?int $episode): self
    {
        $this->episode = $episode;

        return $this;
    }

    /**
     * @return Collection|Type[]
     */
    public function getType(): Collection
    {
        return $this->type;
    }

    public function addType(Type $type): self
    {
        if (!$this->type->contains($type)) {
            $this->type[] = $type;
        }

        return $this;
    }

    public function removeType(Type $type): self
    {
        $this->type->removeElement($type);

        return $this;
    }
}
