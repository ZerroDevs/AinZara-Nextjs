"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  const t = useTranslations();

  return (
    <section id="about" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/assets/images/img_2.webp"
                alt="Modern architectural facade project by AinZara Aluminum"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight"
            >
              {t("about_badge")}
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4 text-lg text-muted-foreground leading-relaxed"
            >
              <p>{t("about_p1")}</p>
              <p>{t("about_p2")}</p>
              <p>{t("about_p3")}</p>
            </motion.div>
            
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl font-bold text-primary mt-2"
            >
              {t("about_highlight")}
            </motion.h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
