import { NextIntlClientProvider } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChevronRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Outfit } from "next/font/google";
import enMessages from '../../messages/en.json';
import './globals.css';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function GlobalNotFound() {
  return (
    <div className={`${outfit.className} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <NextIntlClientProvider locale="en" messages={enMessages}>
          <Header />
          <main className="flex-1">
            <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-background overflow-hidden">
              <div className="absolute top-0 right-0 w-full md:w-[55%] h-full z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10" />
                <Image 
                  src="/assets/images/hero_bg.webp" 
                  alt="404 Hero Background" 
                  fill 
                  className="object-cover object-center" 
                  priority 
                />
              </div>

              <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="max-w-xl md:max-w-2xl flex flex-col items-start text-start">
                  <nav className="flex items-center gap-2 text-muted-foreground font-semibold text-[15px] mb-6">
                    <Link href="/" className="hover:text-[#60a5fa] transition-colors">
                      {enMessages.nav_home}
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-muted-foreground">
                      404
                    </span>
                  </nav>
                  <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                    {enMessages.page_not_found_title}
                  </h1>
                  <p className="text-lg md:text-xl text-foreground mb-8 font-medium">
                    {enMessages.page_not_found_desc}
                  </p>
                  <Link href="/" className={buttonVariants({ variant: "default", size: "lg" })}>
                    {enMessages.back_to_home}
                  </Link>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </NextIntlClientProvider>
    </div>
  );
}
