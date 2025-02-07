import  "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navigation from "../components/Navigation.react";
import Footer from "../components/Footer.react";
import { Open_Sans, Poppins, Raleway } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic']
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})
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
