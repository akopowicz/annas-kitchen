"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => {
    const currentPath = pathname;
    const currentParams = new URLSearchParams(searchParams);

    currentParams.delete("page");

    const currentUrl = `${currentPath}${currentParams.toString() ? `?${currentParams.toString()}` : ""}`;

    const targetUrl = new URL(href, window.location.origin);
    const targetParams = new URLSearchParams(targetUrl.search);
    targetParams.delete("page");

    const targetUrlWithoutPage = `${targetUrl.pathname}${targetParams.toString() ? `?${targetParams.toString()}` : ""}`;

    return currentUrl === targetUrlWithoutPage;
  };

  const linkClass = (href: string) =>
    isActive(href) ? "font-bold text-black" : "font-normal text-gray-600";

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
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1"
              className={linkClass("/recipes?page=1")}
            >
              Przepisy
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1&search=kurczak"
              className={linkClass("/recipes?page=1&search=kurczak")}
            >
              Kurczak
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1&search=obiad"
              className={linkClass("/recipes?page=1&search=obiad")}
            >
              Obiad
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1&search=4"
              className={linkClass("/recipes?page=1&search=4")}
            >
              Najbardziej polecane
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1&search=multicooker"
              className={linkClass("/recipes?page=1&search=multicooker")}
            >
              Multicooker
            </Link>
          </li>
          <li>
            <Link
              href="/ulubione?page=1"
              className={linkClass("/ulubione?page=1")}
            >
              Moje ulubione
            </Link>
          </li>
        </ul>
      )}

      {isOpen && (
        <ul className="flex flex-col gap-4 absolute top-20 right-4 bg-white p-4 z-50">
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1"
              className={linkClass("/recipes?page=1")}
            >
              Przepisy
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1&search=kurczak"
              className={linkClass("/recipes?page=1&search=kurczak")}
            >
              Kurczak
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1&search=obiad"
              className={linkClass("/recipes?page=1&search=obiad")}
            >
              Obiad
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1&search=4"
              className={linkClass("/recipes?page=1&search=4")}
            >
              Najbardziej polecane
            </Link>
          </li>
          <li>
            <Link
              href="/recipes?page=1&search=multicooker"
              className={linkClass("/recipes?page=1&search=multicooker")}
            >
              Multicooker
            </Link>
          </li>
          <li>
            <Link
              href="/ulubione?page=1"
              className={linkClass("/ulubione?page=1")}
            >
              Moje ulubione
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
