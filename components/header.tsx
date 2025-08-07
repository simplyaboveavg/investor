"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"
import { Menu } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage }: HeaderProps) {
  const isMobile = useIsMobile()

  const navigationLinks = [
    { href: "/market-opportunity", label: "Market", key: "market" },
    { href: "/competitive-landscape", label: "Competition", key: "competition" },
    { href: "/genai", label: "GenAI", key: "genai" },
    { href: "/go-to-market", label: "GTM", key: "gtm" },
    { href: "/traction", label: "Traction", key: "traction" },
  ]

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {navigationLinks.map((link) => (
            <Link key={link.key} href={link.href}>
              <Button 
                variant="ghost" 
                className={`w-full justify-start font-light ${
                  currentPage === link.key 
                    ? "text-black bg-gray-100" 
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="text-xs text-gray-500 uppercase tracking-widest font-light">Pre Seed</div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )

  const DesktopMenu = () => (
    <div className="hidden lg:flex items-center gap-6">
      {navigationLinks.map((link) => (
        <Link key={link.key} href={link.href}>
          <Button 
            variant="ghost" 
            className={`font-light text-xs px-2 ${
              currentPage === link.key 
                ? "text-black" 
                : "text-gray-600 hover:text-black"
            }`}
          >
            {link.label}
          </Button>
        </Link>
      ))}
      <div className="text-xs text-gray-500 uppercase tracking-widest font-light">Pre Seed</div>
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-light tracking-wide text-black">simplyaboveaverage</h1>
          </Link>
          <div className="flex items-center gap-4">
            <DesktopMenu />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
