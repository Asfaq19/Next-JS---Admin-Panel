import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login In | Next JS Dashboard | Asfaq",
  description: "Advance Next JS Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta property="og:image" content="./logo.png" />
        <meta property="og:image:alt" content="About Next JS Dashboard" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" /> 
        <meta property="og:image:alt" content="Next JS Dashboard" />
      </head>

      <body className={inter.className}>{children}</body>

    </html>
  );
}
