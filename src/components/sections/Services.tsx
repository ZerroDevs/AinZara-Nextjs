/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Gem, Building, DoorClosed, Layers } from "lucide-react";

export function Services() {
  const t = useTranslations();

  const services = [
    {
      id: "service_1",
      image: "/assets/images/img_3.webp",
      icon: <Gem className="h-6 w-6" />,
      titleKey: "service_1_title",
      descKey: "service_1_desc",
    },
    {
      id: "service_2",
      image: "/assets/images/StockCake-Glass_Building_Reflection-743120-standard-Qfab-Ss_bjNCidf3GnTn0g.webp",
      icon: <Building className="h-6 w-6" />,
      titleKey: "service_2_title",
      descKey: "service_2_desc",
    },
    {
      id: "service_3",
      image: "/assets/images/img_4.webp",
      icon: <DoorClosed className="h-6 w-6" />,
      titleKey: "service_3_title",
      descKey: "service_3_desc",
    },
    {
      id: "service_4",
      image: "/assets/images/img_5.webp",
      icon: <Layers className="h-6 w-6" />,
      titleKey: "service_4_title",
      descKey: "service_4_desc",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-foreground mb-16">
          {t("services_badge")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div key={svc.id} className="group relative bg-background rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={svc.image}
                  alt={t(svc.titleKey as any)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 end-4 bg-background/90 backdrop-blur-sm p-2 rounded-lg shadow-sm text-primary">
                  {svc.icon}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{t(svc.titleKey as any)}</h3>
                <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                  {t(svc.descKey as any)}
                </p>
                <div className="mt-6 pt-4 border-t">
                  <Link href="/#contact" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
                    {t("btn_book_now")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
