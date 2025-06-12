import "../styles/globals.css";
import Head from "next/head";
import Footer from "./components/Footer";

export const metadata = {
  title: "MyBindle",
  description: "Stay Connected. Stay Social. Stay You!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="20" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
