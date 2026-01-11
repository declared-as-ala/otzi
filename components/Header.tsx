"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { storeData } from "@/lib/data";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={storeData.profile_image}
            alt="Logo Ötzi Boutique"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-semibold">Ötzi Boutique</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Accueil
          </Link>
          <Link
            href="/shop"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Boutique
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/shop"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Boutique
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  À propos
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

