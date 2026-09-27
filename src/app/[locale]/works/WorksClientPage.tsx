"use client";

import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "@/i18n/routing";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import Image from "next/image";
import { CheckCircle2, Factory, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import buildingBefore from "../../../../public/assets/images/Works/building_before.jpg";
import buildingAfter from "../../../../public/assets/images/Works/building_after.jpg";

export default function WorksPage() {
  const t = useTranslations();

  return (
    <>
      <Header />
      
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-background overflow-hidden border-b border-border/40">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 ltr:right-0 rtl:left-0 w-full md:w-[55%] h-full z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r ltr:from-background ltr:via-background/40 ltr:to-transparent rtl:from-transparent rtl:via-background/40 rtl:to-background z-10" />
            <Image 
              src="/assets/images/hero_bg.webp" 
              alt="Works Hero Background" 
              fill 
              className="object-cover object-center" 
              priority 
            />
          </motion.div>

          <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl md:max-w-2xl flex flex-col items-start text-start"
            >
              <nav className="flex items-center gap-2 text-muted-foreground font-semibold text-[15px] mb-6">
                <Link href="/" className="hover:text-[#60a5fa] transition-colors">
                  {t("nav_home")}
                </Link>
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                <span className="text-muted-foreground">
                  {t("nav_works")}
                </span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                {t("works_page_title")}
              </h1>
              <p className="text-lg md:text-xl text-foreground mb-8 font-medium">
                {t("works_page_desc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sliders Section */}
        <section className="py-24 bg-muted/20 overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col gap-24">
              
              {/* Slider 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-6"
              >
                <div className="text-start">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t("works_project1_title")}</h3>
                  <p className="text-muted-foreground">{t("works_project1_desc")}</p>
                </div>
                
                <div className="shadow-2xl rounded-2xl overflow-hidden border border-border/50">
                  <BeforeAfterSlider
                    beforeImage={buildingBefore}
                    afterImage={buildingAfter}
                    beforeLabel={t("works_before")}
                    afterLabel={t("works_after")}
                  />
                </div>
                
                {/* Information Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-background rounded-2xl p-6 border shadow-sm"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <Factory className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{t("works_feat1_title")}</h4>
                    <p className="text-muted-foreground text-sm">{t("works_feat1_desc")}</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-background rounded-2xl p-6 border shadow-sm"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{t("works_feat2_title")}</h4>
                    <p className="text-muted-foreground text-sm">{t("works_feat2_desc")}</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-background rounded-2xl p-6 border shadow-sm"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{t("works_feat3_title")}</h4>
                    <p className="text-muted-foreground text-sm">{t("works_feat3_desc")}</p>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
