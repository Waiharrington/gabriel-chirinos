"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { siteData as data } from "@/data/siteData";

const contact = `mailto:${data.personal.email}?subject=${encodeURIComponent("Colaboración con Gabriel Chirinos")}`;
function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="arrow-icon"
    >
      <path
        d="M5 19 19 5M8 5h11v11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
    </svg>
  );
}
function DirectionArrow({
  direction,
}: {
  direction: "left" | "right" | "down";
}) {
  const transforms = {
    left: "rotate(180 12 12)",
    right: "",
    down: "rotate(90 12 12)",
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="direction-arrow"
      transform={transforms[direction]}
    >
      <path
        d="M4 12h15m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
function ServiceIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    camera: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="m9 7 5 3-5 3z" />
      </>
    ),
    award: (
      <>
        <circle cx="10" cy="8" r="5" />
        <path d="m7 12-1 9 5-3 5 3-1-9m3-8 1 2 2 1-2 2v3l-3-1-2 1" />
      </>
    ),
    package: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 5v9l9 5 9-5V8m-9 5v9" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18m-13 4h2m4 0h2m-8 4h2" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3z" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] ?? paths.camera}
    </svg>
  );
}
function RowArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function Heading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {number} / {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}
export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const gallery = useRef<HTMLDivElement>(null);
  const links = [
    ["Comunidad", "#comunidad-section"],
    ["Servicios", "#servicios-section"],
    ["Run club", "#runclub-section"],
  ];
  function scroll(direction: number) {
    gallery.current?.scrollBy({
      left: direction * gallery.current.clientWidth * 0.8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <>
      <a className="skip-link" href="#main-container">
        Saltar al contenido
      </a>
      <div className="announcement">
        CREADOR DE CONTENIDO. ATLETA. SIEMPRE EN MOVIMIENTO.
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <a
            className="wordmark"
            href="#home"
            aria-label="Gabriel Chirinos, inicio"
          >
            GABRIEL<span>CHIRINOS.</span>
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {links.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="button button-dark header-contact" href="#contact">
              Hablemos <Arrow />
            </a>
            <button
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? "Cerrar −" : "Menú +"}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav shell"
          aria-label="Navegación móvil"
          hidden={!open}
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <Arrow />
            </a>
          ))}
        </nav>
      </header>
      <main id="main-container">
        <section id="home" className="hero">
          <Image
            className="hero-image"
            src="/photos/hero-banner.png"
            alt="Gabriel Chirinos celebrando una carrera con su medalla"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="shell hero-content">
            <p className="eyebrow">VENEZUELA / CREADOR & ATLETA</p>
            <h1>
              CONECTO MARCAS
              <br />
              CON PERSONAS<span>EN MOVIMIENTO.</span>
            </h1>
            <p className="hero-description">{data.personal.description}</p>
            <div className="button-row">
              <a className="button button-light" href="#contact">
                Trabajemos juntos <Arrow />
              </a>
            </div>
          </div>
          <div className="shell hero-bottom">
            <span>FITNESS / RUNNING / LIFESTYLE</span>
            <a href="#stats-section">
              CONOCE MI MUNDO <DirectionArrow direction="down" />
            </a>
          </div>
        </section>
        <section
          id="stats-section"
          className="shell stats-section"
          aria-label="Estadísticas de la comunidad"
        >
          <div className="stats-grid">
            {data.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="data-note">
            Alcance y crecimiento en redes durante los últimos 30 días.
          </p>
        </section>
        <section id="nichos-section" className="shell section">
          <div className="territory-heading">
            <Heading
              number="01"
              label="Territorios"
              title="DONDE LA PASIÓN CONECTA."
            />
            <p>
              Seis formas de contar historias
              <br />
              que hacen que una marca se sienta.
            </p>
          </div>
          <div className="niche-grid">
            {data.niches.map((niche, i) => {
              const image =
                i === 0
                  ? "/photos/fitness-running.jpg"
                  : data.community.videos[[1, 3, 0, 2, 1, 4][i]].image;
              return (
                <article className={`niche niche-${i + 1}`} key={niche.label}>
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 600px) 88vw, (max-width: 900px) 45vw, 33vw"
                  />
                  <span className="niche-shade" />
                  <span className="niche-topline">
                    <span>0{i + 1}</span>
                    <Arrow />
                  </span>
                  <h3>{niche.label.replace("\n", " ")}</h3>
                </article>
              );
            })}
          </div>
        </section>
        <section id="comunidad-section" className="section community-section">
          <div className="shell">
            <div className="community-intro">
              <div>
                <Heading
                  number="02"
                  label="Personas, no solo números"
                  title="UNA COMUNIDAD REAL."
                />
                <p className="body-copy">{data.community.description}</p>
              </div>
              <div className="audience">
                <p className="eyebrow">AUDIENCIA PRINCIPAL</p>
                <strong>{data.community.ageRange}</strong>
                <div className="audience-bar" aria-hidden="true">
                  <span
                    style={{ width: `${data.community.gender[0].percentage}%` }}
                  />
                </div>
                <div className="audience-labels">
                  {data.community.gender.map((g) => (
                    <span key={g.type}>
                      <b>{g.percentage}%</b> {g.type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="story-grid">
              {data.community.videos.map((video, i) => (
                <article className="story" key={video.image}>
                  <div className="story-image">
                    <Image
                      src={video.image}
                      alt={`Gabriel Chirinos: ${video.title.replaceAll("\n", " ")}`}
                      fill
                      sizes="(max-width: 600px) 75vw, (max-width: 900px) 180px, 20vw"
                    />
                    <span className="story-number">0{i + 1}</span>
                    <div className="story-caption">
                      <h3>{video.title.replaceAll("\n", " ")}</h3>
                      <span>{video.views} visualizaciones</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a
              className="text-link"
              href={data.socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver contenido en Instagram <Arrow />
            </a>
          </div>
        </section>
        <section id="servicios-section" className="section services-section">
          <div className="shell services-layout">
            <div className="services-intro">
              <p className="eyebrow">03 / COLABORACIONES</p>
              <h2>
                TU MARCA,
                <br />
                MÁS LEJOS.
              </h2>
              <p className="body-copy">
                Estrategia, creatividad y comunidad para llevar tu marca al
                siguiente nivel.
              </p>
              <p className="services-promise">
                Trabajemos juntos para crear contenido auténtico, relevante y
                con impacto real.
              </p>
              <a className="button button-dark" href={contact}>
                Hablemos <Arrow />
              </a>
            </div>
            <div className="service-list">
              {data.services.map((service) => (
                <a
                  className="service"
                  key={service.title}
                  href={`mailto:${data.personal.email}?subject=${encodeURIComponent(`Colaboración: ${service.title}`)}`}
                >
                  <span className="service-icon">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <span className="service-copy">
                    <strong>{service.title}</strong>
                    <span>{service.description}</span>
                  </span>
                  <RowArrow />
                </a>
              ))}
            </div>
            <aside className="services-aside">
              <p>
                MARCAS REALES.
                <br />
                PERSONAS REALES.
                <br />
                RESULTADOS REALES.
              </p>
              <span aria-hidden="true" />
              <p>
                MÁS QUE PUBLICIDAD.
                <br />
                ES UNA CONEXIÓN REAL.
              </p>
            </aside>
          </div>
        </section>
        <section id="runclub-section" className="section runclub-section">
          <div className="shell">
            <div className="split-heading">
              <div>
                <Heading
                  number="04"
                  label="Comunidad & disciplina"
                  title="LA VUELTA RUN CLUB."
                />
                <p className="body-copy">{data.runClub.description}</p>
              </div>
              <div className="gallery-controls">
                <button
                  onClick={() => scroll(-1)}
                  aria-label="Ver fotos anteriores"
                >
                  <DirectionArrow direction="left" />
                </button>
                <button onClick={() => scroll(1)} aria-label="Ver más fotos">
                  <DirectionArrow direction="right" />
                </button>
              </div>
            </div>
            <div
              className="run-gallery"
              ref={gallery}
              tabIndex={0}
              role="region"
              aria-label="Galería de La Vuelta Run Club"
            >
              {data.runClub.images.map((src, i) => (
                <figure key={src}>
                  <div className="run-image">
                    <Image
                      src={src}
                      alt={`Entrenamiento y comunidad de La Vuelta Run Club, foto ${i + 1}`}
                      fill
                      sizes="(max-width: 600px) 80vw, 40vw"
                    />
                  </div>
                  <figcaption>
                    <span>LA VUELTA / EN MOVIMIENTO</span>
                    <span>0{i + 1}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section id="marcas-section" className="shell section brands-section">
          <Heading
            number="05"
            label="Conexiones"
            title="MARCAS EN EL CAMINO."
          />
          <div className="brand-grid">
            {data.brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </section>
        <section id="testimonios-section" className="shell references-section">
          <p className="eyebrow">06 / EXPERIENCIAS DE COLABORACIÓN</p>
          <div>
            <h2>CADA PROYECTO TIENE UNA HISTORIA.</h2>
            <p className="body-copy">
              ¿Quieres conocer más sobre mi trabajo? Hablemos de tu marca y de
              lo que podemos crear juntos.
            </p>
            <a className="text-link" href={contact}>
              Conversemos sobre tu proyecto <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer id="contact" className="contact-section">
        <div className="shell">
          <p className="eyebrow">EL PRÓXIMO MOVIMIENTO ES NUESTRO.</p>
          <div className="contact-grid">
            <h2>
              HAGAMOS ALGO
              <br />
              <span>ÉPICO JUNTOS.</span>
            </h2>
            <div>
              <p>
                Si tu marca busca impacto real, conexión auténtica y resultados
                medibles, estoy listo para sumarme a tu próximo proyecto.
              </p>
              <div className="button-row">
                <a className="button button-light" href={contact}>
                  Hablemos <Arrow />
                </a>
              </div>
            </div>
          </div>
          <a className="contact-email" href={contact}>
            {data.personal.email} <Arrow />
          </a>
          <div className="footer-bottom">
            <a className="wordmark" href="#home">
              GABRIEL<span>CHIRINOS.</span>
            </a>
            <div className="social-links">
              {data.socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.platform} <Arrow />
                </a>
              ))}
            </div>
            <p>
              © {new Date().getFullYear()} Gabriel Chirinos.
              <br />
              {data.personal.location} / Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
