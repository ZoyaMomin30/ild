"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Clock, Star, CalendarArrowUp, NotebookPen, HandCoins, ListCheck, SquareUser, Microscope, MapPinCheck} from "lucide-react"

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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Us</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12">
              <img
                className="w-full md:w-1/2 h-auto object-cover rounded shadow"
                src="/lasercutting1.png"
                alt="Laser Cutting image"
              />
              <p className="text-xl text-gray-700 max-w-[65rem]">
                Established in 1974, our company has stood the test of time, evolving and thriving in an ever-changing industry. IQRA Laser Dies has been a beacon of quality and reliability, consistently delivering cutting-edge solutions to meet the diverse needs of our esteemed clientele. We understand the integral role that printing dies play in the world of printing and packaging. Our seasoned professionals, combined with state-of-the-art technology, form the backbone of our operations, ensuring that every product that bears the IQRA name is a testament to precision, durability, and innovation. We celebrate the milestones we've achieved, the challenges we've overcome, and the partnerships we've forged. IQRA Laser Dies invites you to explore a world where tradition meets cutting-edge technology, where experience meets innovation, and where your printing needs find a home in the hands of seasoned experts. Welcome to the legacy of IQRA Laser Dies – 50 years of excellence and counting.
              </p>
            </div>


        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-4 gap-6"
        >
          <div className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm">
            <Award className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl text-gray-700 font-bold">50+ Years</h3>
            <p className="text-muted-foreground">Of Excellence</p>
          </div>
          <div className="text-center space-y-4 p-6 bg-background  rounded-lg shadow-sm">
            <Users className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl text-gray-700 font-bold">500+</h3>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm">
            <CalendarArrowUp className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl text-gray-700 font-bold">1974</h3>
            <p className="text-muted-foreground">Year of establishment</p>
          </div>
          <div className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm">
            <NotebookPen className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl text-gray-700 font-bold">01-07-2017</h3>
            <p className="text-muted-foreground">GST registration date</p>
          </div>

          <div className="text-center space-y-4 p-6 bg-background  rounded-lg shadow-sm">
            <ListCheck className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl text-gray-700 font-bold">27AADFI9968A1Z6</h3>
            <p className="text-muted-foreground">GST number</p>
          </div>

          <div className="text-center space-y-4 p-6 bg-background  rounded-lg shadow-sm">
            <SquareUser className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl text-gray-700 font-bold">Jameel Ahmed</h3>
            <p className="text-muted-foreground">Proprietor</p>
          </div>

          <div className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm">
            <Microscope className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl text-gray-700 font-bold">Laser Machine</h3>
            <p className="text-muted-foreground">Technology</p>
          </div>

          <div className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm">
            <MapPinCheck className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl text-gray-700 font-bold">Across India</h3>
            <p className="text-muted-foreground">Delivery</p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
