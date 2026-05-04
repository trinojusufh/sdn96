export default function Section({ id, title }) {
  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Item {i}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Konten {title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}