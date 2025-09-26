import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Markets } from "@/components/markets"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Producttry } from "@/components/productstry"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        {/* <Products /> */}
        <Producttry />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
