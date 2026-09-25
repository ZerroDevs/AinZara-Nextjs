"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-background overflow-hidden">
      {/* Background Image Container with fade */}
      <div className="absolute top-0 ltr:right-0 rtl:left-0 w-full md:w-[55%] h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r ltr:from-background ltr:via-background/40 ltr:to-transparent rtl:from-transparent rtl:via-background/40 rtl:to-background z-10" />
        <Image 
          src="/assets/images/hero_bg.webp" 
          alt="Hero Background" 
          fill 
          className="object-cover object-center" 
          priority 
        />
      </div>

      <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-xl md:max-w-2xl flex flex-col items-start text-start">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            {t("hero_title")}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground mb-8 font-medium"
          >
            {t("hero_desc")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/#contact" 
              className={buttonVariants({ size: "lg", className: "px-8 py-6 text-[15px] font-bold rounded-md bg-[hsl(24.5, 93%, 70%)] hover:bg-[var(--primary)] text-black border-none" })}
            >
              {t("hero_btn")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
