import { useState } from "react";
import { motion } from "framer-motion";

export default function Galeri() {
  const [active, setActive] = useState(null);

  const images = [
    "/image/1.jpg",
    "/image/2.jpg",
    "/image/3.jpg",
    "/image/4.jpg",
    "/image/5.jpg",

  ];

  return (
    <section
      id="galeri"
      className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Galeri Kegiatan
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Dokumentasi kegiatan dan suasana sekolah
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setActive(img)}
            >
              <img
                src={img}
                alt="galeri"
                className="w-full rounded-xl object-cover hover:brightness-75 transition"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {active && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setActive(null)}
          >
            <img
              src={active}
              alt="preview"
              className="max-w-4xl w-full rounded-xl shadow-lg"
            />
          </div>
        )}

      </div>
    </section>
  );
}