import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative bg-gradient-to-b from-amber-50 to-amber-200"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-400 rounded-full filter blur-3xl opacity-30 -z-10 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Au Cœur Des Mains</span>
              <br /> Votre Bien-être, Ma Priorité
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Découvrez des soins personnalisés pour soulager vos douleurs, réduire votre stress et retrouver une harmonie corporelle et mentale. J'interviens à votre domicile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="gradient-bg text-white px-8 py-3 text-lg hover:opacity-90">
                <Link to="/tarifs-et-contact">Mes Services et Tarifs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-amber-500 text-amber-600 px-8 py-3 text-lg hover:bg-amber-50">
                <Link to="/reboutologie">La Reboutologie</Link>
              </Button>
            </div>
            <p className="mt-8 text-gray-600 text-sm">
              Certifiée et expérimentée en Reboutologie, AMMA assis, Reiki et plus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-300 rounded-3xl transform rotate-3 scale-105 shadow-lg"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden p-1">
                <img 
                  src={`${import.meta.env.BASE_URL}images/isabelle-wencker.jpg`}
                  alt="Portrait de la praticienne"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;