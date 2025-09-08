import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ReboutologiePage = () => {
  const benefits = [
    "Douleur au bas du dos avec répercussions jusque dans les jambes",
    "Sciatique, lombalgie",
    "Douleurs dans la nuque, cervicales",
    "Tensions aux épaules, entre les omoplates, à la poitrine",
    "Ceinture douloureuse au milieu du dos allant jusqu’au thorax",
    "Hanches douloureuses",
    "Faiblesse au niveau des genoux",
    "Maux de tête répétitifs ou migraines",
    "Fourmillements dans les mains ou les pieds, tunnel carpien",
    "Difficulté à lever le bras",
    "Tensions aux adducteurs"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text pb-2">
          Reboutologie®
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Qu’est-ce que la Reboutologie ?</h2>
            <p className="text-gray-700 mb-4 text-justify">
              La méthode est tirée du reboutement, mais améliorée et modernisée par Michèle Fioletti, 3ème génération de rebouteux en Suisse, fondatrice de la Reboutologie®.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
              Elle a pour but de réharmoniser les structures du corps par des techniques manuelles précises et en profondeur afin de permettre une réduction du point douloureux et une meilleure oxygénation des tissus environnants.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
              Un véritable soin alternatif qui complète et enrichit la médecine classique en répondant à la plupart des maux de notre temps. Pratiquée sur une table de massage, elle permet notamment de réduire les maux et douleurs courants en lien au stress, à l’anxiété ou à la dépression chez une personne.
            </p>
             <p className="text-gray-700 mb-4 text-justify">
              La Reboutologie® traite les bords de muscles souvent mal irrigués, en stimulant la circulation sanguine dans les ligaments, tendons, nerfs et muscles, elle améliore la souplesse et la mobilité des articulations. Son objectif se traduit concrètement par une oxygénation ou une libération des stases (amas de nerfs, calcifications, de cristaux, de toxines collées et durcies ...).
            </p>
          </div>
           <div className="md:sticky md:top-24 space-y-6">
            <img 
              alt="Technique de Reboutologie sur le dos"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
             src="/images/isabelle-wencker-reboutologie-accueil-1.jpg" />
            <img 
              alt="Technique de Reboutologie sur les épaules"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
             src="/images/isabelle-wencker-reboutologie-2.jpg" />
            <div className="mt-6 bg-amber-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-amber-700">Un massage en profondeur pour :</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Oxygéner</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Réactiver</li>
              </ul>
               <p className="mt-4 text-sm text-gray-600">
                Sans manipulation, sans à-coups, sans brusquerie, sans hématome.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 gradient-text">Pour qui une séance en Reboutologie et comment ?</h2>
          <p className="text-gray-700 mb-4 text-justify">
            Cette technique s’adresse à toutes les personnes – adulte, enfant de plus de 1 an, femme enceinte ou sportif –, qui éprouvent des contractures ou des formes de restrictions musculaires, ligamentaires ou tendineuses.
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            Lors d’une séance de Reboutologie, le patient est invité à se mettre en sous-vêtements sur la table de massage, muni d’une serviette afin de préserver son intimité.
            L’étape se poursuit par une anamnèse afin de recueillir les informations relatives aux douleurs (genèse, manifestation, localisation…), ce qui permet de définir clairement l’axe sur lequel le soin sera dirigé.
          </p>
          <p className="text-gray-700 text-justify">
            La séance de massage en Reboutologie dure de 35 à 45 minutes, selon les objectifs de réduction des douleurs et la remise en état des muscles.
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-xl shadow-xl text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">Pourquoi consulter un reboutologue ?</h2>
          <p className="text-amber-100 mb-6 text-center max-w-2xl mx-auto">
            Grâce à mon expérience et le développement de mon sens du toucher, la Reboutologie® peut vous aider en cas de :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start p-3 bg-white/10 rounded-lg"
              >
                <CheckCircle className="h-6 w-6 text-amber-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReboutologiePage;