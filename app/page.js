"use client"; // Para código interativo no Next.js

import { useState } from "react";

export default function Home() {
  const originalContent = (
    <p>
      Art and business are my passion. -{" "}
      <a href="/contact" style={{ color: "orange", textDecoration: "none" }}>
        Mateus Rocha
      </a>
    </p>
  );

  const [infoText, setInfoText] = useState(originalContent);

  // Dados dinâmicos para cada link
  const contentData = {
    film: (
      <>
        <h2>Film projects</h2>
        <div>
          <img src="/images/film.gif" alt="Film" />
        </div>
        <p>
          Videoclips, Social Media, Webseries, Documentaries, short-films and
          more!
        </p>
      </>
    ),
    design: (
      <>
        <h2>Graphic and UX Design</h2>
        <div>
          <img src="/images/design.gif" alt="Design" />
        </div>
        <p>Expression and functionality across many projects!</p>
      </>
    ),
    photography: (
      <>
        <h2>Capturing life through lenses</h2>
        <div>
          <img src="/images/photography.gif" alt="Photography" />
        </div>
        <p>Short-films, documentaries, branded content, ads & more!</p>
      </>
    ),
    brands: (
      <>
        <h2>Branding is where I shine</h2>
        <div>
          <img src="/images/brands.gif" alt="Brands" />
        </div>
        <p>Personal, film, fashion and marketing brands I worked with.</p>
      </>
    ),
    me: (
      <>
        <h2>About Myself</h2>
        <img src="/images/profile.png" alt="Mateus Rocha" />
        <p>A little more about myself and my journey.</p>
      </>
    ),
  };

  function updateContent(key) {
    setInfoText(contentData[key]);
  }

  function resetContent() {
    setTimeout(() => {
      setInfoText(originalContent);
    }, 500);
  }

  return (
    <div className="container">
      {/* Assinatura */}
      <div className="signature">
        <img src="/images/signature.png" alt="Signature" />
      </div>

      {/* Links */}
      <div>
        {["film", "design", "photography", "brands", "me"].map((category) => (
          <h1 key={category}>
            <a
              href="#"
              onMouseOver={() => updateContent(category)}
              onMouseOut={resetContent}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </a>
          </h1>
        ))}
      </div>

      {/* Texto Dinâmico */}
      <div className="text-box">{infoText}</div>

      {/* Rodapé */}
      <footer>&copy; Updated in 2025 - portfolio coded by Mateus :)</footer>
    </div>
  );
}
