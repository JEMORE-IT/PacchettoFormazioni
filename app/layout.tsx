import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {/* insert Hero Section */}
        {children}
        {/* insert Footer Section */}

      </body>
    </html>
  );
}
