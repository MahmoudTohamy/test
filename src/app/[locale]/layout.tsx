/** @format */

import type { Metadata } from "next";
import "@/styles/main.scss";
import TranslationsProvider from "@/components/Providers/TranslationsProvider";
import { NotificationManger } from "@/components/Providers/NotificationManger";
import initTranslations from "../../../i18n";
import style from "./page.module.scss";
import Header from "@/components/Common/Header/index";
import Footer from "@/components/Common/Footer/index";
import localFont from "next/font/local";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import FAQ from "@/components/Home/FAQ/FAQ";

const saansTrial = localFont({
  src: [
    {
      path: "../../../public/fonts/SaansTRIAL-Light.ttf",
      style: "normal",
    },
    {
      path: "../../../public/fonts/SaansTRIAL-Light.woff",
    },

    {
      path: "../../../public/fonts/SaansTRIAL-Light.woff2",
    },
  ],
  variable: "--font-saans-trial", // Optional: Define a CSS variable for global usage
  display: "swap", // Optional: Improves loading behavior
});

export const metadata: Metadata = {
  title: "nusuk",
  description: "",
};

type TProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const i18nNamespaces = ["common"];
export default async function RootLayout({ children, params }: TProps) {
  const { locale } = await params;
  const {
    i18n: { dir },
    resources,
  } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={dir()}>
      <head>
        <meta name='robots' content='noidex, nofollow' />
      </head>
      <body style={{ fontFamily: saansTrial.style.fontFamily }}>
        <main>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <NotificationManger>
              <>
                <Header />
                <div className={style.container}>{children}</div>
                <FAQ />
                <Footer />
              </>
            </NotificationManger>
          </TranslationsProvider>
        </main>
      </body>
    </html>
  );
}
