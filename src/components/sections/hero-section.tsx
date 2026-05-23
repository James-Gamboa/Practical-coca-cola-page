import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="inicio">
      <Image
        src="/img/bannerprincipal.jpg"
        alt="Imagen principal de Coca Cola"
        width={1920}
        height={900}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
      <div className="bloque-inicio" data-reveal>
        <h1>Bienvenidos a Coca Cola</h1>
        <p>
          Descubre la auténtica experiencia de sabor con Coca Cola. ¡Refresca tu
          día!
        </p>
        <Link href="#nosotros" className="boton boton-rojo">
          Conoce más
        </Link>
      </div>
    </section>
  );
};
