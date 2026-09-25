import type { Metadata } from "next";
import { Alexandria, Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { Analytics } from '@vercel/analytics/next';

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from 'sonner';

import "../globals.css";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-alexandria",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: t('page_title'),
    description: t('meta_desc'),
    metadataBase: new URL('https://ainzara.ly'),
    openGraph: {
      title: t('page_title'),
      description: t('meta_desc'),
      url: `https://ainzara.ly/${locale}`,
      siteName: 'AinZara Aluminum & Facades',
      images: [
        {
          url: '/assets/images/hero_bg.webp',
          width: 1200,
          height: 630,
          alt: 'AinZara Facades & Aluminum',
        },
      ],
      locale: locale === 'ar' ? 'ar_LY' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('page_title'),
      description: t('meta_desc'),
      images: ['/assets/images/hero_bg.webp'],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico"
    }
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  // Apply exact font matching the original HTML
  const fontClass = locale === 'ar' ? alexandria.className : outfit.className;

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${fontClass} antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Toaster position="bottom-right" />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
