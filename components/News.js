import { motion } from "framer-motion";

export default function Berita() {
  const berita = [
    {
      title: "Program Makan Bergizi Gratis (MBG) Mulai Diterapkan",
      date: "10 Februari 2025",
      category: "Info",
      image: "/image/mbg.jpg",
      desc: "Program MBG bertujuan meningkatkan gizi siswa agar lebih fokus dan sehat dalam belajar di sekolah.",
      featured: true,
    },
    {
      title: "Kegiatan Pramuka Mingguan Berjalan Lancar",
      date: "05 Februari 2025",
      category: "Kegiatan",
      image: "/image/pramuka.jpg",
    },
    {
      title: "Siswa SDN 096 Raih Juara O2SN Tingkat Kecamatan",
      date: "01 Februari 2025",
      category: "Prestasi",
      image: "/image/o2sn.jpg",
    },
    {
      title: "Gotong Royong Lingkungan Sekolah",
      date: "28 Januari 2025",
      category: "Kegiatan",
      image: "/image/gotong.jpg",
    },
  ];

  const featured = berita.find((b) => b.featured);
  const others = berita.filter((b) => !b.featured);

  return (
    <section
      id="berita"
      className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Berita & Informasi
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Update terbaru seputar kegiatan dan informasi sekolah
          </p>
        </div>

        {/* Featured */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover"
            />

            <div className="p-6 flex flex-col justify-center">
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full w-fit mb-3">
                {featured.category}
              </span>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {featured.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {featured.date}
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {featured.desc}
              </p>

              <button className="w-fit px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                Baca Selengkapnya
              </button>
            </div>
          </motion.div>
        )}

        {/* Grid berita */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {others.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                  {item.category}
                </span>

                <h3 className="text-sm font-semibold mt-2 text-gray-800 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}