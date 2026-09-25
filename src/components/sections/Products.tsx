/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const productCategories = [
  {
    id: "facades",
    titleKey: "tab_facades",
    images: [
      "/assets/images/fintecnic-aluminium-windows-from-poland-Reynaers-ConceptWall-50-EtHwOAsfKEESeXcYiY6mQA.webp",
      "/assets/images/aluminyum-cephe-profilleri-840x575-3q5oS0237aanSeRj25ovDg.webp",
      "/assets/images/CWA50sg.webp"
    ]
  },
  {
    id: "hinged",
    titleKey: "tab_hinged",
    images: [
      "/assets/images/StockCake-Floating_Window_View-2328831-medium-MZVw3wC9cPwkyKrJ0MWdSg.webp",
      "/assets/images/StockCake-Modern_casement_window-2407995-medium-VoMWuRjusDiHJhl0cWmt6w.webp",
      "/assets/images/StockCake-Wood_Meets_Metal-3818515-medium-60Ys92JHZ0sErYIVJQ1_yQ.webp",
      "/assets/images/wdma-aluminium-hinge-bottom-hinged-window-white-powder-coating_62335706827-1-GtwqU7ZE6eAyLIsIiuY9Cg.webp",
      "/assets/images/zaczep_uchylu_titan_alu-1-1-V_ksNMoJJ7agpn3-9lhkig.webp",
      "/assets/images/g52-5w-ApZ7gLkuYhv8K1tFiUKbnA.webp"
    ]
  },
  {
    id: "sliding",
    titleKey: "tab_sliding",
    images: [
      "/assets/images/hueck-aluminium-systems-nA9oiTP_4oUv0NlX5MKleA.webp",
      "/assets/images/sliding-doors-3-NP5P__VNuYmg5IYNygroCw.webp",
      "/assets/images/20241231150535_87590-CeOWwD4-igBg9ge8FSjiuQ.webp"
    ]
  },
  {
    id: "glass",
    titleKey: "tab_glass",
    images: [
      "/assets/images/467901648_17883839115168134_591004115337252264_n-L8LmUiAwZBsicB6gwjDtMA.webp"
    ]
  }
];

export function Products() {
  const t = useTranslations();
  const [lightbox, setLightbox] = React.useState<{ images: string[], currentIndex: number } | null>(null);

  const [activeTab, setActiveTab] = React.useState(productCategories[0].id);
  const activeCategory = productCategories.find(c => c.id === activeTab) || productCategories[0];

  const handleNavigate = React.useCallback((direction: number) => {
    if (!lightbox) return;
    const newIndex = (lightbox.currentIndex + direction + lightbox.images.length) % lightbox.images.length;
    setLightbox({ ...lightbox, currentIndex: newIndex });
  }, [lightbox]);

  // Close lightbox on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") handleNavigate(-1);
      if (e.key === "ArrowRight") handleNavigate(1);
    };
    if (lightbox) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [lightbox, handleNavigate]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center text-foreground mb-12"
        >
          {t("products_title")}
        </motion.h2>
        
        {/* Horizontal Pill Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2.5 rounded-full text-[15px] font-bold transition-all ${
                activeTab === category.id 
                  ? "bg-[var(--primary)] text-black shadow-md scale-105" 
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {t(category.titleKey as any)}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-500"
        >
          {activeCategory.images.map((imgSrc, idx) => (
            <div 
              key={`${activeTab}-${idx}`} 
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
              onClick={() => setLightbox({ images: activeCategory.images, currentIndex: idx })}
            >
              <Image
                src={imgSrc}
                alt={`${t(activeCategory.titleKey as any)} Image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Text Content sliding up */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-start justify-end">
                <p className="text-white font-bold text-xl mb-1">{t(activeCategory.titleKey as any)}</p>
                <p className="text-white/80 text-sm flex items-center gap-1 font-medium group/btn">
                  View Details <span className="text-lg leading-none transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1">➔</span>
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-[#1a1a1a]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50 p-2"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <div 
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.images.length > 1 && (
              <button 
                className="absolute left-0 md:-left-16 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                onClick={() => handleNavigate(-1)}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <div className="relative w-full h-full">
              <Image 
                src={lightbox.images[lightbox.currentIndex]} 
                alt="Lightbox Fullscreen View" 
                fill 
                className="object-contain"
                priority
              />
            </div>

            {lightbox.images.length > 1 && (
              <button 
                className="absolute right-0 md:-right-16 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                onClick={() => handleNavigate(1)}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
