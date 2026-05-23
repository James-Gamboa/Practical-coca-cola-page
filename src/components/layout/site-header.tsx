"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCloseNav = useCallback(() => {
    setIsNavOpen(false);
  }, []);

  const handleToggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);

  return (
    <header>
      <div className="container">
        <Link href="/" aria-label="Ir al inicio">
          <Image
            src="/img/logo.svg"
            alt="Logo de Coca Cola"
            width={100}
            height={40}
            className="logo"
            priority
          />
        </Link>
        <nav className={cn(isNavOpen && "open")} aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleCloseNav}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="hamb"
          aria-label={isNavOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isNavOpen}
          onClick={handleToggleNav}
        >
          {isNavOpen ? (
            <X size={40} aria-hidden />
          ) : (
            <Menu size={40} aria-hidden />
          )}
        </button>
      </div>
    </header>
  );
};
