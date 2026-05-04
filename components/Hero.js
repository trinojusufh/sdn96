import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="beranda"
      className="relative z-0 w-full h-screen flex items-center text-white overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/image/hero.png')",
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold leading-tight mb-4"
        >
          Berprestasi, Berkarakter,
          <br />
          Berwawasan Lingkungan
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm md:text-lg text-gray-200 max-w-xl mb-6"
        >
          Mewujudkan peserta didik yang cerdas, berakhlak mulia, dan peduli
          terhadap lingkungan.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#profil"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition shadow-lg"
          >
            Tentang Kami
          </a>

          <a
            href="#ppdb"
            className="px-6 py-3 bg-white/20 backdrop-blur border border-white/30 hover:bg-white/30 rounded-lg font-semibold transition"
          >
            PPDB Online
          </a>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-6 md:left-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4"
      >
        <p className="text-sm text-gray-200">Siswa Aktif</p>
        <h3 className="text-2xl font-bold">350+</h3>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
}