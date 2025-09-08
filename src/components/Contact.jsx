import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// 1) adresse de la praticienne
const PRACTICE_EMAIL = "isabelle.wencker@gmail.com"; // <-- change si besoin

// 2) quand on soumet le formulaire, on ouvre le logiciel mail
const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const name      = (form.name?.value || "").trim();
  const fromEmail = (form.email?.value || "").trim();
  const message   = (form.message?.value || "").trim();

  const subject = `Demande de contact – ${name || "visiteur du site"}`;
  const body =
    `Nom : ${name}\n` +
    `Email : ${fromEmail}\n\n` +
    `${message}`;

  // mailto (ouvre Outlook/Thunderbird/mail macOS, etc.)
  const mailto =
    `mailto:${PRACTICE_EMAIL}` +
    `?cc=${encodeURIComponent(fromEmail)}` +
    `&subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  // Lance l’appli mail par défaut
  window.location.href = mailto;

  // Fallback : si aucune appli n’a pris le relai, on propose GMail Web
  setTimeout(() => {
    // Heuristique simple : la page est toujours active => rien ne s’est ouvert
    const wantsGmail = window.confirm(
      "Aucune application mail ne semble configurée.\nVoulez-vous ouvrir Gmail pour envoyer votre message ?"
    );
    if (wantsGmail) {
      const gmail =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        `&to=${encodeURIComponent(PRACTICE_EMAIL)}` +
        `&cc=${encodeURIComponent(fromEmail)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
      window.open(gmail, "_blank", "noopener,noreferrer");
    }
  }, 800);
};


  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à <span className="gradient-text">Prendre Soin de Vous ?</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Contactez-moi pour discuter de vos besoins ou pour planifier votre prochaine séance de bien-être à domicile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="Ex: Jeanne Dupont"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="Ex: jeanne.dupont@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="Bonjour, j'aimerais plus d'informations sur..."
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full gradient-bg text-white py-3 text-base hover:opacity-90 transition-opacity">
                Envoyer le Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-gradient-to-br from-amber-500 to-orange-500 p-8 rounded-2xl shadow-xl text-white h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Mes Coordonnées</h3>
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
                  <p className="font-medium">Zone d'intervention :</p>
                  <p className="text-amber-100 text-sm">Phalsbourg, Saverne, Sarrebourg et leurs environs (à domicile).</p>
                </div>
              </div>
            </div>
            <Button asChild className="mt-8 w-full bg-white text-amber-600 hover:bg-amber-100 transition-colors py-3 text-base">
              <Link to="/tarifs-et-contact">Voir les tarifs détaillés</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;