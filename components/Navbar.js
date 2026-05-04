import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("beranda");

  const isHome = router.pathname === "/";

  const menus = [
    { name: "Beranda", id: "beranda" },
    { name: "Profil", id: "profil" },
    { name: "Fasilitas", id: "fasilitas" },
    { name: "Galeri", id: "galeri" },
    { name: "Prestasi", id: "prestasi" },
    { name: "Berita", id: "berita" },
  ];

  // scroll behavior (ONLY HOMEPAGE)
  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      menus.forEach((menu) => {
        const section = document.getElementById(menu.id);
        if (section) {
          const offsetTop = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= offsetTop &&
            window.scrollY < offsetTop + height
          ) {
            setActive(menu.id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // reset saat pindah route
  useEffect(() => {
    setOpen(false);
    setActive("");
    window.scrollTo(0, 0);
  }, [router.pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // handle click menu
const handleClick = (id) => {
  if (isHome) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    router.push(`/#${id}`);
  }

  setOpen(false);
};

  return (
    <nav
      className={`fixed w-full z-[9999] transition-all duration-300 
      ${
        scrolled || !isHome
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="/image/logo-re.png"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1
                className={`font-bold text-sm md:text-base ${
                  scrolled || !isHome ? "text-gray-800 dark:text-white" : "text-white"
                }`}
              >
                SDN 096 / VIII
              </h1>
              <p
                className={`text-xs ${
                  scrolled || !isHome
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-200"
                }`}
              >
                Sumber Agung
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => handleClick(menu.id)}
              className={`relative group font-medium transition ${
                active === menu.id && isHome
                  ? "text-blue-500"
                  : scrolled || !isHome
                  ? "text-gray-700 dark:text-gray-200 hover:text-blue-500"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {menu.name} 
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  active === menu.id && isHome
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}

          {/* PPDB */}
          <Link href="/ppdb">
            <span className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold cursor-pointer">
              PPDB Online
            </span>
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Dark Mode */}
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-lg ${
              scrolled || !isHome
                ? "bg-gray-200 dark:bg-gray-700"
                : "bg-white/20 backdrop-blur"
            }`}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Mobile */}
          <button
            className={`md:hidden text-xl ${
              scrolled || !isHome
                ? "text-gray-800 dark:text-white"
                : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 border-t dark:border-gray-700">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => handleClick(menu.id)}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-200"
            >
              {menu.name}
            </button>
          ))}

          <Link href="/ppdb">
            <div
              onClick={() => setOpen(false)}
              className="mt-2 py-2 text-green-600 font-semibold"
            >
              PPDB Online
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}