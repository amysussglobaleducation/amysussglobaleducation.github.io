import  "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navigation from "../components/Navigation.react";
import Footer from "../components/Footer.react"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <html lang="en">
      <body className="index-page">
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
