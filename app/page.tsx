"use client";
import { useState } from "react";

export default function PremoldeadosArizona() {
  const products = [
    {
      title: "Placas y Tapiales",
      image: "/images/tapial.jpeg",
      description:
        "Fabricación e instalación de placas premoldeadas resistentes y duraderas.",
    },
    {
      title: "Atérmicos para pileta",
      image: "/images/termico.png",
      description: "Soluciones atérmicas modernas para exteriores y piscinas.",
    },
    {
      title: "Baldosas",
      image: "/images/baldosas.png",
      description:
        "Baldosas de cemento resistentes para patios, veredas y espacios exteriores.",
    },
    {
      title: "Ladrillos Block",
      image: "/images/block.png",
      description: "Bloques de cemento de excelente calidad para construcción.",
    },
    {
      title: "Bebederos para campo",
      image: "/images/ebedero.png",
      description:
        "Bebederos resistentes y funcionales para uso rural y ganadero.",
    },
  ];

  const gallery = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    ,
  ];
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    producto: "",
    mensaje: "",
  });

  const enviarWhatsApp = (e: any) => {
    e.preventDefault();

    const texto = `
*Nueva consulta desde la web*

Nombre: ${form.nombre}
Telefono: ${form.telefono}
Producto: ${form.producto}

Mensaje:
${form.mensaje}
`;

    const url = `https://wa.me/5492658410730?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };
  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-sans">
      <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur-xl border-b border-orange-500/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full"></div>

              <img
                src="/images/logo-escudo.png"
                alt="Premoldeados Arizona"
                className="relative h-16 w-16 md:h-20 md:w-20 object-contain rounded-full border-2 border-orange-500/40 shadow-2xl bg-[#111827] p-1"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
                PREMOLDEADOS <span className="text-orange-500">ARIZONA</span>
              </h1>

              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>

                <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
                  Arizona, San Luis · Fabricación e instalación
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/5492658410730"
            target="_blank"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300 px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-white shadow-2xl border border-orange-400/30"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,6,23,0.45), rgba(2,6,23,0.60)), url('/images/hero1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl px-6">
          <div className="inline-block mb-6 bg-orange-500/20 border border-orange-500 px-5 py-2 rounded-full text-orange-300 font-semibold">
            Fabricación e instalación de premoldeados en todo el país.
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Calidad y resistencia para cada obra
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Especialistas en placas de cemento, tapiales, atérmicos para pileta,
            baldosas, ladrillos block y bebederos para campo.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/5492658410730"
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
            >
              Solicitar presupuesto
            </a>

            <a
              href="#productos"
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-bold text-lg"
            >
              Ver productos
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#1f2937] p-8 rounded-3xl shadow-xl border border-orange-500/10">
            <h3 className="text-5xl font-black text-orange-500 mb-4">100%</h3>
            <p className="text-gray-300 text-lg">Fabricación propia</p>
          </div>

          <div className="bg-[#1f2937] p-8 rounded-3xl shadow-xl border border-orange-500/10">
            <h3 className="text-5xl font-black text-orange-500 mb-4">Alta</h3>
            <p className="text-gray-300 text-lg">Resistencia y durabilidad</p>
          </div>

          <div className="bg-[#1f2937] p-8 rounded-3xl shadow-xl border border-orange-500/10">
            <h3 className="text-5xl font-black text-orange-500 mb-4">Full</h3>
            <p className="text-gray-300 text-lg">Instalación completa</p>
          </div>
        </div>
      </section>

      <section id="productos" className="py-28 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-5">
              Nuestros <span className="text-orange-500">Productos</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Fabricamos productos premoldeados de cemento para obras,
              viviendas, campos y espacios exteriores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-white/5 hover:scale-[1.02] transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-black mb-4 text-orange-400">
                    {product.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <a
                    href="https://wa.me/5492658410730"
                    target="_blank"
                    className="inline-block bg-orange-500 hover:bg-orange-600 transition px-5 py-3 rounded-full font-semibold"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-5">
              Trabajos <span className="text-orange-500">Realizados</span>
            </h2>

            <p className="text-gray-400 text-lg">
              Algunas imágenes de instalaciones y productos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src={image}
                  alt="Galería"
                  className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-r from-orange-500 to-orange-600 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-8 text-white">
            ¿Necesitás un presupuesto?
          </h2>

          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contactanos y te asesoramos para tu proyecto.
          </p>

          <a
            href="https://wa.me/5492658410730"
            target="_blank"
            className="bg-[#0f172a] hover:bg-black transition px-10 py-5 rounded-full font-black text-xl inline-block shadow-2xl"
          >
            +54 9 2658 41-0730
          </a>
        </div>
      </section>

      <section className="py-28 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-5">Contacto</h2>

            <p className="text-gray-400 text-lg">
              Envianos tu consulta y te responderemos a la brevedad.
            </p>
          </div>

          <form
            onSubmit={enviarWhatsApp}
            className="grid gap-6 bg-[#111827] p-10 rounded-3xl shadow-2xl border border-white/5"
          >
            <input
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              required
            />

            <input
              type="text"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
            />

            <select
              value={form.producto}
              onChange={(e) => setForm({ ...form, producto: e.target.value })}
              className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-orange-500 text-gray-300"
              required
            >
              <option value="">Seleccionar producto</option>
              <option>Placas y Tapiales</option>
              <option>Atérmicos para pileta</option>
              <option>Baldosas</option>
              <option>Ladrillos block</option>
              <option>Bebederos para campo</option>
            </select>

            <textarea
              rows={5}
              placeholder="Mensaje"
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl font-black text-lg"
            >
              Enviar consulta por WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">
              PREMOLDEADOS <span className="text-orange-500">ARIZONA</span>
            </h3>

            <p className="text-gray-400 mt-2">
              Arizona, San Luis · Fabricación e instalación de premoldeados.
            </p>
          </div>

          <a
            href="https://wa.me/5492658410730"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-bold"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}
