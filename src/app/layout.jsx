import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
  ],
});

export const metadata = {
  title: "Fuzzion",
  description: "Agencia dedicada en servicios digitales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
