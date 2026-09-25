/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function DetailedServicesGrid() {
  const t = useTranslations();

  const specializedServices = [
    {
      id: "curtain_wall",
      image: "/assets/images/Services/curtain_wall_tower.webp",
      titleKey: "svc_curtain_wall_title",
      descKey: "svc_curtain_wall_desc",
      features: ["svc_curtain_wall_feat1", "svc_curtain_wall_feat2", "svc_curtain_wall_feat3"]
    },
    {
      id: "structural",
      image: "/assets/images/Services/structural_glazing.webp",
      titleKey: "svc_structural_glazing_title",
      descKey: "svc_structural_glazing_desc",
      features: ["svc_structural_glazing_feat1", "svc_structural_glazing_feat2", "svc_structural_glazing_feat3"]
    },
    {
      id: "cladding",
      image: "/assets/images/Services/cladding_commercial.webp",
      titleKey: "svc_cladding_title",
      descKey: "svc_cladding_desc",
      features: ["svc_cladding_feat1", "svc_cladding_feat2", "svc_cladding_feat3"]
    },
    {
      id: "spider",
      image: "/assets/images/Services/spider_glass.webp",
      titleKey: "svc_spider_title",
      descKey: "svc_spider_desc",
      features: ["svc_spider_feat1", "svc_spider_feat2", "svc_spider_feat3"]
    },
    {
      id: "louvers",
      image: "/assets/images/Services/louvers_sunshade.webp",
      titleKey: "svc_louvers_title",
      descKey: "svc_louvers_desc",
      features: ["svc_louvers_feat1", "svc_louvers_feat2", "svc_louvers_feat3"]
    },
    {
      id: "thermal_doors",
      image: "/assets/images/Services/residential_building.webp",
      titleKey: "svc_thermal_doors_title",
      descKey: "svc_thermal_doors_desc",
      features: ["svc_thermal_doors_feat1", "svc_thermal_doors_feat2", "svc_thermal_doors_feat3"]
    },
    {
      id: "custom_glass",
      image: "/assets/images/Services/commercial_showroom.webp",
      titleKey: "svc_custom_glass_title",
      descKey: "svc_custom_glass_desc",
      features: ["svc_custom_glass_feat1", "svc_custom_glass_feat2", "svc_custom_glass_feat3"]
    },
    {
      id: "engineering",
      image: "/assets/images/Services/structural_glazing.webp",
      titleKey: "svc_engineering_title",
      descKey: "svc_engineering_desc",
      features: ["svc_engineering_feat1", "svc_engineering_feat2", "svc_engineering_feat3"]
    }
  ];

  return (
    <section className="py-24 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {specializedServices.map((svc, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
              key={svc.id} 
              className="bg-background rounded-2xl overflow-hidden border shadow-sm flex flex-col sm:flex-row group hover:shadow-md transition-shadow"
            >
              <div className="w-full sm:w-2/5 relative min-h-[240px] overflow-hidden">
                <Image
                  src={svc.image}
                  alt={t(svc.titleKey as any)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-3">{t(svc.titleKey as any)}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {t(svc.descKey as any)}
                </p>
                <ul className="space-y-2 mt-auto">
                  {svc.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 me-2 shrink-0" />
                      <span>{t(feat as any)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
