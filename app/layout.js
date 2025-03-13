import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="My portfolio showcasing film, design, photography, and branding projects."
        />
        <meta name="author" content="Mateus Rocha" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <nav id="nav-links">
          <Link href="/">Home</Link>
          <Link href="/film">Film</Link>
          <Link href="/design">Design</Link>
          <Link href="/photography">Photography</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/myself">About</Link>
        </nav>
        <div id="signature-container">
          <Image
            className="signature"
            src="/signature.png"
            alt="Signature"
            width={250}
            height={100}
          />
        </div>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 - Portfolio coded by Mateus Rocha</p>
        </footer>
      </body>
    </html>
  );
}
