"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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

export function Connect() {

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


  return (
    <section className="relative overflow-hidden bg-zinc-900 py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Get in <span className="text-violet-400">Touch</span></h2>
          <p className="mb-8 text-gray-400">
            {/* Interested in collaborating or commissioning a piece? Let's create something amazing together. */}
            Get in touch with me regarding any query
          </p>

            <ul className="flex space-x-6 justify-content-center">
              {/* GitHub */}
              <li className="relative group w-12 h-12 bg-black text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#6c18ff] transition">
                <span className="absolute bottom-full mb-4 px-2 py-1 text-xs text-black bg-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GitHub
                </span>
                <a
                  href="https://github.com/zoyamomin30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full "
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-purple-300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.25c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.234 1.84 1.234 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.47-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.48 5.921.43.371.814 1.103.814 2.222v3.293c0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </li>

              {/* LinkedIn */}
              <li className="relative group w-12 h-12 bg-black text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#6c18ff] transition">
                <span className="absolute bottom-full mb-4 px-2 py-1 text-xs text-black bg-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  LinkedIn
                </span>
                <a
                  href="https://linkedin.com/in/zoya-momin-227436291"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 text-purple-300 "
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7c-31.43 0-51.86-21.63-51.86-48.7C2 34.42 22.86 12 55.68 12s51.73 22.42 51.86 48.6c0 27.07-20.3 48.7-51.7 48.7zM447.9 448h-92.4V302.4c0-34.7-12.5-58.4-43.7-58.4-23.8 0-38 16-44.3 31.4-2.3 5.4-2.9 13-2.9 20.6V448h-92.4s1.2-267.3 0-294.1h92.4v41.7c12.3-19 34.3-46.2 83.7-46.2 61.1 0 106.9 39.8 106.9 125.3z" />
                  </svg>
                </a>
              </li>
            </ul>



        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea style={{color:"black"}}placeholder="Tell me about your message..." className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type="submit" className="w-full">
                Send Message
              </Button> */}

              {/*  From Uiverse.io by adamgiebl   */}
              <button type="submit" className="w-full bg-dark-violet" id="contact-button">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>

            </form>
          </Form>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 50 }).map((_, i) => (
            <line key={i} x1={i * 2} y1="0" x2={i * 2} y2="100" stroke="white" strokeWidth="0.1" />
          ))}
        </svg>
      </div>
    </section>
  )
}
