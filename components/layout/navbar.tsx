'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu"
import { Button } from "../ui/button"

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    routeList.forEach(({ href }) => {
      const section = document.querySelector(href)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      routeList.forEach(({ href }) => {
        const section = document.querySelector(href)
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gradient-to-r from-black/80 via-[#1e3a8a]/80 to-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl flex items-center">
          <Image src="/bigfxlogo.jpg" alt="Logo" width={40} height={40} className="mr-2 rounded-full" />
          <span className="text-white">BIG FX</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-center flex-grow">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {routeList.map(({ href, label }) => (
                <NavigationMenuItem key={href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      className={`text-lg transition-all rounded-full ${activeSection === href.slice(1) ? "bg-[#4a8eff] text-white scale-105" : "text-white hover:bg-[#4a8eff]"}`}
                      onClick={() => handleScrollToSection(href.slice(1))}
                    >
                      {label}
                    </Button>
                  </motion.div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden lg:block">
          <Button className="bg-[#2b5ba8] hover:bg-[#4a8eff] text-white rounded-full">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white">
              <SheetHeader>
                <SheetTitle className="text-white flex items-center">
                  <Image src="/bigfxlogo.jpg" alt="Logo" width={40} height={40} className="mr-2 rounded-full" />
                  BIG FX
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {routeList.map(({ href, label }) => (
                  <Link key={href} href={href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-white text-lg transition-all rounded-full ${activeSection === href.slice(1) ? "bg-[#4a8eff] text-white scale-105" : "hover:bg-[#4a8eff]"}`}
                      >
                        {label}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-4">
                <Button className="w-full bg-[#2b5ba8] hover:bg-[#4a8eff] text-white rounded-full">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
