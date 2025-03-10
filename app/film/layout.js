"use client"; // Permite manipulação de estado no Next.js

import { useState } from "react";
import "./categoria.css";

export default function CategoriaLayout({ children }) {
  return (
    <div>
      <header id="header">
        <nav id="nav">
          <button id="menu-toggle">☰</button>
          <div id="nav-links">
            <a href="/">Home</a>
            <a className="selected" href="#">
              Film
            </a>
            <a href="/design">Design</a>
            <a href="/photo">Photography</a>
            <a href="/brands">Brands</a>
            <a href="/myself">Myself</a>
          </div>
        </nav>
        <h1>Film</h1>
        <p>Short-films, VideoClips, Documentaries, Ads, and more!</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
