/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslations } from "next-intl";
import { ThermometerSnowflake, VolumeX, Wind, Award } from "lucide-react";
import { motion } from "framer-motion";

export function SpecFeatures() {
  const t = useTranslations();

  const specs = [
    {
      icon: <ThermometerSnowflake className="h-6 w-6" />,
      titleKey: "spec_1_title",
      descKey: "spec_1_desc",
    },
    {
      icon: <VolumeX className="h-6 w-6" />,
      titleKey: "spec_2_title",
      descKey: "spec_2_desc",
    },
    {
      icon: <Wind className="h-6 w-6" />,
      titleKey: "spec_3_title",
      descKey: "spec_3_desc",
    },
    {
      icon: <Award className="h-6 w-6" />,
      titleKey: "spec_4_title",
      descKey: "spec_4_desc",
    }
  ];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              key={i} 
              className="bg-background rounded-2xl border shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {spec.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">{t(spec.titleKey as any)}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(spec.descKey as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
