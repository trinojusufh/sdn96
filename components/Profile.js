import { motion } from "framer-motion";

export default function Profil() {
  return (
    <section
      id="profil"
      className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Profil Sekolah
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Informasi lengkap mengenai identitas dan visi misi sekolah
          </p>
        </div>

        {/* Grid Utama */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Informasi Sekolah */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-600">
              Informasi Sekolah
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                ["Nama", "SD NEGERI 096/VIII SUMBER AGUNG"],
                ["NPSN", "10503138"],
                ["Alamat", "Jalan Kelapa Sawit"],
                ["Desa", "Sumber Agung"],
                ["Kecamatan", "Rimbo Ilir"],
                ["Kabupaten", "Kabupaten Tebo"],
                ["Provinsi", "Jambi"],
                ["Kode Pos", "37256"],
                ["Status", "Negeri"],
                ["Waktu", "Pagi / 6 Hari"],
                ["Jenjang", "Sekolah Dasar"],
              ].map(([label, value], i) => (
                <div key={i}>
                  <p className="text-gray-400 text-xs">{label}</p>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visi Misi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            
            {/* Visi */}
            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Visi</h3>
              <p className="text-sm leading-relaxed text-white/90">
                Mewujudkan peserta didik yang unggul dalam prestasi, berakhlak mulia,
                berkarakter kuat, serta adaptif terhadap perkembangan teknologi dan peduli lingkungan.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                Misi
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Pembelajaran aktif, kreatif, dan inovatif</li>
                <li>• Penanaman nilai agama & karakter</li>
                <li>• Pengembangan potensi akademik & non-akademik</li>
                <li>• Lingkungan sekolah bersih & sehat</li>
                <li>• Integrasi teknologi dalam pembelajaran</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { title: "Siswa", value: "300+" },
            { title: "Guru", value: "20+" },
            { title: "Kelas", value: "12" },
            { title: "Prestasi", value: "50+" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow hover:shadow-xl hover:-translate-y-1 transition"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
                {item.value}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}