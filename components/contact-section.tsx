"use client";

import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  // Variantes para animaciones de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1a62b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1a62b3]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#0e2240] dark:text-white"
          >
            Contáctenos
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Estamos aquí para responder a sus preguntas y ayudarle a encontrar
            la solución adecuada para sus necesidades. Nuestro equipo de
            expertos está listo para hacer realidad su proyecto.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-[#1a62b3]/5 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-md text-center border border-[#1a62b3]/20 dark:border-gray-600 cursor-hover"
          >
            <div className="w-16 h-16 bg-[#1a62b3]/10 dark:bg-[#1a62b3]/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Phone className="h-8 w-8 text-[#1a62b3] dark:text-[#1a62b3]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#0e2240] dark:text-white">
              Teléfono
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              +52 (557) 501-35-36
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Lun - Vie: 9:00 - 18:00
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-[#1a62b3]/5 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-md text-center border border-[#1a62b3]/20 dark:border-gray-600 cursor-hover"
          >
            <div className="w-16 h-16 bg-[#1a62b3]/10 dark:bg-[#1a62b3]/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Mail className="h-8 w-8 text-[#1a62b3] dark:text-[#1a62b3]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#0e2240] dark:text-white">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              jrodriguez@gporodriguez.com
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              ventas@gporodriguez.com
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-[#1a62b3]/5 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-md text-center border border-[#1a62b3]/20 dark:border-gray-600 cursor-hover"
          >
            <div className="w-16 h-16 bg-[#1a62b3]/10 dark:bg-[#1a62b3]/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <MapPin className="h-8 w-8 text-[#1a62b3] dark:text-[#1a62b3]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#0e2240] dark:text-white">
              Dirección
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Privada Santa Mónica 144 Saltillo Coahuila Mexico C.P 25070
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Av. Mexico 63 Naucalpan Estado De Mexico C.P 53050
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Boulevard Adolfo Ruiz Cortines 1344 Villahermosa Tabasco C.P 86035
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 max-w-md mx-auto text-center"
        >
          <motion.a
            href="https://wa.me/526144393955" // Número de WhatsApp de Grupo JC Rodríguez
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-8 rounded-full shadow-lg transition-all duration-300 cursor-hover"
          >
            <MessageCircle size={24} className="mr-3" />
            <span className="text-lg">Contáctanos por WhatsApp</span>
          </motion.a>
          <motion.p
            variants={itemVariants}
            className="text-gray-500 dark:text-gray-400 mt-4"
          >
            Respuesta rápida a través de nuestro canal de WhatsApp
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
