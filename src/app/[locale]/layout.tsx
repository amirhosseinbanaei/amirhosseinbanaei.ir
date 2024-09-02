import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { Inter, Vazirmatn } from "next/font/google";
import MetaData from "../metaData";

const inter = Inter({ subsets: ["latin"] });
const vazir = Vazirmatn({ subsets: ["latin"] });
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const dir = locale === "fa" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir}>
      <head>
        <meta property="og:type" content="portfolio" />
        <meta property="og:url" content="https://amirhosseinbanaei.ir" />
        <meta property="og:locale" content={locale} />
        <meta
          name="keywords"
          content="امیرحسین بنایی, امیرحسین بنائی, amirhosseinbanaei, amir hossein banaei, Amir Hossein Banaei, AmirHosseinBanaei, amir hosein banaei, amirhosein banaei,amirhossein, amirhosein"
        />
        <MetaData language={locale} page="home" />
      </head>
      <body
        className={`${locale === "fa" ? vazir.className : inter.className} ${dir} ${locale} h-auto w-full bg-background`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
