import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {/* ========================================================
            TODO: Root Layout
            1. Import and place <Header /> above {children}.
            2. Keep {children} in the center (Next.js injects current page here).
            3. Import and place <Footer /> below {children}.
            Goal: Understand how RootLayout provides a persistent frame for all pages.
           ======================================================== */}

        {children}

      </body>
    </html>
  );
}
