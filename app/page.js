"use client";

import { useState } from "react";
import Link from "next/link";
import "./styles/home.css";
import Background3D from "./3Dcomponents/3Dbubble.js";

export default function Home() {
  const [background, setBackground] = useState("");

  const backgrounds = {
    film: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2FmNnhpcGt1d3h2OGhxZmZoYXdzd202MWVzOW9vZzV6cDM2emV4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26DOMQa5Ib2SmaRZm/giphy.gif",
    design:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZ1bWF3OW1wdXAwMXlkNXM2dWNxbjF6YjYyanR4M3RmeXNhaDVmNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hS3ESVXKy595K/giphy.gif",
    photo:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFidDZkZWhweHZ0dXdrdGFocjZoMTRnNXFtY285YjczanY1Z2Y2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ma0X1M9lQB4FruMaX3/giphy.gif",
    brands: "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif",
    about: "https://media.giphy.com/media/3o7btXJQm5DD8kJqXS/giphy.gif",
  };

  return (
    <div
      className="Hero"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Background3D /> {/* Correção na chamada do componente */}
      <div className="Links">
        <h1>
          <Link
            href="/film"
            onMouseEnter={() => setBackground(backgrounds.film)}
            onMouseLeave={() => setBackground("")}
          >
            Film
          </Link>
        </h1>
        <h1>
          <Link
            href="/design"
            onMouseEnter={() => setBackground(backgrounds.design)}
            onMouseLeave={() => setBackground("")}
          >
            Design
          </Link>
        </h1>
        <h1>
          <Link
            href="/photo"
            onMouseEnter={() => setBackground(backgrounds.photo)}
            onMouseLeave={() => setBackground("")}
          >
            Photo
          </Link>
        </h1>
        <h1>
          <Link
            href="/brands"
            onMouseEnter={() => setBackground(backgrounds.brands)}
            onMouseLeave={() => setBackground("")}
          >
            Brands
          </Link>
        </h1>
        <h1>
          <Link
            href="/about"
            onMouseEnter={() => setBackground(backgrounds.about)}
            onMouseLeave={() => setBackground("")}
          >
            About
          </Link>
        </h1>
      </div>
    </div>
  );
}
