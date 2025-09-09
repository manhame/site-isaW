import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Users, HeartHandshake, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

const EmmettPage = () => {
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
          Technique EMMETT
        </h1>

        <motion.section {...sectionAnimation} className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <img 
                alt="Praticien appliquant délicatement la technique EMMETT sur l'épaule d'une personne"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
               src={`${import.meta.env.BASE_URL}images/isabelle-wencker-emmett-1.jpg`} 
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 p-4 rounded-full shadow-lg">
                <Lightbulb size={32} className="text-white" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 gradient-text flex items-center">
                <Zap size={28} className="mr-3 text-amber-500" />
                En quoi consiste la technique EMMETT ?
              </h2>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                Il s’agit d’une technique douce de relâchement musculaire libérant tensions et douleurs pour une mobilité améliorée.
              </p>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                Développée par Ross Emmett, un thérapeute australien spécialisé en relâchement musculaire, elle repose sur une approche unique de la thérapie corporelle. Elle a vu le jour dans les années 1980 et combine des principes issus de diverses disciplines, telles que la kinésiologie, l’ostéopathie et la thérapie neuromusculaire.
              </p>
              <p className="text-gray-700 text-justify leading-relaxed">
                Le principe central de cette méthode est la stimulation douce de points spécifiques situés sur les muscles et les fascias, appelés Emmett Points. Ces stimulations agissent comme des "interrupteurs" permettant de rétablir un équilibre musculaire, améliorer la posture et réduire les tensions.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-16 bg-amber-50/70 p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-center gradient-text flex items-center justify-center">
            <Users size={30} className="mr-3 text-amber-500" />
            À qui s'adresse-t-elle et comment ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La méthode EMMETT est adaptée à un large public, des nourrissons aux personnes âgées, en passant par les sportifs ou ceux souffrant de pathologies chroniques. Elle est particulièrement recommandée pour :
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Les personnes ayant des douleurs musculaires ou articulaires.",
                  "Les individus souffrant de troubles posturaux.",
                  "Les patients en recherche de gestion du stress ou de récupération après un effort physique."
                ].map((item, index) => (
                  <motion.li {...listItemAnimation(index * 0.1)} key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le traitement se pratique sur une table de massage ou en position assise, en fonction des besoins et de la mobilité du client. 
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Une séance dure généralement entre <strong className="text-amber-600">10 et 40 minutes</strong>. Le praticien utilise des pressions très légères et des mouvements ciblés, permettant d’interagir avec les récepteurs sensoriels du corps.
              </p>
              <div className="mt-6 text-center md:text-left">
                <Button asChild className="gradient-bg text-white hover:opacity-90 transition-opacity">
                  <Link to="/tarifs-et-contact">Planifier une séance</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-center gradient-text flex items-center justify-center">
            <HeartHandshake size={30} className="mr-3 text-orange-500" />
            Bienfaits et Contre-indications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Les Bienfaits</h3>
              <ul className="space-y-2">
                {[
                  "Soulagement des tensions musculaires et des douleurs chroniques.",
                  "Amélioration de la mobilité articulaire et de la posture.",
                  "Réduction du stress et promotion de la détente globale.",
                  "Récupération musculaire accélérée pour les sportifs.",
                  "Soutien dans la gestion des troubles liés à l'anxiété ou aux traumatismes."
                ].map((item, index) => (
                  <motion.li {...listItemAnimation(index * 0.1)} key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Contre-indications</h3>
              <p className="text-gray-700 text-sm mb-2">La méthode est déconseillée en cas de :</p>
              <ul className="space-y-2">
                {[
                  "Pathologies graves non stabilisées (infections, inflammations aigües).",
                  "Grossesse à risque ou complications spécifiques.",
                  "Fractures ou blessures non cicatrisées."
                ].map((item, index) => (
                  <motion.li {...listItemAnimation(index * 0.1)} key={index} className="flex items-start">
                    <AlertTriangle size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600 italic leading-relaxed max-w-3xl mx-auto">
            Cette approche non invasive et respectueuse du rythme du corps offre une alternative ou un complément aux thérapies plus conventionnelles, en valorisant une prise en charge personnalisée et holistique.
          </p>
        </motion.section>
        
        <motion.div 
            {...sectionAnimation} 
            className="text-center mt-16"
        >
            <img 
                alt="Praticien appliquant la technique EMMETT sur le torse d'une personne"
                className="rounded-xl shadow-lg w-full h-auto object-cover max-h-96 mx-auto"
             src={`${import.meta.env.BASE_URL}images/isabelle-wencker-emmett-2.jpg`} />
            <p className="text-sm text-gray-500 mt-3 italic">
                Retrouvez confort et aisance grâce à la douceur et l'efficacité de la Technique EMMETT.
            </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default EmmettPage;