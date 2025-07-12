// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef, useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// const products = [
//   {
//     id: 1,
//     name: "Precision Cutting Dies",
//     description: "High-precision laser cutting dies for various materials",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 2,
//     name: "Embossing Dies",
//     description: "Professional embossing dies for premium finishing",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 3,
//     name: "Perforating Dies",
//     description: "Accurate perforating dies for clean tear lines",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 4,
//     name: "Custom Dies",
//     description: "Tailored solutions for unique requirements",
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ]

// export function Products() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % products.length)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
//   }

//   return (
//     <section id="products" className="py-24" ref={ref}>
//       <div className="container space-y-12">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center space-y-4"
//         >
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
//           <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto">
//             Discover our comprehensive range of precision-engineered laser dies
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="relative"
//         >
//           <div className="overflow-hidden rounded-lg">
//             <div
//               className="flex transition-transform duration-300 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {products.map((product) => (
//                 <div key={product.id} className="w-full flex-shrink-0">
//                   <Card className="mx-4">
//                     <CardContent className="p-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//                         <div className="space-y-4">
//                           <h3 className="text-2xl font-bold">{product.name}</h3>
//                           <p className="text-muted-foreground">{product.description}</p>
//                         </div>
//                         <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
//                           <img
//                             src={product.image || "/placeholder.svg"}
//                             alt={product.name}
//                             className="w-full h-full object-cover rounded-lg"
//                           />
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
//             onClick={prevSlide}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>

//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
//             onClick={nextSlide}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"


 const images = [
    {
      src: "/corrugated_box.png",
      alt: "corrugated box",
      title: "Corrugated Box",
    },
    {
      src: "/sticker_die.png",
      alt: "Sticker Die",
      title: "Sticker Die",
    },
    {
      src: "/wooden_die.jpeg ",
      alt: "Wooden Die",
      title: "Wooden Die",
    },
    {
      src: "/carton-die.png",
      alt: "Carton Die",
      title: "Carton Die",
    },
    {
      src: "/puzzle_die.jpg",
      alt: "Carton Die",
      title: "Puzzle Die",
    },
    // {
    //   src: "/carton-die.png",
    //   alt: "Carton Die",
    //   title: "Carton Die",
    // },
    // {
    //   src: "/carton-die.png",
    //   alt: "Carton Die",
    //   title: "Carton Die",
    // },
    // {
    //   src: "/carton-die.png",
    //   alt: "Carton Die",
    //   title: "Carton Die",
    // },
  ]

export function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="products" className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Products
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

