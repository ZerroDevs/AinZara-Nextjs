"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function clientAction(formData: FormData) {
    setIsSubmitting(true);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const subject = `Website Inquiry: ${name}`;
    const body = `Hello AinZara Team,

I would like to inquire about your services. Here are my details:

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}

------------------------------
Submitted via ainzara.ly`;

    const mailtoLink = `mailto:info@ainzara.ly?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Tiny delay for UI effect
    await new Promise(resolve => setTimeout(resolve, 600));
    
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    toast.success("Opening your email app... / جارِ فتح تطبيق البريد...");
    
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (form) form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl bg-card border rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <div className="text-center mb-8">
            <p className="text-primary font-medium mb-2">{t("contact_badge")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("contact_title")}</h2>
          </div>
          
          <form id="contact-form" className="flex flex-col gap-6" action={clientAction}>
            <Input 
              type="text" 
              name="name"
              placeholder={t("ph_fullname")} 
              required 
              className="h-12 bg-background"
            />
            <Input 
              type="email" 
              name="email"
              placeholder={t("ph_email")} 
              required 
              className="h-12 bg-background"
            />
            <Input 
              type="tel" 
              name="phone"
              placeholder={t("ph_phone")} 
              required 
              className="h-12 bg-background"
            />
            <Textarea 
              name="message"
              placeholder={t("ph_message")} 
              required 
              rows={4}
              className="resize-none bg-background"
            />
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Checkbox id="privacy" name="privacy" value="accepted" required />
              <label
                htmlFor="privacy"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
              >
                <Link href="/#privacy" className="hover:text-primary transition-colors">
                  {t("contact_privacy")}
                </Link>
              </label>
            </div>
            
            <div className="flex gap-4 mt-2 justify-center">
              <Button type="submit" size="lg" className="min-w-[160px]" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : t("contact_submit")}
              </Button>
              <Button 
                type="button" 
                size="icon" 
                className="h-11 w-11 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white shrink-0"
                onClick={() => window.open('https://wa.me/218924295050', '_blank')}
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </Button>
            </div>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
