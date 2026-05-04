import { useState } from "react";

export default function PPDB() {
  const [form, setForm] = useState({
    nama: "",
    nik: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    alamat: "",
    orangtua: "",
    nohp: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama || !form.nik || !form.nohp) {
      alert("Harap lengkapi data wajib!");
      return;
    }

    console.log(form);
    alert("Pendaftaran berhasil dikirim!");
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            PPDB Online
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Pendaftaran Peserta Didik Baru SDN 096
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-5"
        >
          {/* Nama */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Nama Lengkap *
            </label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* NIK */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              NIK *
            </label>
            <input
              type="number"
              name="nik"
              value={form.nik}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* TTL */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300">
                Tempat Lahir
              </label>
              <input
                type="text"
                name="tempat_lahir"
                value={form.tempat_lahir}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300">
                Tanggal Lahir
              </label>
              <input
                type="date"
                name="tanggal_lahir"
                value={form.tanggal_lahir}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700"
              />
            </div>
          </div>

          {/* Alamat */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Alamat
            </label>
            <textarea
              name="alamat"
              value={form.alamat}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
          </div>

          {/* Orang tua */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Nama Orang Tua
            </label>
            <input
              type="text"
              name="orangtua"
              value={form.orangtua}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
          </div>

          {/* No HP */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              No HP / WhatsApp *
            </label>
            <input
              type="text"
              name="nohp"
              value={form.nohp}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
          </div>

          {/* Upload */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Upload KK / Akta
            </label>
            <input
              type="file"
              className="w-full mt-1 text-sm text-gray-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Daftar Sekarang
          </button>
        </form>

      </div>
    </section>
  );
}