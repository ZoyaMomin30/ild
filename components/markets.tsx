"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BarChart2, Globe2, LineChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Markets() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="markets" className="bg-muted/50 py-24" ref={ref}>
      <div className="container space-y-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: BarChart2,
              title: "Forex Markets",
              description: "Trade major, minor, and exotic currency pairs with confidence using our precise signals.",
            },
            {
              icon: LineChart,
              title: "Indian Markets",
              description: "Get accurate signals for Nifty, Bank Nifty, and other Indian market instruments.",
            },
            {
              icon: Globe2,
              title: "Global Markets",
              description: "Access signals for commodities, indices, and cryptocurrency markets worldwide.",
            },
          ].map((market, index) => (
            <motion.div
              key={market.title}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 space-y-2">
                  <market.icon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">{market.title}</h3>
                  <p className="text-sm text-muted-foreground">{market.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
