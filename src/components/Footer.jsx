import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const logoUrl = "\images\logo-acdm.jpg";

  return (
    <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img-replace src={logoUrl} alt="Logo Au Cœur Des Mains" className="h-12 w-auto" />
              <span className="font-bold text-2xl text-white">Au Cœur Des Mains</span>
            </Link>
            <p className="text-amber-100 text-sm max-w-md">
              Votre praticienne bien-être à domicile pour des soins personnalisés : Reboutologie, AMMA assis, Massage, Reiki, Technique EMMETT.
            </p>
          </div>
          
          <div>
            <p className="font-bold mb-4 text-xl text-amber-300">Contactez-moi</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-amber-200 hover:text-white transition-colors">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <a href="tel:0604154212">06 04 15 42 12</a>
              </li>
              <li className="flex items-center text-amber-200 hover:text-white transition-colors">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <a href="mailto:isabelle.wencker@gmail.com">isabelle.wencker@gmail.com</a>
              </li>
              <li className="flex items-start text-amber-200">
                <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0" />
                <span>Intervention à domicile : Phalsbourg, Saverne, Sarrebourg et environs.</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="mt-6 border-amber-300 text-amber-200 hover:bg-amber-700 hover:text-white hover:border-amber-200 transition-colors">
              <Link to="/tarifs-et-contact">Plus d'infos & RDV</Link>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-10 pt-8 text-center">
          <p className="text-amber-200 text-xs">
            © {new Date().getFullYear()} Au Cœur Des Mains. Tous droits réservés. 
            {/* <Link to="/mentions-legales" className="ml-2 hover:text-white transition-colors">Mentions Légales</Link> | 
            <Link to="/politique-confidentialite" className="ml-1 hover:text-white transition-colors">Politique de Confidentialité</Link> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;