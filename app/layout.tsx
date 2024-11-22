import { ThemeProvider } from "../theme/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
// import { Navbar } from "../components/Navbar";
// import { Footer } from "../components/Footer";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-navy-900 text-navy-800 dark:text-gold-100">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
