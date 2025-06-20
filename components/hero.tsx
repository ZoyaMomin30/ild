"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-24">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-sans">
                Make Your Punch{"\n "}
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Iqra Laser Dies
                </span>
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Welcome to the world of precision and expertise, where craftsmanship meets innovation. Half decade of being at forefront of excellence in the realm of printing dies.  
              </p>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8"
            >
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-primary">98%</h4>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-primary">50+</h4>
                <p className="text-sm text-muted-foreground">Punch Types</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-primary">500+</h4>
                <p className="text-sm text-muted-foreground">Happy customers</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl">
            <img src="/logoILD.png"></img>
            </div> */}
            
            <div className="relative z-10 rounded-2xl overflow-hidden" >
            <img src="/logo2.png" className="rounded-2xl w-full h-auto"></img>
            </div> 
          </motion.div>
        </div>
      </div>
    </section>
  )
}
