import Link from "next/link";
import "@/app/film/categoria.css"; // Importando o CSS corretamente

export default function CategoriaLayout({ children }) {
  return (
    <div className="categoria-container">
      <header>
        <h1>FILM</h1>
        <p>Short-films, VideoClips, Documentaries, Ads, and more!</p>
        <nav>
          <ul>
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/design" className="nav-link">
                Design
              </Link>
            </li>
            <li>
              <Link href="/brands" className="nav-link">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/photo" className="nav-link">
                Photography
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main>{children}</main>
    </div>
  );
}
