import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import WorksClientPage from './WorksClientPage';

export function generateStaticParams() { 
  return [{ locale: 'en' }, { locale: 'ar' }]; 
}

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  return {
    title: t('works_page_title'),
    description: t('works_page_desc'),
  };
}

export default async function WorksPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WorksClientPage />;
}
