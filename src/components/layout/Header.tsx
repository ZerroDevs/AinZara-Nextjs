"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Globe, Phone, Home, Info, Briefcase, Camera, Layers, Monitor } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  React.useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    
    const handleScrollForHome = () => {
      if (window.scrollY < 100) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScrollForHome);
    handleScrollForHome();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScrollForHome);
    };
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when drawer is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleLang = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { href: "/", label: t("nav_home"), icon: Home },
    { href: "/#about", label: t("nav_about"), icon: Info },
    { href: "/services", label: t("nav_services"), icon: Briefcase },
    { href: "/works", label: t("nav_works"), icon: Camera },
    { href: "/#projects", label: t("nav_products"), icon: Layers },
  ];

  const getIsActive = (href: string) => {
    if (href === "/services") return pathname === "/services";
    if (href === "/works") return pathname === "/works";
    if (pathname !== "/") return false;
    
    if (href === "/") return activeSection === "home" || activeSection === "";
    if (href === "/#about") return activeSection === "about";
    if (href === "/#projects") return activeSection === "projects";
    
    return false;
  };

  return (
    <>
      <header 
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm py-0" 
            : "bg-transparent border-transparent shadow-none py-2"
        }`}
      >
        <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/images/am1.png" alt="AinZara-Aluminum" width={140} height={42} className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = getIsActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-bold transition-colors px-4 py-1.5 rounded-md ${
                    isActive 
                      ? "bg-primary/20 text-primary" 
                      : "hover:text-primary text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Actions Desktop */}
            <div className="hidden md:flex gap-3 items-center">
              <Link href="/#contact" className={buttonVariants({ variant: "default", size: "default", className: "rounded-md font-bold px-6 bg-primary/90 hover:bg-primary border border-primary/50 text-primary-foreground backdrop-blur-md shadow-sm" })}>
                {t("nav_contact")}
              </Link>
              <Button variant="outline" size="sm" onClick={toggleLang} className={`rounded-full font-bold px-4 transition-colors ${isScrolled ? "bg-background border-border" : "bg-white/50 dark:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10"}`}>
                <Globe className="h-4 w-4 rtl:ml-2 ltr:mr-2" />
                {locale === "en" ? "العربية" : "English"}
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full transition-colors ${isScrolled ? "bg-background border-border" : "bg-white/50 dark:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10"}`}
                onClick={cycleTheme}
                aria-label="Toggle theme"
              >
                {mounted && theme === "dark" ? (
                  <Moon className="h-4 w-4" />
                ) : mounted && theme === "system" ? (
                  <Monitor className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-7 w-7" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Matches original HTML slide-in aside) */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <aside 
        className={`fixed top-0 bottom-0 z-50 w-[85%] max-w-[340px] bg-background/85 backdrop-blur-2xl shadow-2xl transition-transform duration-300 flex flex-col ltr:right-0 rtl:left-0 border-l border-white/10 ${isMobileMenuOpen ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full"}`}
      >
        <div className="flex items-center justify-between py-6 px-8 border-b border-border/40">
          <Image src="/assets/images/am1.png" alt="AinZara-Aluminum" width={120} height={36} className="h-8 w-auto" />
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="rounded-full bg-muted/50 hover:bg-muted -mr-2 rtl:-mr-0 rtl:-ml-2">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="flex flex-col p-4 gap-2 overflow-y-auto mt-2">
          {navLinks.map((link) => {
            const isActive = getIsActive(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 text-[17px] font-bold transition-all px-4 py-3.5 rounded-xl ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className={`h-5 w-5 ${isActive ? "opacity-100" : "opacity-70 text-muted-foreground"}`} />
                {link.label}
              </Link>
            )
          })}
        </nav>
        
        <div className="mt-auto p-6 pb-10 flex flex-col gap-6">
          {/* Elevated Contact CTA */}
          <Link
            href="/#contact"
            className="w-full text-center py-4 rounded-xl font-bold bg-primary/90 hover:bg-primary border border-primary/50 text-primary-foreground backdrop-blur-md shadow-lg shadow-primary/20 active:scale-95 transition-all text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("nav_contact")}
          </Link>
          
          <div className="grid grid-cols-2 gap-3 mt-2">
            <Button variant="outline" className="w-full justify-center rounded-xl font-semibold bg-background/50 backdrop-blur border-border/40" onClick={toggleLang}>
              <Globe className="h-4 w-4 rtl:ml-2 ltr:mr-2" /> 
              {locale === "en" ? "العربية" : "English"}
            </Button>
            <Button
              variant="outline"
              className="w-full justify-center rounded-xl font-semibold bg-background/50 backdrop-blur border-border/40"
              onClick={cycleTheme}
            >
              {mounted && theme === "dark" ? (
                <><Moon className="h-4 w-4 rtl:ml-2 ltr:mr-2" /> Dark Mode</>
              ) : mounted && theme === "system" ? (
                <><Monitor className="h-4 w-4 rtl:ml-2 ltr:mr-2" /> System</>
              ) : (
                <><Sun className="h-4 w-4 rtl:ml-2 ltr:mr-2" /> Light Mode</>
              )}
            </Button>
          </div>
          
          {/* Mini-Dashboard Footer */}
          <div className="flex items-center justify-center gap-6 mt-4 pt-6 border-t border-border/40 text-muted-foreground">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary hover:-translate-y-1 transition-all p-2 bg-muted/30 rounded-full" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="tel:+218924295050" className="hover:text-primary hover:-translate-y-1 transition-all p-2 bg-muted/30 rounded-full" aria-label="Phone">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
