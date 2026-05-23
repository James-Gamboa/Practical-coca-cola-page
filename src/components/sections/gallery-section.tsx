import Image from "next/image";

import { GALLERY_ITEMS } from "@/lib/constants";

export const GallerySection = () => {
  return (
    <section id="galeria">
      <div className="container-fluid">
        <div className="row">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="columna-33 columna-mobile-50"
              data-gallery-item
            >
              <div className="cuadrado-perfecto">
                <Image src={item.image} alt={item.alt} fill sizes="50vw" />
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
