import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Info } from "lucide-react";
import Map from "@/components/Map"; // Importation du composant Map

const TarifsContactPage = () => {
  const tarifs = [
    { prestation: "Reboutologie", duree: "30 à 45 mn", pratique: "sur table de massage", montant: "45€ la séance" },
    { prestation: "Reboutologie (2 pers.)", duree: "30 à 45 mn / pers.", pratique: "sur table de massage", montant: "80€ pour 2 pers." },
    { prestation: "Massage de relaxation", duree: "60 mn", pratique: "sur table de massage", montant: "65€ la séance" },
    { prestation: "Massage tonique", duree: "60 mn", pratique: "sur table de massage", montant: "65€ la séance" },
    { prestation: "Détente du dos", duree: "45 mn", pratique: "sur table de massage", montant: "45€ la séance" },
    { prestation: "Massage assis – entreprise", duree: "20 mn (3 par heure)", pratique: "sur chaise ergonomique", montant: "60€ l’heure" },
    { prestation: "Massage assis – domicile", duree: "30 mn (2 par heure)", pratique: "sur chaise ergonomique", montant: "60€ l’heure" },
    { prestation: "Reiki", duree: "1h", pratique: "sur table de massage", montant: "45€ la séance" },
    { prestation: "Technique EMMETT", duree: "10 à 40 mn", pratique: "adaptable", montant: "variable" },
  ];

  const phalsbourgCoords = { lat: 48.7697, lon: 7.2603 }; // Coordonnées de Phalsbourg

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Tarifs et Contact
        </h1>

        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 gradient-text">Mes Prestations et Tarifs</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-max text-left">
                <thead>
                  <tr className="border-b border-amber-200">
                    <th className="py-3 px-2 text-amber-700 font-semibold">Prestation</th>
                    <th className="py-3 px-2 text-amber-700 font-semibold">Durée</th>
                    <th className="py-3 px-2 text-amber-700 font-semibold">En Pratique</th>
                    <th className="py-3 px-2 text-amber-700 font-semibold text-right">Montant</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifs.map((service, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-amber-100 hover:bg-amber-50/30"
                    >
                      <td className="py-3 px-2 text-sm text-gray-700 font-medium">{service.prestation}</td>
                      <td className="py-3 px-2 text-sm text-gray-600">{service.duree}</td>
                      <td className="py-3 px-2 text-sm text-gray-600">{service.pratique}</td>
                      <td className="py-3 px-2 text-sm text-amber-700 font-semibold text-right">{service.montant}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500 flex items-start">
                <Info className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="text-sm text-gray-700">
                        En fonction du déplacement, des frais kilométriques peuvent s’ajouter (0,20€ / kilomètre).
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                        Modes de paiement acceptés : Espèces, Chèque.
                    </p>
                </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-8 rounded-xl shadow-xl text-white md:sticky md:top-24">
            <h2 className="text-2xl font-semibold mb-6">Prendre Rendez-vous</h2>
            <p className="text-amber-100 mb-6">
              Contactez-moi pour toute question ou pour fixer un rendez-vous. Je suis à votre écoute.
            </p>
            <div className="space-y-5">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-amber-200 flex-shrink-0" />
                <a href="tel:0604154212" className="hover:underline">06 04 15 42 12</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-amber-200 flex-shrink-0" />
                <a href="mailto:isabelle.wencker@gmail.com" className="hover:underline">isabelle.wencker@gmail.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-amber-200 mt-1 flex-shrink-0" />
                <div>
                  <p>Intervention à domicile :</p>
                  <p className="text-amber-100 text-sm">Phalsbourg, Saverne, Sarrebourg et alentours.</p>
                </div>
              </div>
            </div>
            <Button 
              asChild 
              className="mt-8 w-full bg-white text-amber-600 hover:bg-amber-100 transition-colors"
            >
              <a href="mailto:isabelle.wencker@gmail.com">Envoyer un email</a>
            </Button>
          </div>
        </div>
        
        <div>
            <h2 className="text-3xl font-semibold mb-8 text-center gradient-text">Zone d'Intervention - Phalsbourg, Saverne et Sarrebourg</h2>
            <div className="bg-white p-2 rounded-xl shadow-xl h-[450px]">
                 <Map 
                    lat={phalsbourgCoords.lat} 
                    lon={phalsbourgCoords.lon} 
                    zoom={10} 
                    popupText="Zone d'intervention principale : Phalsbourg, Saverne, Sarrebourg et environs." 
                  />
            </div>
             <p className="text-center mt-4 text-gray-600">
                Je me déplace chez vous pour vous offrir un moment de détente et de soin personnalisé.
            </p>
        </div>

      </motion.div>
    </div>
  );
};

export default TarifsContactPage;