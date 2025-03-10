"use client"; // Permite manipulação de estado no Next.js

import { useState } from "react";
import "./categoria.css";
import Link from "next/link"; // Usar Link do Next.js para navegação otimizada

export default function CategoriaLayout({ children }) {
  return (
    <div>
      <header id="header">
        <nav id="nav">
          <button id="menu-toggle">☰</button>
          <div id="nav-links">
            <link href="/">Home</link>
            <link className="selected" href="#">
              Film
            </link>
            <link href="/design">Design</link>
            <link href="/photo">Photography</link>
            <link href="/brands">Brands</link>
            <link href="/myself">Myself</link>
          </div>
        </nav>
        <h1>Film</h1>
        <p>Short-films, VideoClips, Documentaries, Ads, and more!</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
