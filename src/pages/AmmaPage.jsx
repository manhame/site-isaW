import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Briefcase, Smile, Users, HeartHandshake, AlertTriangle, CheckCircle, ThumbsUp, Building } from "lucide-react";

const AmmaPage = () => {
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

  const bienfaitsEntreprise = [
    "Reprendre ses activités avec plus de concentration et de créativité",
    "Favoriser l’épanouissement collectif et individuel des collaborateurs",
    "Atténuer la fatigue corporelle ou oculaire",
    "Chasser le stress et la nervosité",
    "Dénouer les tensions",
    "Relaxer les muscles souffrant de douleurs dues aux mauvaises postures",
    "Soulager les troubles circulatoires et les maux de tête"
  ];

  const bienfaitsGeneraux = [
    "Tonifier le corps et stimuler l'esprit",
    "Stimuler les méridiens d’acupunctures",
    "Activer la circulation du flux d’énergie du corps",
    "Profiter d’une sensation de relaxation générale et d’une complète détente physique et mentale",
    "Éliminer le stress, la fatigue, les tensions, les douleurs musculaires",
    "Apporter au sujet un total bien-être."
  ];

  const contreIndications = [
    "Trouble cardiaque",
    "Hémophilie, phlébite, forte fièvre",
    "Epilepsie",
    "Femme enceinte",
    "Opération récente"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          AMMA Assis
        </h1>

        <motion.section {...sectionAnimation} className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative md:order-2">
              <img 
                alt="Personne recevant un massage AMMA assis sur une chaise ergonomique"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                src="/images/isabelle-wencker-amma-assis-1.jpg"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 p-4 rounded-full shadow-lg">
                <ThumbsUp size={32} className="text-white" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl md:order-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 gradient-text flex items-center">
                <Zap size={28} className="mr-3 text-amber-500" />
                Qu’est-ce que le Amma Assis ?
              </h2>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                Le Amma Assis est une technique de massage du corps inventée par les Chinois il y a 1 300 ans, puis adoptée et améliorée par les Japonais pour donner naissance au Shiatsu. Basé sur le principe du soulagement par le toucher, il cible des points spécifiques le long des méridiens.
              </p>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                Cette approche énergétique consiste en un enchaînement précis de pressions, percussions, étirements et balayages pour soulager les tensions du dos, de la nuque, de la tête, des épaules, des bras et des mains, stimulant ainsi la circulation énergétique.
              </p>
              <p className="text-gray-700 text-justify leading-relaxed">
                L’Amma Assis s’adresse à tous, particulièrement recommandé en entreprise, mais aussi à domicile pour se détendre après une journée chargée.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-16 bg-amber-50/70 p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-center gradient-text flex items-center justify-center">
            <Users size={30} className="mr-3 text-amber-500" />
            La Pratique du Massage Amma Assis
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le massage s’exerce directement à travers les vêtements et n’emploie pas d’huile. Il se pratique sur une chaise ergonomique transportable spécialement conçue.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Très performant, il s’adresse à tous. Rapide, pratique et efficace, le AMMA assis procure à la fois une profonde détente corporelle et une dynamisation de la personne en un minimum de temps. Ce massage sous forme d’acupressions dénoue les tensions, amène une détente, puis stimule et redynamise.
            </p>
            <Button asChild className="gradient-bg text-white hover:opacity-90 transition-opacity">
              <Link to="/tarifs-et-contact">Découvrir les tarifs</Link>
            </Button>
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-center gradient-text flex items-center justify-center">
            <HeartHandshake size={30} className="mr-3 text-orange-500" />
            Quels sont les bienfaits du Amma Assis ?
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            L’Amma Assis élimine les blocages d’énergie et les tensions musculaires pour une relaxation complète. Il aboutit à une profonde détente musculaire et mentale.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
                <Smile size={24} className="mr-2" /> Bienfaits Généraux
              </h3>
              <ul className="space-y-2">
                {bienfaitsGeneraux.map((item, index) => (
                  <motion.li {...listItemAnimation(index * 0.1)} key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-sky-500">
              <h3 className="text-xl font-semibold mb-4 text-sky-600 flex items-center">
                <Building size={24} className="mr-2" /> Spécifique Entreprise
              </h3>
              <ul className="space-y-2">
                {bienfaitsEntreprise.map((item, index) => (
                  <motion.li {...listItemAnimation(index * 0.1)} key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-12 bg-red-50 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-center text-red-700 flex items-center justify-center">
                <AlertTriangle size={30} className="mr-3" />
                Contre-indications au Amma Assis
            </h2>
            <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
                Le massage Amma Assis ne présente, en général, aucune restriction pour une personne en bonne santé. Sa pratique est toutefois déconseillée pour les personnes souffrant de :
            </p>
            <div className="max-w-md mx-auto">
                <ul className="space-y-2">
                    {contreIndications.map((item, index) => (
                    <motion.li {...listItemAnimation(index * 0.1)} key={index} className="flex items-center bg-white p-3 rounded-md shadow">
                        <AlertTriangle size={18} className="text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                    </motion.li>
                    ))}
                </ul>
            </div>
        </motion.section>
        
        <motion.div 
            {...sectionAnimation} 
            className="text-center mt-16"
        >
            <img 
                alt="Une séance de AMMA assis en entreprise"
                className="rounded-xl shadow-lg w-full h-auto object-cover max-h-96 mx-auto"
                src="/images/isabelle-wencker-amma-assis-2.jpg" 
            />
            <p className="text-sm text-gray-500 mt-3 italic">
                L'Amma Assis : une pause bien-être revitalisante pour vous ou vos équipes.
            </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default AmmaPage;