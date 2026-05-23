"use client";

import { useCallback, type FormEvent } from "react";

export const ContactSection = () => {
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nombre = String(formData.get("nombre") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const mensaje = String(formData.get("mensaje") ?? "").trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    alert("Formulario enviado exitosamente.");
    form.reset();
  }, []);

  return (
    <section id="contactenos" className="seccion">
      <iframe
        title="Ubicación de Coca Cola en el mapa"
        width="520"
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15717.864912289773!2d-84.0642845!3d9.9448646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOXTCsDU0JzEwLjIiTiA4NMKwMTQnMTIuMCJF!5e0!3m2!1sen!2sus!4v1647787071395!5m2!1sen!2sus"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="columna columna-41 columna-mobile-100 empujar-58 empujar-mobile-0 sinpadding-mobile">
            <form id="formulario" onSubmit={handleSubmit} data-reveal>
              <div className="form-block">
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre"
                  aria-label="Nombre"
                  required
                />
              </div>
              <div className="form-block">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  required
                />
              </div>
              <div className="form-block">
                <textarea
                  name="mensaje"
                  placeholder="Mensaje"
                  aria-label="Mensaje"
                  required
                />
              </div>
              <div className="form-block bloque-ultimo">
                <input
                  type="submit"
                  className="boton boton-negro"
                  value="Enviar"
                  aria-label="Enviar formulario"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
