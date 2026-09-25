/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

// Static imports for automatic blur placeholder effects
import curtainWallImg from "../../../public/assets/images/Services/curtain_wall_tower.webp";
import structuralImg from "../../../public/assets/images/Services/structural_glazing.webp";
import claddingImg from "../../../public/assets/images/Services/cladding_commercial.webp";
import residentialImg from "../../../public/assets/images/Services/residential_building.webp";
import spiderImg from "../../../public/assets/images/Services/spider_glass.webp";
import louversImg from "../../../public/assets/images/Services/louvers_sunshade.webp";
import showroomImg from "../../../public/assets/images/Services/commercial_showroom.webp";

export function FacadeGallery() {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filters = [
    { id: "all", labelKey: "gallery_filter_all" },
    { id: "curtain", labelKey: "gallery_filter_curtain" },
    { id: "structural", labelKey: "gallery_filter_structural" },
    { id: "cladding", labelKey: "gallery_filter_cladding" },
    { id: "residential", labelKey: "gallery_filter_residential" }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "curtain residential",
      image: curtainWallImg,
      titleKey: "gallery_item_curtain_wall_title",
      descKey: "gallery_item_curtain_wall_desc"
    },
    {
      id: 2,
      category: "structural",
      image: structuralImg,
      titleKey: "gallery_item_structural_glazing_title",
      descKey: "gallery_item_structural_glazing_desc"
    },
    {
      id: 3,
      category: "cladding",
      image: claddingImg,
      titleKey: "gallery_item_cladding_title",
      descKey: "gallery_item_cladding_desc"
    },
    {
      id: 4,
      category: "residential",
      image: residentialImg,
      titleKey: "gallery_item_residential_title",
      descKey: "gallery_item_residential_desc"
    },
    {
      id: 5,
      category: "structural curtain",
      image: spiderImg,
      titleKey: "gallery_item_spider_title",
      descKey: "gallery_item_spider_desc"
    },
    {
      id: 6,
      category: "cladding",
      image: louversImg,
      titleKey: "gallery_item_louvers_title",
      descKey: "gallery_item_louvers_desc"
    },
    {
      id: 7,
      category: "structural",
      image: showroomImg,
      titleKey: "gallery_item_showroom_title",
      descKey: "gallery_item_showroom_desc"
    },
    {
      id: 8,
      category: "curtain residential",
      image: claddingImg,
      titleKey: "gallery_item_office_title",
      descKey: "gallery_item_office_desc"
    },
    {
      id: 9,
      category: "curtain structural",
      image: structuralImg,
      titleKey: "gallery_item_engineering_title",
      descKey: "gallery_item_engineering_desc"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category.includes(activeFilter));

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-[#60a5fa] font-bold tracking-wider uppercase text-sm mb-2 block"
        >
          {t("gallery_section_badge")}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          {t("gallery_section_title")}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          {t("gallery_section_subtitle")}
        </motion.p>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === filter.id 
                  ? "bg-[#60a5fa] text-black shadow-md" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t(filter.labelKey as any)}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id} 
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted shadow-sm cursor-pointer border border-border"
            >
              <Image
                src={item.image}
                alt={t(item.titleKey as any)}
                fill
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-start">
                <h4 className="text-white font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {t(item.titleKey as any)}
                </h4>
                <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {t(item.descKey as any)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={filteredItems.map(item => ({ src: item.image.src }))}
      />
    </section>
  );
}
