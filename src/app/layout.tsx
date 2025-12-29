// src/app/layout.tsx - استبدل المحتوى:
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'إحسان الشامي - مطور ويب Full-Stack | React Next.js Django',
  description: 'تطوير مواقع ويب احترافية | React • Next.js • Django • APIs | منصات خمسات ومستقل',
  keywords: 'مطور ويب, React, Next.js, Django, فريلانسر, خمسات, مستقل, تطوير مواقع',
  authors: [{ name: 'إحسان الشامي', url: 'https://ihsan-portfolio.vercel.app' }],
  openGraph: {
    title: 'إحسان الشامي - مطور ويب Full-Stack',
    description: 'تطوير مواقع ويب احترافية بـ React Next.js Django',
    images: '/og-image.jpg',
    locale: 'ar_AR',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
