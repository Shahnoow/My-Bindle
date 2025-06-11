import "../styles/globals.css";
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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
