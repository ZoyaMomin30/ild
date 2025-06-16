"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Clock, Star } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-muted/30" ref={ref}>
      <div className="container space-y-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Iqra Laser Dies</h2>
          <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto">
            Welcome to the world of precision and expertise, where craftsmanship meets innovation. For half a century,
            IQRA Laser Dies has been at the forefront of excellence in the realm of printing dies.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm">
            <Award className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-bold">50+ Years</h3>
            <p className="text-muted-foreground">Of Excellence</p>
          </div>
          <div className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm">
            <Users className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm">
            <Clock className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-muted-foreground">Support</p>
          </div>
          <div className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm">
            <Star className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-bold">Premium</h3>
            <p className="text-muted-foreground">Quality</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
