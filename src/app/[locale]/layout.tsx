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
  title: "test",
  description: "",
};

type TProps = {
  children: React.ReactNode;
};

const i18nNamespaces = ["common"];
export default async function RootLayout({ children }: TProps) {
  const {
    i18n: { dir },
    resources,
  } = await initTranslations("ar", i18nNamespaces);
  return (
    <html lang={"ar"} dir={dir()}>
      <head>
        <meta name='robots' content='noidex, nofollow' />
      </head>
      <body style={{ fontFamily: saansTrial.style.fontFamily }}>
        <main>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={"ar"}
            resources={resources}>
            <NotificationManger>
              <>
                <Header />
                <div className={style.container}>{children}</div>
                <Footer />
              </>
            </NotificationManger>
          </TranslationsProvider>
        </main>
      </body>
    </html>
  );
}
