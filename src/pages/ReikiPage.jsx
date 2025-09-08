import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Users, HeartHandshake, Sparkles, Sun, FolderHeart as HandHeart, CheckCircle, ThumbsUp, BookOpen } from 'lucide-react';

const ReikiPage = () => {
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const listItemAnimation = (delay = 0) => ({
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay }
  });

  const cinqPrincipes = [
    "Juste pour aujourd’hui, ne te fais pas de souci",
    "Juste pour aujourd’hui, ne te mets pas en colère",
    "Honore tes Parents, tes Maîtres, tes Aînés",
    "Gagne ta Vie honnêtement",
    "Montre de la Gratitude pour Tout ce qui vit"
  ];

  const bienfaits = [
    "Détendre les muscles",
    "Réduire l’angoisse, la fatigue, le stress et la dépression",
    "Augmenter le sentiment de bien-être",
    "S’emplir de joie, de gratitude et de paix",
    "Lutter contre l’insomnie",
    "Créer un environnement propice à la guérison",
    "Renforcer son système immunitaire",
    "Retrouver de l’énergie et du tonus",
    "Apaiser des douleurs chroniques"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Reiki : Énergie et Harmonie
        </h1>

        <motion.section {...sectionAnimation} className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative md:order-2">
              <img 
                alt="Praticienne de Reiki massant les pieds d'un client"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                src="/images/isabelle-wencker-reiki-1.jpg" 
              />
               <div className="absolute -bottom-4 -right-4 bg-amber-500 p-4 rounded-full shadow-lg">
                <Sparkles size={32} className="text-white" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl md:order-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 gradient-text flex items-center">
                <Sun size={28} className="mr-3 text-amber-500" />
                Qu’est-ce que le Reiki ?
              </h2>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                Par définition, le Reiki signifie « énergie de l’esprit » ou « force de l’esprit ». Il s’agit d’une technique de soin énergétique basée sur l’union de la méditation et de la relaxation par le biais d’un toucher relaxant appliqué sur certaines zones du corps.
              </p>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                Cette thérapie favorise la circulation des potentiels d’autoguérison, permettant à la personne d'agir pour son bien-être durable. "Rei" (universel) et "Ki" (énergie vitale) définissent le Reiki comme la mise en relation de notre énergie vitale à l’énergie universelle pour promouvoir la guérison.
              </p>
              <p className="text-gray-700 text-justify leading-relaxed">
                Le Reiki aide à gérer les énergies internes, agissant sur le physique et l’esprit. En maîtrisant son circuit énergétique, on libère les blocages (douleurs, stress, anxiété, etc.).
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-16 bg-amber-50/70 p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-center gradient-text flex items-center justify-center">
            <BookOpen size={30} className="mr-3 text-amber-500" />
            Les Cinq Principes du Reiki
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cinqPrincipes.map((principe, index) => (
              <motion.div 
                {...listItemAnimation(index * 0.1)} 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start"
              >
                <HandHeart size={24} className="text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">{principe}</p>
              </motion.div>
            ))}
          </div>
           <p className="text-center text-sm text-gray-600 mt-8 italic">Ces principes guident vers une vie plus sereine et équilibrée.</p>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-16">
             <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="bg-white p-8 rounded-xl shadow-xl">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-6 gradient-text flex items-center">
                        <Zap size={28} className="mr-3 text-orange-500" />
                        Reiki : Force Universelle de Vie
                    </h2>
                    <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                        Il se définit comme la Force Universelle de Vie qui entoure et constitue notre être. Le Reiki a pour attribut d’harmoniser les aspects physique, émotionnel, mental et spirituel de l’Homme. Il consiste en une technique naturelle via l’imposition des mains sur un individu totalement vêtu. Son but est d’apporter au patient un sentiment de sérénité, de joie et de paix intérieure à travers une réduction de l’angoisse, un soulagement de la douleur, une détente des muscles.
                    </p>
                    <div className="mt-8 text-center md:text-left">
                        <Button asChild className="gradient-bg text-white hover:opacity-90 transition-opacity">
                        <Link to="/tarifs-et-contact">Réserver une séance</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative">
                     <img 
                        alt="Praticienne de Reiki effectuant un soin sur le dos d'un client"
                        className="rounded-xl shadow-2xl w-full h-auto object-cover"
                        src="/images/isabelle-wencker-reiki-2.jpg" 
                    />
                    <div className="absolute -top-4 -left-4 bg-orange-500 p-4 rounded-full shadow-lg">
                        <ThumbsUp size={32} className="text-white" />
                    </div>
                </div>
            </div>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-12 bg-green-50/70 p-8 md:p-12 rounded-xl shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-center gradient-text flex items-center justify-center">
                <Users size={30} className="mr-3 text-green-500" />
                Pour Qui et Quels Bienfaits ?
            </h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Le Reiki est une pratique énergétique visant à équilibrer tous les aspects de l’être humain : physique, émotionnel, mental et spirituel. Il convient à toute personne de tout âge, sans distinction d’ordre culturel ou religieux.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bienfaits.map((item, index) => (
                <motion.div {...listItemAnimation(index * 0.05)} key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                </motion.div>
                ))}
            </div>
        </motion.section>
        
      </motion.div>
    </div>
  );
};

export default ReikiPage;