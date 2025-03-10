"use client"; // Permite manipulação de estado no Next.js

import { useState } from "react";
import "./categoria.css";
import Link from "next/link";

export default function CategoriaLayout({ children }) {
  return (
    <div>
      <header id="header">
        <nav id="nav">
          <button id="menu-toggle">☰</button>
          <div id="nav-links">
            <Link href="/">Home</Link>
            <Link className="selected" href="#">
              Film
            </Link>
            <Link href="/design">Design</Link>
            <Link href="/photo">Photography</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/myself">Myself</Link>
          </div>
        </nav>
        <h1>Film</h1>
        <p>Short-films, VideoClips, Documentaries, Ads, and more!</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
