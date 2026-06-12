import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Holiday Heed Kashmir',
  description: 'Discover the world\'s most breathtaking destinations through our curated high-altitude perspective.',
  icons: {
    icon: '/logo/image.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16702219824"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16702219824');
          `}
        </Script>
        {/* Phone conversion snippet */}
        <Script id="google-phone-conversion" strategy="afterInteractive">
          {`
            gtag('config', 'AW-16702219824/FdG5CPH2nLscELDMnpw-', {
              'phone_conversion_number': '7006 787 978'
            });
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-16702219824/FdG5CPH2nLscELDMnpw-',
                  'event_callback': callback
              });
              return false;
            };
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
