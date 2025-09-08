import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Claire L.",
      location: "Saverne",
      content: "Après ma séance de reboutologie, mes douleurs au dos ont considérablement diminué. Une vraie magicienne avec des mains en or ! Je recommande vivement.",
      rating: 5,
      avatarText: "CL"
    },
    {
      name: "Marc D.",
      location: "Phalsbourg",
      content: "Le massage AMMA assis en entreprise a été une révélation pour notre équipe. Tout le monde s'est senti détendu et reboosté. Service professionnel et efficace.",
      rating: 5,
      avatarText: "MD"
    },
    {
      name: "Sophie T.",
      location: "Sarrebourg",
      content: "J'ai testé le Reiki pour la première fois et j'ai été surprise par la sensation de calme profond. Une expérience unique que je referai sans hésiter.",
      rating: 4,
      avatarText: "ST"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-amber-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils ont <span className="gradient-text">Adoré !</span>
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto text-lg">
            Découvrez ce que mes clients pensent des soins prodigués par Au Cœur Des Mains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-xl card-hover relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-amber-200 opacity-50 transform rotate-12" />
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                  {testimonial.avatarText}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic text-justify leading-relaxed">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;