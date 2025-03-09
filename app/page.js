"use client"; // Permite manipulação de estado no Next.js

import { useState } from "react";

export default function Home() {
  const originalContent = (
    <p>
      Art and business are my passion. - <a href="/contact">Mateus Rocha</a>
    </p>
  );

  const [infoText, setInfoText] = useState(originalContent);

  // Conteúdos dinâmicos
  const contentData = {
    film: (
      <>
        <h2>Film projects</h2>
        <div id="preview">
          <img
            src="https://cdn.pixabay.com/animation/2023/02/12/02/01/02-01-27-439_512.gif"
            alt="Film"
          />
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
        <div id="preview">
          <img
            src="https://cdn.pixabay.com/animation/2023/02/12/02/01/02-01-27-439_512.gif"
            alt="Design"
          />
        </div>
        <p>Expression and functionality across many projects!</p>
      </>
    ),
    photography: (
      <>
        <h2>Capturing life through lenses</h2>
        <div id="preview">
          <img
            src="https://cdn.pixabay.com/animation/2023/02/12/02/01/02-01-27-439_512.gif"
            alt="Photography"
          />
        </div>
        <p>Short-films, documentaries, branded content, ads & more!</p>
      </>
    ),
    brands: (
      <>
        <h2>Branding is where I shine</h2>
        <div id="preview">
          <img
            src="https://cdn.pixabay.com/animation/2023/02/12/02/01/02-01-27-439_512.gif"
            alt="Brands"
          />
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
    <div id="content">
      <div id="signature-container">
        <img
          className="signature"
          src="/images/signature.png"
          alt="Signature"
        />
      </div>

      <div id="left">
        {["film", "design", "photography", "brands", "me"].map((category) => (
          <h1 id="links" key={category}>
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

      <div id="right">{infoText}</div>

      <footer>
        <p style={{ color: "#595959" }}>
          &copy; Updated in 2025 - portfolio coded by Mateus :)
        </p>
      </footer>
    </div>
  );
}
