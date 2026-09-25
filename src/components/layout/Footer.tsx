"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronUp } from "lucide-react";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export function Footer() {
  const t = useTranslations();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <footer className="bg-[#f0f4f8] dark:bg-background py-12 border-t border-border mt-auto">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Brand & Description */}
        <div className="flex flex-col gap-4 max-w-sm">
          <Link href="/">
            <Image src="/assets/images/am1.png" alt="AinZara-Aluminum" width={120} height={36} className="h-9 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            {t("footer_desc")}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16 flex-wrap">
          <div className="flex flex-col gap-3 min-w-[140px]">
            <h4 className="font-bold text-sm tracking-wide text-foreground uppercase mb-1">{t("footer_quick_links")}</h4>
            <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("footer_link_about")}</Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("footer_link_services")}</Link>
            <Link href="/#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("footer_link_products")}</Link>
          </div>

          <div className="flex flex-col gap-3 min-w-[140px]">
            <h4 className="font-bold text-sm tracking-wide text-foreground uppercase mb-1">{t("footer_details")}</h4>
            <Link href="/#legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("footer_legal")}</Link>
            <Link href="/#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("footer_privacy")}</Link>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            <h4 className="font-bold text-sm tracking-wide text-foreground uppercase mb-1">{t("footer_contact") || "CONTACT"}</h4>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="https://wa.me/218924295050" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
              </a>
              <a href="tel:+218924295050" className="hover:text-primary transition-colors">+218 92 429 5050</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="https://wa.me/218916141616" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
              </a>
              <a href="tel:+218916141616" className="hover:text-primary transition-colors">+218 91 614 1616</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="https://wa.me/218922117555" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
              </a>
              <a href="tel:+218922117555" className="hover:text-primary transition-colors">+218 92 211 7555</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="tel:+218915520267" className="hover:text-primary transition-colors">+218 91 552 0267</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="https://wa.me/218916808225" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
              </a>
              <a href="tel:+218916808225" className="hover:text-primary transition-colors">+218 91 680 8225</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a href="mailto:info@ainzara.ly" className="hover:text-primary transition-colors">info@ainzara.ly</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{t("footer_address") || "AinZara - Tripoli / Libya"}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="container px-4 md:px-8 max-w-7xl mx-auto mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 relative">
        <div className="flex flex-col items-center md:items-start text-sm text-muted-foreground">
          <p>
            2026 © {t("brand_name")}. {t("footer_rights")}
          </p>
          <a 
            href="https://wa.me/218916808225" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 mt-2 hover:opacity-80 transition-opacity"
          >
            <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
            <span className="text-[#84a3b8] font-medium">{t("footer_made_by") || "Made by Osama Abdallatif"}</span>
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-4 md:mt-0"
          aria-label="Back to top"
        >
          <ChevronUp className="h-4 w-4" />
          <span>{t("footer_back_top") || "Back to top"}</span>
        </button>
      </div>
    </footer>
  );
}
