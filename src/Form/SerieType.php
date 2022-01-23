<?php

namespace App\Form;

use App\Entity\Video;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SerieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom',TextType::class, [
        'label_attr' => [
            'class' => 'checkbox-inline',
        ],
    ])
            ->add('genre', HiddenType::class,[
                'data'=>'serie',
            ])
            ->add('type',null, [
                'attr' => [
                    'class' => 'select',
                    'multiple'=>'multiple'
                ],
            ])
            ->add('saison')
            ->add('episode')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Video::class,
        ]);
    }
}
