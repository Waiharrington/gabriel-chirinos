export const siteData = {
  personal: {
    name: "GABRIEL CHIRINOS",
    firstName: "Gabriel",
    lastName: "Chirinos",
    monogram: "GC",
    tagline: "Embajador de Marca · Creador de Contenido",
    headline: "Construyo marcas que la gente ama.",
    description:
      "Creador de contenido fitness y running con más de 23K seguidores y 3M de visitas mensuales. Transformo marcas en historias que conectan.",
    location: "Venezuela",
    email: "hello@gabrielchirinos.com",
    whatsapp: "+58 412 123 4567",
    instagram: "@gabrielechirinos",
    tiktok: "@gabrielechirinos",
    youtube: "@gabrielechirinos",
    availability: "DISPONIBLE PARA ALIANZAS",
  },

  categories: ["FITNESS", "RUNNING", "LIFESTYLE"],

  navLinks: [
    { label: "INICIO", href: "#home" },
    { label: "SOBRE MÍ", href: "#about" },
    { label: "TRABAJO", href: "#work" },
    { label: "MARCAS", href: "#brands" },
    { label: "SERVICIOS", href: "#services" },
    { label: "CONTACTO", href: "#contact" },
  ],

  stats: [
    { value: "23.1K", label: "Seguidores", numericValue: 23100 },
    { value: "+3M", label: "Visitas/mes", numericValue: 3000000 },
    { value: "1.75M", label: "Alcance", numericValue: 1750000 },
    { value: "91%", label: "No seguidores", numericValue: 91 },
  ],

  heroImage:
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80&auto=format&fit=crop",
  aboutImage:
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80&auto=format&fit=crop",

  work: [
    {
      id: 1,
      brand: "GYMSHARK",
      type: "COLABORACIÓN",
      title: "Campaña Gymshark",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80&auto=format&fit=crop",
      reach: "1.2M",
      format: "Reels + Stories",
    },
    {
      id: 2,
      brand: "ESN",
      type: "CONTENIDO",
      title: "Día de Fuerza",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80&auto=format&fit=crop",
      reach: "843K",
      format: "Reel",
    },
    {
      id: 3,
      brand: "STRAVA",
      type: "CAMPAÑA",
      title: "Activación Run Club",
      image:
        "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=500&q=80&auto=format&fit=crop",
      reach: "1.1M",
      format: "Reels + Carrusel",
    },
    {
      id: 4,
      brand: "MVMT",
      type: "LIFESTYLE",
      title: "Disciplina Diaria",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80&auto=format&fit=crop",
      reach: "483K",
      format: "Reel + Stories",
    },
    {
      id: 5,
      brand: "LA VUELTA",
      type: "EVENTO",
      title: "La Vuelta 10K",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&q=80&auto=format&fit=crop",
      reach: "672K",
      format: "Reels + Documental",
    },
    {
      id: 6,
      brand: "UGC",
      type: "PAID MEDIA",
      title: "Viajes & Lifestyle",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&auto=format&fit=crop",
      reach: "391K",
      format: "UGC Reels",
    },
  ],

  about: {
    headline: "Creo contenido que mueve, motiva y conecta.",
    text: [
      "Soy Gabriel Chirinos, creador venezolano apasionado por el fitness, correr y vivir con propósito.",
      "Mi contenido se construye alrededor de momentos reales, resultados reales y conexión real.",
    ],
    details: [
      { label: "ORIGEN", value: "Venezuela" },
      { label: "ENFOQUE", value: "Fitness · Running · Lifestyle" },
      { label: "PLATAFORMAS", value: "Instagram · TikTok · YouTube" },
      { label: "IDIOMAS", value: "Español · Inglés" },
    ],
  },

  brands: ["Gymshark", "Strava", "WHOOP", "On Running", "ESN", "MVMT"],

  audience: {
    followers: "23.1K",
    monthlyViews: "+3M",
    accountsReached: "1.75M+",
    demographics: {
      age: [
        { range: "18-24", percentage: 32 },
        { range: "25-34", percentage: 45 },
        { range: "35-44", percentage: 15 },
        { range: "45+", percentage: 8 },
      ],
      gender: [
        { type: "Hombres", percentage: 68 },
        { type: "Mujeres", percentage: 32 },
      ],
      topCountries: ["Venezuela", "Colombia", "México", "España", "USA"],
    },
  },

  services: [
    {
      title: "ALIANZAS DE MARCA",
      description: "Colaboraciones auténticas que conectan con mi audiencia.",
      icon: "handshake",
    },
    {
      title: "EMBAJADORÍA",
      description: "Represento tu marca de forma consistente en todas las plataformas.",
      icon: "star",
    },
    {
      title: "CAMPAÑAS SOCIALES",
      description: "Contenido creativo que genera engagement y conversiones.",
      icon: "megaphone",
    },
    {
      title: "EVENTOS",
      description: "Cobertura en vivo y storytelling para maximizar alcance.",
      icon: "calendar",
    },
  ],

  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/gabrielechirinos" },
    { platform: "TikTok", url: "https://tiktok.com/@gabrielechirinos" },
    { platform: "YouTube", url: "https://youtube.com/@gabrielechirinos" },
  ],

  footer: {
    copyright: "© 2026 Gabriel Chirinos",
    links: [
      { label: "Instagram", href: "https://instagram.com/gabrielechirinos" },
      { label: "TikTok", href: "https://tiktok.com/@gabrielechirinos" },
      { label: "YouTube", href: "https://youtube.com/@gabrielechirinos" },
    ],
  },
};
