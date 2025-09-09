import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bath as Spa, Droplets, Wind, Heart, Users, Leaf, AlertCircle, CheckCircle, Zap, Flower2 } from 'lucide-react';

const RelaxationPage = () => {
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

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text pb-2">
          Massage Bien-Être
        </h1>

        <motion.section {...sectionAnimation} className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <img 
                alt="Massage bien-être de la jambe"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                src={`${import.meta.env.BASE_URL}images/isabelle-wencker-bien-etre-1.jpg`} 
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 p-4 rounded-full shadow-lg">
                <Spa size={32} className="text-white" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 gradient-text flex items-center">
                <Leaf size={28} className="mr-3 text-amber-500" />
                Qu’est-ce qu’un massage bien-être ?
              </h2>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                Ce massage est un moyen naturel de relaxation ou de stimulation du corps et de l’esprit : il aide à trouver l’harmonie intérieure. Il permet de redécouvrir le sens essentiel du toucher, souvent oublié mais pourtant si fondamental.
              </p>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                Le massage bien-être, bien que non thérapeutique au sens médical, offre des bienfaits prouvés. Il agit sur les gênes physiques en activant les points énergétiques pour optimiser la circulation sanguine et énergétique, aidant à supprimer les blocages et le stress.
              </p>
              <p className="text-gray-700 text-justify leading-relaxed">
                Sous l’effet des différentes techniques (effleurements, frictions, etc.), l’organisme renforce naturellement sa défense immunitaire, apportant vigueur et tonus.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-16 bg-amber-50/70 p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-center gradient-text flex items-center justify-center">
            <Users size={30} className="mr-3 text-amber-500" />
            Pour Qui et Comment ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le massage bien-être s'adresse à toute personne sans distinction d’âge souhaitant se reconnecter à son corps et se détendre. Il est indiqué :
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Pour tous ceux qui souhaitent retrouver le chemin de leur corps, lui faire ce cadeau que d’être choyé.",
                  "Pour ceux qui ressentent le besoin de se détendre et de dénouer des tensions.",
                  "Pour ceux qui sont en pleine forme autant que pour ceux qui ont une fatigue passagère."
                ].map((item, index) => (
                  <motion.li {...listItemAnimation(index * 0.1)} key={index} className="flex items-start">
                    <Heart size={20} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <div className="flex items-center mb-2">
                    <AlertCircle size={20} className="text-red-500 mr-2" />
                    <h4 className="font-semibold text-red-600">Précautions</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Le massage bien-être n’est pas approprié pour les personnes souffrant d’un trouble cardiovasculaire ou en état maladif, de même en présence de lésions ou autres infections cutanées.
                  </p>
              </div>
              <div className="mt-6 text-center md:text-left">
                <Button asChild className="gradient-bg text-white hover:opacity-90 transition-opacity">
                  <Link to="/tarifs-et-contact">Découvrir les bienfaits</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-center gradient-text">
            Techniques de Massage
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...listItemAnimation(0.1)} className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-amber-500">
              <div className="flex items-center mb-4">
                <Flower2 size={28} className="text-amber-600 mr-3" />
                <h3 className="text-xl font-semibold text-amber-700">Massage Relaxant (type Californien)</h3>
              </div>
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                Une série de mouvements fluides et harmonieux : effleurages doux pour la relaxation, et gestes plus stimulants pour apaiser les tensions profondes.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ce massage libère les émotions contenues, améliore la circulation et lutte contre le stress. Une séance dure 1 à 2 heures pour une sensation de paix et d'harmonie.
              </p>
            </motion.div>
            <motion.div {...listItemAnimation(0.2)} className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-orange-500">
              <div className="flex items-center mb-4">
                <Zap size={28} className="text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-orange-700">Massage Tonique (type Suédois)</h3>
              </div>
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                Alliant fermeté et douceur, cette technique utilise effleurements, pétrissages, frictions, pressions fortes et étirements.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Très efficace pour détente et tonicité musculaire, il augmente le flux sanguin. Il redonne énergie au corps et à l'esprit, soulage douleurs musculaires et tensions.
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        <motion.div 
            {...sectionAnimation} 
            className="text-center mt-16"
        >
           <img 
              alt="Personne recevant un massage relaxant des lèvres"
              className="rounded-xl shadow-lg w-full h-auto object-cover max-h-96 mx-auto"
              src={`${import.meta.env.BASE_URL}images/isabelle-wencker-bien-etre-2.jpg`} 
            />
            <p className="text-sm text-gray-500 mt-3 italic">
                Offrez-vous une parenthèse de douceur et de vitalité.
            </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default RelaxationPage;