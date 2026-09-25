import { setRequestLocale } from 'next-intl/server';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { Contact } from "@/components/sections/Contact";

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Products />
        <ServicesTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
