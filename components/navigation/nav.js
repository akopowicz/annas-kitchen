"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="flex justify-between items-center p-4 max-w-[1200px] mx-auto">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="w-[45vw] max-w-[200px]"
          priority
        />
      </Link>

      {isMobile ? (
        <Image
          src="/hamburger.svg"
          alt="hamburger"
          width={50}
          height={50}
          className="w-10"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      ) : (
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/recipes?page=1">Przepisy</Link>
          </li>
          <li>
            <Link href="/recipes?page=1&search=kurczak">Kurczak</Link>
          </li>
          <li>
            <Link href="/recipes?page=1&search=obiad">Obiad</Link>
          </li>
          <li>
            <Link href="/recipes?page=1&search=4">Najbardziej polecane</Link>
          </li>
          <li>
            <Link href="/recipes?page=1&search=4">Multicooker</Link>
          </li>
          <li>
            <Link href="/recipes?page=1">Moje ulubione</Link>
          </li>
        </ul>
      )}

      {isOpen && (
        <ul className="flex flex-col gap-4 absolute top-20 right-4 bg-white p-4 z-50">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/recipes?page=1">Przepisy</Link>
          </li>
          <li>
            <Link href="/recipes?page=1&search=kurczak">Kurczak</Link>
          </li>
          <li>
            <Link href="/recipes?page=1&search=obiad">Obiad</Link>
          </li>
          <li>
            <Link href="/recipes?page=1&search=4">Najbardziej pojecane</Link>
          </li>
          <li>
            <Link href="/recipes?page=1&search=4">Multicooker</Link>
          </li>
          <li>
            <Link href="/recipes?page=1">Moje ulubione</Link>
          </li>
        </ul>
      )}
      {/* <Image
        src="/hamburger.svg"
        alt="hamburger"
        width={50}
        height={50}
        className="w-10"
      /> */}
    </nav>
  );
}
