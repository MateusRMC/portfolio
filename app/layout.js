import "./styles/globals.css"; // Importa os estilos globais

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio" />
        <meta name="author" content="Mateus Rocha" />
      </head>
      <body>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 - Portfolio by Mateus Rocha</p>
        </footer>
      </body>
    </html>
  );
}
