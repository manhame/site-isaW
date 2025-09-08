import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Coffee, Leaf } from "lucide-react";

const Features = () => {
  const services = [
    {
      icon: <Heart className="h-10 w-10 text-amber-600" />,
      title: "Reboutologie",
      description: "Réharmonisation profonde des structures du corps pour soulager douleurs et tensions.",
      link: "/reboutologie",
      img: "Technique de reboutologie sur le dos",
      alt: "Thérapeute appliquant la reboutologie sur un patient"
    },
    {
      icon: <Users className="h-10 w-10 text-amber-600" />,
      title: "AMMA Assis",
      description: "Massage sur chaise, rapide et efficace, idéal pour les entreprises ou événements.",
      link: "/amma-assis",
      img: "Massage AMMA assis en entreprise",
      alt: "Employé recevant un massage AMMA sur chaise au bureau"
    },
    {
      icon: <Coffee className="h-10 w-10 text-amber-600" />,
      title: "Massage Bien-être",
      description: "Un moment de pure détente pour relâcher le stress et revitaliser corps et esprit.",
      link: "/massage-de-relaxation",
      img: "Ambiance zen pour un massage bien-être",
      alt: "Huiles de massage, bougies et serviettes dans un spa"
    },
    {
      icon: <Leaf className="h-10 w-10 text-amber-600" />,
      title: "Reiki & Technique EMMETT",
      description: "Soins énergétiques doux pour rééquilibrer et apaiser en profondeur.",
      link: "/reiki", 
      img: "Énergie Reiki circulant entre des mains",
      alt: "Visualisation de l'énergie Reiki"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-amber-200 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Découvrez <span className="gradient-text">Mes Soins</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Chaque soin est adapté à vos besoins spécifiques pour vous apporter soulagement, détente et bien-être.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-xl card-hover flex flex-col items-center text-center gradient-border"
            >
              <div className="mb-5 p-4 bg-amber-100 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">{service.title}</h3>
              <p className="text-gray-600 mb-5 text-sm flex-grow">{service.description}</p>
              <img  alt={service.alt} className="w-full h-40 object-cover rounded-lg mb-5 shadow-md" src="https://images.unsplash.com/photo-1654983287476-baa10fd46935" />
              <Button asChild variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50 w-full">
                <Link to={service.link}>En savoir plus</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;