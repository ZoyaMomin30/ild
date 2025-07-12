"use client"

import Link from "next/link"
import { TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Iqra Laser Dies</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#products" className="transition-colors hover:text-primary">
            Products
          </Link>
          {/* <Link href="#markets" className="transition-colors hover:text-primary">
            Markets
          </Link> */}
          <Link href="#contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}
