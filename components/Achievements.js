import { motion } from "framer-motion";
import { Trophy, Medal, Music, Flag } from "lucide-react";

export default function Prestasi() {
  const prestasi = [
    {
      title: "Juara 2 O2SN Cabang Atletik",
      year: "2024",
      level: "Kabupaten",
    },
    {
      title: "Juara Harapan O2SN Cabang Bulu Tangkis",
      year: "2023",
      level: "Kecamatan",
    },
    {
      title: "Juara 3 Lomba Cerdas Cermat",
      year: "2022",
      level: "Kabupaten",
    },
  ];

  const ekskul = [
    {
      name: "Drumband",
      icon: Music,
    },
    {
      name: "Pramuka",
      icon: Flag,
    },
    {
      name: "Olahraga (O2SN)",
      icon: Medal,
    },
  ];

  return (
    <section
      id="prestasi"
      className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Prestasi & Ekstrakurikuler
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Pencapaian dan kegiatan pengembangan siswa
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Prestasi */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Prestasi Sekolah
            </h3>

            <div className="space-y-4">
              {prestasi.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        Tingkat {item.level}
                      </p>
                    </div>

                    <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ekstrakurikuler */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center gap-2">
              <Medal className="w-5 h-5" />
              Ekstrakurikuler
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {ekskul.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow hover:shadow-xl hover:-translate-y-1 transition"
                  >
                    <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 mb-3">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>

                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {item.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Highlight O2SN */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-blue-600 text-white rounded-2xl p-8 text-center shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-2">
            Fokus Prestasi O2SN
          </h3>
          <p className="text-sm text-white/90 max-w-2xl mx-auto">
            Sekolah SD mengembangkan potensi siswa dalam bidang olahraga melalui
            ajang Olimpiade Olahraga Siswa Nasional (O2SN) dengan pembinaan rutin
            dan pelatihan intensif.
          </p>
        </motion.div>

      </div>
    </section>
  );
}