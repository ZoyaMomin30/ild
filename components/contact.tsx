"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, PhoneOutgoing } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function Contact() {

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: "",
    email: "",
    message: "",
  },
})


async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    if (res.ok) {
      alert("I've received the email and I'll reply to you Shortly :)")
      form.reset()
    } else {
      alert("Something went wrong. Try again.")
    }
  } catch (error) {
    console.error(error)
    alert("Something went wrong. Try again.")
  }
}

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 bg-muted/30 " ref={ref}>
      <div className="container space-y-12 ">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto">
            Ready to discuss your project? Contact us today.
          </p>
        </motion.div>

        <div className="flex justify-center "> 

        <div className="space-y-4 w-[500px]">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

                      {/* Full Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <div className="relative w-full pt-5 group">
                              <input
                                {...field}
                                required
                                type="text"
                                className="peer w-full px-2 pt-5 pb-2 text-base text-[#23242a] bg-transparent border-none outline-none z-10 relative"
                              />
                              <span className="absolute left-0 px-2 pt-5 pb-2 text-base text-black transition-all duration-300 pointer-events-none 
                                peer-focus:text-primary peer-valid:text-black peer-focus:-translate-y-8 peer-valid:-translate-y-8 
                                peer-focus:text-sm peer-valid:text-sm">
                                Full Name
                              </span>
                              <i className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded transition-all duration-300 z-0 
                                peer-focus:h-11 peer-valid:h-11"></i>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <div className="relative w-full pt-5 group">
                              <input
                                {...field}
                                required
                                type="email"
                                className="peer w-full px-2 pt-5 pb-2 text-base text-[#23242a] bg-transparent border-none outline-none z-10 relative"
                              />
                              <span className="absolute left-0 px-2 pt-5 pb-2 text-base text-black transition-all duration-300 pointer-events-none 
                                peer-focus:text-primary peer-valid:text-black peer-focus:-translate-y-8 peer-valid:-translate-y-8 
                                peer-focus:text-sm peer-valid:text-sm">
                                Email
                              </span>
                              <i className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded transition-all duration-300 z-0 
                                peer-focus:h-11 peer-valid:h-11"></i>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <div className="relative w-full pt-5 group">
                              <input
                                {...field}
                                required
                                type="text"
                                className="peer w-full px-2 pt-5 pb-2 text-base text-[#23242a] bg-transparent border-none outline-none z-10 relative"
                              />
                              <span className="absolute left-0 px-2 pt-5 pb-2 text-base text-black transition-all duration-300 pointer-events-none 
                                peer-focus:text-primary peer-valid:text-black peer-focus:-translate-y-8 peer-valid:-translate-y-8 
                                peer-focus:text-sm peer-valid:text-sm">
                                Email
                              </span>
                              <i className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded transition-all duration-300 z-0 
                                peer-focus:h-11 peer-valid:h-11"></i>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />





                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

        </div>

        
        </div>

              {/* CARDS */}
                  <div className="container space-y-12">
                  <div className="mx-auto pt-5 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                    {[
                      {
                        icon: MapPin,
                        title: "Visit us",
                        description: "Dhanraj Mill Compound,182/A2, Sitaram Jadhav Marg, Lower Parel, Shah and Nahar Industrial Estate, Mumbai-400013, Maharashtra, India ",
                      },
                      {
                        icon: PhoneOutgoing,
                        title: "Call",
                        description: (
                          <div>
                          <h3 className="text-dark-gray">Jameel Ahmed (Proprietor)</h3>
                          <a href="tel:+919820846868" className="text-muted-foreground">+91 98208 46868</a>
                            <br />
                          <a href="tel:+918928475009" className="text-muted-foreground">+91 8928475009</a> 
                          </div>
                        ),
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        description: (
                          <div>
                          <a href="mailto:classicwoodenpunch@gmail.com" className="text-muted-foreground">classicwoodenpunch@gmail.com</a>
                            <br />
                          <a href="mailto:classicwoodenpunch@yahoo.com"className="text-muted-foreground">classicwoodenpunch@yahoo.com</a>
                          </div>
                        ),
                      },
                    ].map((market, index) => (
                      <motion.div
                        key={market.title}
                        initial={{ y: 50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                  <div className="relative w-[260px] h-[274px] mx-auto text-black transition-transform duration-500 cursor-pointer hover:-translate-y-5">
                    {/* Background gradient (glow effect) */}
                    <div className="absolute inset-0 rounded-[1.2em] bg-gradient-to-br from-primary to-primary"></div>

                    <span className="absolute inset-[6px] bg-white z-[2] rounded-[1em] "></span>

                    {/* Content */}
                    <div className="relative z-[10] text-black w-full h-full flex flex-col items-center justify-center px-4 text-center space-y-2">
                      <market.icon className="h-12 w-12 text-primary" />
                      <h3 className="font-extrabold text-[1.3em]">{market.title}</h3>
                      <p className="text-l text-muted-foreground  ">{market.description}</p>
                    </div>


                  </div>

                  
                      </motion.div>
                    ))}
                  </div>


                </div>
      </div>

      
    </section>
  )
}