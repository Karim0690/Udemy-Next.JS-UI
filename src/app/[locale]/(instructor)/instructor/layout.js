import "./globals.css";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "sonner";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    NotFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} dir={`${locale === "ar" ? "rtl" : "ltr"}`}>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          {" "}
          {children} <Toaster position="bottom-right" />
        </NextIntlClientProvider>{" "}
      </body>{" "}
    </html>
  );
}
