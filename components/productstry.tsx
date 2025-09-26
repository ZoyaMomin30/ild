"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// For Swiper v10+ → "swiper/modules", for v9 → "swiper"
import { Navigation, Pagination } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import { toast } from "react-hot-toast"; // install with: npm install react-hot-toast

export function Producttry() {
  type Product = {
  src: string;
  alt: string;
  title: string;
  desc: string;
};

const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const quantity = (form.elements.namedItem("quantity") as HTMLInputElement).value;

  const res = await fetch("./../app/api/send-quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      quantity,
      product: selectedProduct?.title,
    }),
  });

  if (res.ok) {
    toast.success("✅ Email sent! We’ll get back to you soon.");
    setSelectedProduct(null); // close modal
  } else {
    toast.error("❌ Failed to send email. Try again.");
  }
}

const products = [
  {
    src: "/corrugated_box.png",
    alt: "corrugated box",
    title: "Corrugated Box",
    desc: "Durable packaging solution for shipping and storage.",
  },
  {
    src: "/sticker_die.png",
    alt: "Sticker Die",
    title: "Sticker Die",
    desc: "Customizable stickers with precision cutting.",
  },
    {
    src: "/stickerDie.png",
    alt: "Sticker Die",
    title: "Sticker Die",
    desc: "Customizable stickers with precision cutting.",
  },
  {
    src: "/wooden_die.png",
    alt: "Wooden Die",
    title: "Wooden Die",
    desc: "High-quality wooden die for packaging and printing.",
  },
  {
    src: "/puzzle_die.png",
    alt: "Puzzle Die",
    title: "Puzzle Die",
    desc: "Innovative dies designed for puzzles and custom shapes.",
  },
    {
    src: "/leather-cutting.png",
    alt: "Leather Cutting Die",
    title: "Leather Cutting Die",
    desc: "Another die for leather cutting",
  },
    {
    src: "/shoe-leather.png",
    alt: "Shoe Leather Die",
    title: "Shoe Leather Die",
    desc: "Precise cutting of leather based shoe soles",
  },
];



  return (
    <section id="products" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-5xl text-primary font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Products
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }, // 👈 increase here
            1280: { slidesPerView: 4 }, // 👈 extra for widescreens
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="mx-auto flex h-[480px] w-[260px] flex-col rounded-lg border border-gray-200 bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl sm:w-[280px] md:w-[300px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Image (taller rectangular) */}
                <div className="h-72 w-full overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">{product.desc}</p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-auto inline-flex items-center justify-center gap-1 rounded bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-yellow-700"
                  >
                    Get Quote
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            {/* Product Info */}
            <div className="mb-4 flex items-center gap-4">
              <img
                src={selectedProduct.src}
                alt={selectedProduct.alt}
                className="h-20 w-20 rounded object-cover"
              />
              <h3 className="text-lg font-semibold">{selectedProduct.title}</h3>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <p className="text-sm text-gray-600">
                We will get back to you very soon.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="rounded border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}


// this one works just as fine without the modal 

// "use client";

// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// // For Swiper v10+ → "swiper/modules", for v9 → "swiper"
// import { Navigation, Pagination } from "swiper/modules";

// // @ts-ignore
// import "swiper/css";
// // @ts-ignore
// import "swiper/css/navigation";
// // @ts-ignore
// import "swiper/css/pagination";

// const products = [
//   {
//     src: "/corrugated_box.png",
//     alt: "corrugated box",
//     title: "Corrugated Box",
//     desc: "Durable packaging solution for shipping and storage.",
//   },
//   {
//     src: "/sticker_die.png",
//     alt: "Sticker Die",
//     title: "Sticker Die",
//     desc: "Customizable stickers with precision cutting.",
//   },
//   {
//     src: "/wooden_die.jpeg",
//     alt: "Wooden Die",
//     title: "Wooden Die",
//     desc: "High-quality wooden die for packaging and printing.",
//   },
//   {
//     src: "/carton-die.png",
//     alt: "Carton Die",
//     title: "Carton Die",
//     desc: "Perfect for carton shaping and precision cutting.",
//   },
//   {
//     src: "/puzzle_die.jpg",
//     alt: "Puzzle Die",
//     title: "Puzzle Die",
//     desc: "Innovative dies designed for puzzles and custom shapes.",
//   },
// ];

// export  function Producttry() {
//   return (
//     <section id="products" className="relative py-20">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           Our Products
//         </motion.h2>

//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={24}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {products.map((product, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 className="h-full rounded-lg border border-gray-200 bg-white shadow-md transition hover:shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.15 }}
//               >
//                 {/* Image (Rectangular, bigger height) */}
//                 <div className="h-56 w-full overflow-hidden rounded-t-lg bg-gray-100 sm:h-64 md:h-72">
//                   <img
//                     src={product.src}
//                     alt={product.alt}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                   <a href="#">
//                     <h3 className="mb-2 text-xl font-semibold text-gray-900">
//                       {product.title}
//                     </h3>
//                   </a>
//                   <p className="mb-4 text-sm text-gray-600 md:text-base">
//                     {product.desc}
//                   </p>

//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-1 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
//                   >
//                     Find out more
//                     <span
//                       aria-hidden="true"
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     >
//                       →
//                     </span>
//                   </a>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
