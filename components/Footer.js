export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-14 pb-6 mt-20 border-t dark:border-gray-700">
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        {/* Identity */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            SD NEGERI 096/VIII
          </h2>

          <p className="text-sm leading-relaxed mb-4">
            Sumber Agung, Rimbo Ilir, Kabupaten Tebo, Provinsi Jambi.
          </p>

          <div className="text-sm space-y-1">
            <p><span className="font-semibold">NPSN:</span> 10503138</p>
            <p><span className="font-semibold">Status:</span> Negeri</p>
            <p><span className="font-semibold">Jenjang:</span> SD</p>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
            Alamat Lengkap
          </h3>

          <p className="text-sm leading-relaxed">
            Jalan Kelapa Sawit <br />
            Desa Sumber Agung <br />
            Kec. Rimbo Ilir <br />
            Kab. Tebo <br />
            Prov. Jambi
          </p>

          <a
            href="https://www.google.com/maps/place/SD+Negeri+096%2FVIII+Sumber+Agung"
            target="_blank"
            className="inline-block mt-3 text-blue-500 text-sm hover:underline"
          >
            Lihat di Google Maps →
          </a>
        </div>

        {/* Maps */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
            Lokasi Sekolah
          </h3>

          <div className="w-full h-44 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=-1.3908249,102.287638&z=17&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t dark:border-gray-700 pt-4 text-center text-sm">
        © {year} SD Negeri 096/VIII Sumber Agung — All rights reserved
      </div>
    </footer>
  );
}