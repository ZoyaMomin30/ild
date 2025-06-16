"use client"

import Link from "next/link"
import { TrendingUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span className="font-semibold">Iqra Laser Dies</span>
        </div>
        <p className="text-sm text-muted-foreground">© 2024 Iqra Laser Dies. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Terms
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
