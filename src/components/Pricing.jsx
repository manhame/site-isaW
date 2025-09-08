import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Info } from "lucide-react";

const PricingSection = () => {
  const pricingOptions = [
    {
      name: "Séance de Reboutologie",
      price: "60€",
      duration: "35-45 min",
      description: "Soulagement des douleurs et tensions musculaires, réharmonisation corporelle.",
      features: ["Anamnèse personnalisée", "Techniques manuelles précises", "Oxygénation des tissus", "Adapté adultes et enfants (+1 an)"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-500"
    },
    {
      name: "Massage de Relaxation",
      price: "70€",
      duration: "60 min",
      description: "Détente profonde, réduction du stress et amélioration du sommeil.",
      features: ["Approche intuitive", "Mouvements fluides et doux", "Libération des tensions nerveuses", "Huiles essentielles bio (option)"],
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-500"
    },
    {
      name: "AMMA Assis (en entreprise)",
      price: "Sur Devis",
      duration: "15-20 min / personne",
      description: "Solution bien-être rapide et efficace pour vos équipes, directement sur site.",
      features: ["Massage sur chaise ergonomique", "Se pratique habillé", "Boost d'énergie et concentration", "Prévention des TMS"],
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-500"
    }
  ];

  return (
    <section id="pricing-section" className="py-20 bg-gradient-to-b from-amber-100 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investissez dans <span className="gradient-text">Votre Bien-être</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Découvrez mes tarifs pour des soins personnalisés. Pour les autres prestations (Reiki, Technique EMMETT) et les devis AMMA assis, n'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl shadow-xl overflow-hidden flex flex-col ${option.bgColor}`}
            >
              <div className={`p-8 border-b-4 ${option.borderColor}`}>
                <h3 className={`text-2xl font-semibold mb-2 ${option.textColor}`}>{option.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="mb-5">
                  <span className={`text-4xl font-bold ${option.textColor}`}>{option.price}</span>
                  <span className="text-gray-500 text-sm ml-1">/ {option.duration}</span>
                </div>
                <Button asChild className="w-full gradient-bg text-white hover:opacity-90 py-2.5">
                  <Link to="/tarifs-et-contact">Prendre Rendez-vous</Link>
                </Button>
              </div>
              <div className="p-8 flex-grow">
                <p className={`font-medium mb-3 ${option.textColor}`}>Ce qui est inclus :</p>
                <ul className="space-y-2.5 text-sm">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 ${option.textColor} mr-2 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }} 
            className="mt-16 p-6 bg-white rounded-lg shadow-lg border-l-4 border-amber-500 flex items-start"
        >
            <Info className="h-8 w-8 text-amber-500 mr-4 flex-shrink-0" />
            <div>
                <h4 className="text-lg font-semibold text-amber-700">Informations importantes :</h4>
                <p className="text-gray-600 text-sm mt-1">
                    Tous les soins sont prodigués à domicile dans un rayon de 30km autour de Phalsbourg (frais inclus).
                    Pour les séances de Reiki et Technique EMMETT, ainsi que pour des besoins spécifiques, merci de me contacter directement pour un tarif personnalisé.
                </p>
                 <Button asChild variant="link" className="text-amber-600 hover:text-orange-600 p-0 mt-2 text-sm">
                    <Link to="/tarifs-et-contact">Voir tous les tarifs et me contacter &rarr;</Link>
                </Button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;