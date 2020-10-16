<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="hello_world")
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/{name}", name="hello_world_named")
     * @param $name
     */
    public function named_hello($name)
    {
        return $this->render("default/named.html.twig", [
           'name' => $name
        ]);
    }
}
