import "./home.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My portfolio" />
        <meta name="author" content="Mateus Rocha" />
      </head>
      <body>{children}</body>
    </html>
  );
}
