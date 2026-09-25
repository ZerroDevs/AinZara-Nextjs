import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DetailedServicesGrid } from "@/components/sections/DetailedServicesGrid";
import { SpecFeatures } from "@/components/sections/SpecFeatures";
import { FacadeGallery } from "@/components/sections/FacadeGallery";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  // Using a fallback since ServicesHero translations were slightly modified in the full json dump, but I'll use the main one.
  const mainT = await getTranslations({ locale });
  return {
    title: mainT('services_page_title'),
    description: mainT('services_hero_desc'),
  };
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Services Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-background overflow-hidden">
          {/* Background Image Container with fade */}
          <div className="absolute top-0 ltr:right-0 rtl:left-0 w-full md:w-[55%] h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r ltr:from-background ltr:via-background/40 ltr:to-transparent rtl:from-transparent rtl:via-background/40 rtl:to-background z-10" />
            <Image 
              src="/assets/images/hero_bg.webp" 
              alt="Services Hero Background" 
              fill 
              className="object-cover object-center" 
              priority 
            />
          </div>

          <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="max-w-xl md:max-w-2xl flex flex-col items-start text-start">
              <nav className="flex items-center gap-2 text-muted-foreground font-semibold text-[15px] mb-6">
                <Link href="/" className="hover:text-[#60a5fa] transition-colors">
                  {t("nav_home")}
                </Link>
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                <span className="text-muted-foreground">
                  {t("nav_services")} & Facades
                </span>
              </nav>
              <h1 className="text-4xl md:text-5xl ltr:lg:text-[4rem] rtl:lg:text-5xl font-bold tracking-tight text-foreground ltr:leading-[1.1] rtl:leading-[1.4] mb-6">
                {t("services_hero_title")}
              </h1>
              <p className="text-lg md:text-xl text-foreground mb-8 font-medium">
                {t("services_hero_desc")}
              </p>
            </div>
          </div>
        </section>

        <SpecFeatures />
        <DetailedServicesGrid />
        <FacadeGallery />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

