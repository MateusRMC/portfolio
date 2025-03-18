"use client";

import Link from "next/link";
import Image from "next/image";
import "./styles/home.css";

export default function Home() {
  return (
    <div className="Links">
      <h1>
        <Link href="/">Home</Link>
      </h1>
      <h1>
        <Link href="/film">Film</Link>
      </h1>
      <h1>
        <Link href="/design">Design</Link>
      </h1>
      <h1>
        <Link href="/photo">Photo</Link>
      </h1>
      <h1>
        <Link href="/brands">Brands</Link>
      </h1>
      <h1>
        <Link href="/about">About</Link>
      </h1>
    </div>
  );
}
