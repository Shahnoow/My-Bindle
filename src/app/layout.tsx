import "../styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
