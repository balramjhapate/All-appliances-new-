import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';
import ConditionalFooter from '@/components/Footer/ConditionalFooter';
import GCLIDCapture from '@/components/common/GCLIDCapture';
import WhatsAppFloat from '@/components/common/WhatsAppFloat';
import StickyBottomCTA from '@/components/common/StickyBottomCTA';
import SiteShell from '@/components/Header/SiteShell';
import { organizationSchema } from '@/utils/schema';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  preload: true,
});

export default function MainLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()).replace(/</g, '\\u003c') }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5STRL8HQ');`,
          }}
        />
        <Script
          id="clarity-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wa2qlbh4a6");`,
          }}
        />
      </head>
      <body className={`${plusJakarta.className} bg-white text-gray-900 antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5STRL8HQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GCLIDCapture />
        <SiteShell>{children}</SiteShell>
        <ConditionalFooter />
        <WhatsAppFloat />
        <StickyBottomCTA />
      </body>
    </html>
  );
}
