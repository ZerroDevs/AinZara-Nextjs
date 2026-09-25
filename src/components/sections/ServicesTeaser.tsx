"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function ServicesTeaser() {
  const t = useTranslations();

  return (
    <section className="my-16 mx-auto max-w-7xl px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 w-full relative aspect-[16/10] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/assets/images/Services/structural_glazing.webp"
            alt="Our Works"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 w-full flex flex-col gap-4">
          <span className="text-[#f28b44] font-semibold text-sm uppercase tracking-wide">
            {t("services_teaser_badge")}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {t("services_teaser_title")}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t("services_teaser_desc")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/services" 
              className={buttonVariants({ variant: "default", size: "lg", className: "gap-2" })}
            >
              {t("services_teaser_btn_1")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/#contact" 
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {t("services_teaser_btn_2")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
