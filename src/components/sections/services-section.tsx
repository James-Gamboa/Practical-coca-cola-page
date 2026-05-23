import Image from "next/image";
import Link from "next/link";

import { SERVICES } from "@/lib/constants";

export const ServicesSection = () => {
  return (
    <section id="servicios" className="seccion">
      <div className="container">
        <div className="row">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="columna columna-33 columna-mobile-100"
              data-reveal
            >
              <div className="bloque-servicio">
                <div className="bloque-img-servicio cuadrado-perfecto">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                  />
                </div>
                <div className="bloque-contenido-servicio">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href="#" className="boton boton-blanco">
                    Más Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
