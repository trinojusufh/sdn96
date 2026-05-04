import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Fasilitas() {
  const [activeImage, setActiveImage] = useState(null);

  const fasilitas = [
    {
      name: "Lapangan Sepak Bola",
      image: "/image/fasilitas/bola.jpg",
    },
    {
      name: "Lapangan Badminton",
      image: "/image/fasilitas/badminton.jpg",
    },
    {
      name: "Lapangan Voli",
      image: "/image/fasilitas/voli.jpg",
    },
    {
      name: "Lapangan Takraw",
      image: "/image/fasilitas/takraw.jpg",
    },
    {
      name: "Mushola",
      image: "/image/fasilitas/mushola.jpg",
    },
    {
      name: "Perpustakaan",
      image: "/image/fasilitas/perpus.jpg",
    },
    {
      name: "Toilet",
      image: "/image/fasilitas/toilet.jpg",
    },
    {
      name: "Kantin",
      image: "/image/fasilitas/kantin.jpg",
    },
    {
      name: "Parkir Luas",
      image: "/image/fasilitas/parkir.jpg",
    },
    {
      name: "Ruang Terbuka Hijau",
      image: "/image/fasilitas/hijau.jpg",
    },
  ];

  return (
    <section
      id="fasilitas"
      className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Fasilitas Sekolah
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Sarana dan prasarana untuk mendukung kegiatan belajar
          </p>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {fasilitas.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setActiveImage(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white font-semibold text-center px-2">
                    {item.name}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal Preview */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <div className="max-w-3xl w-full px-4">
              <img
                src={activeImage.image}
                alt={activeImage.name}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-white text-center mt-4">
                {activeImage.name}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}