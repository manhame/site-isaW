import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const services = [
    { 
      title: "Reboutologie", 
      description: "Réharmonisation des structures du corps pour soulager douleurs et tensions.", 
      link: "/reboutologie", 
      imgSrc: `${import.meta.env.BASE_URL}images/isabelle-wencker-reboutologie-accueil-1.jpg`, 
      alt: "Technique de Reboutologie appliquée sur le dos" 
    },
    { 
      title: "AMMA Assis", 
      description: "Massage sur chaise ergonomique, idéal en entreprise pour une détente rapide.", 
      link: "/amma-assis", 
     imgSrc: `${import.meta.env.BASE_URL}images/isabelle-wencker-amma-assis-accueil.webp`, 
      alt: "Séance de massage AMMA assis" 
    },
    { 
      title: "Massage Bien-Être", 
      description: "Relaxation profonde du corps et de l'esprit pour évacuer le stress.", 
      link: "/massage-bien-etre", 
      imgSrc: `${import.meta.env.BASE_URL}images/isabelle-wencker-bien-etre-accueil.webp`, 
      alt: "Massage bien-être sur la jambe" 
    },
    { 
      title: "Reiki", 
      description: "Soin énergétique japonais par imposition des mains pour harmoniser le corps et l'esprit.", 
      link: "/reiki", 
      imgSrc: `${import.meta.env.BASE_URL}images/isabelle-wencker-reiki-accueil.jpg`, 
      alt: "Praticienne de Reiki effectuant un soin sur les pieds" 
    },
    { 
      title: "Technique EMMETT", 
      description: "Méthode de soin corporel douce pour soulager douleurs et améliorer la mobilité.", 
      link: "/technique-emmett", 
      imgSrc: `${import.meta.env.BASE_URL}images/isabelle-wencker-emmett-accueil.jpg`, 
      alt: "Praticien appliquant la technique EMMETT" 
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Bienvenue Au Cœur Des Mains
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Au cœur des mains vous propose ses services de qualité en matière de REBOUTOLOGIE, AMMA assis, MASSAGE BIEN-ÊTRE, REIKI et de technique EMMETT.
        </p>
        <p className="text-gray-600 text-md md:text-lg mb-8 max-w-2xl mx-auto">
          J’interviens à domicile, autour des communes de Phalsbourg, Saverne et Sarrebourg.
        </p>
        <div className="mb-12">
          <Button asChild size="lg" className="gradient-bg text-white px-8 py-6 text-lg hover:opacity-90">
            <Link to="/tarifs-et-contact">Découvrir mes services et tarifs</Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16"
      >
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center gradient-text">
            Mon Expertise à Votre Service
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                alt="Portrait de la praticienne"
                className="rounded-lg shadow-md w-full h-auto object-cover max-h-96"
               src={`${import.meta.env.BASE_URL}images/isabelle-wencker.jpg`} />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4 text-justify">
                Je suis diplômée de l’Académie des Médecines Naturelles Europe pour la reboutologie, certifiée en Amma assis par Xavier Court, formée au massage intuitif, initiée au Reiki et praticienne de la technique Emmett. Mon parcours est le fruit d'une passion pour le bien-être et d'une volonté constante de perfectionner mes techniques pour vous offrir le meilleur.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Chaque personne est unique, c'est pourquoi j'adapte mes soins à vos besoins spécifiques. Mon objectif est de vous aider à retrouver un équilibre corporel et mental, à soulager vos tensions et à améliorer votre qualité de vie.
              </p>
              <div className="mt-6 text-center md:text-left">
                <Button asChild variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                  <Link to="/tarifs-et-contact">Me Contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center gradient-text">
            Explorez Mes Soins
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover gradient-border flex flex-col"
            >
              <img  alt={service.alt} className="w-full h-48 object-cover rounded-md mb-4" src={service.imgSrc} />
              <h3 className="text-xl font-bold mb-2 gradient-text">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow text-sm">{service.description}</p>
              <Button asChild variant="link" className="text-amber-600 hover:text-orange-600 p-0 self-start font-medium">
                <Link to={service.link}>En savoir plus &rarr;</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;