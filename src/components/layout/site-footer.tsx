import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="columna columna-25 columna-mobile-100" data-reveal>
            <Image
              src="/img/logo-blanco.png"
              alt="Logo de Coca Cola"
              width={280}
              height={80}
              className="logo-footer"
            />
            <p>
              Descubre el auténtico sabor de la felicidad con Coca Cola.
              Refrescando momentos desde siempre.
            </p>
          </div>
          <div className="columna columna-25 columna-mobile-100" data-reveal>
            <h3>Explora</h3>
            <ul>
              <li>
                <Link href="#">Productos</Link>
              </li>
              <li>
                <Link href="#">Promociones</Link>
              </li>
              <li>
                <Link href="#">Eventos</Link>
              </li>
            </ul>
          </div>
          <div className="columna columna-25 columna-mobile-100" data-reveal>
            <h3>Contacto</h3>
            <ul>
              <li>Correo: info@cocacola.com</li>
              <li>Teléfono: +506 8983 4521</li>
              <li>Dirección: Col Florida, San José, Costa Rica</li>
            </ul>
          </div>
          <div className="columna columna-25 columna-mobile-100" data-reveal>
            <h3>Síguenos</h3>
            <ul className="redes">
              <li>
                <a
                  href="https://www.facebook.com/CocaCola"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Coca Cola"
                >
                  <Facebook size={30} aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/CocaCola"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter de Coca Cola"
                >
                  <Twitter size={30} aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/CocaCola"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Coca Cola"
                >
                  <Instagram size={30} aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
