"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ElementStyle {
  marginTop?: number;
  marginBottom?: number;
  paddingY?: number;
  paddingX?: number;
  maxWidth?: number;
  fontSize?: number;
  letterSpacing?: number;
  textAlign?: "left" | "center" | "right" | "justify";
  borderRadius?: number;
  opacity?: number;
  color?: string;
  translateX?: number;
  translateY?: number;
  scale?: number;
}

export type StyleConfig = Record<string, Partial<ElementStyle>>;
export type TextConfig = Record<string, string>;

interface ElementGroup {
  category: string;
  items: { id: string; label: string }[];
}

export const EDITABLE_GROUPS: ElementGroup[] = [
  {
    category: "🏷️ Header (Navegación)",
    items: [
      { id: "header-logo", label: "Logo 'GABRIEL CHIRINOS'" },
      { id: "header-socials", label: "Redes Sociales (IG, TT, YT)" },
      { id: "header-cta-btn", label: "Botón 'CONTACTO'" },
    ],
  },
  {
    category: "🦸 Hero (Portada Principal)",
    items: [
      { id: "hero-content", label: "Bloque Completo del Hero" },
      { id: "hero-badge", label: "Badge 'CREADOR DE CONTENIDO & ATLETA'" },
      { id: "hero-title", label: "Título 'CONECTO MARCAS CON PERSONAS'" },
      { id: "hero-script", label: "Subtítulo Script 'en movimiento.'" },
      { id: "hero-desc", label: "Párrafo de Descripción" },
      { id: "hero-buttons", label: "Contenedor de Botones CTA" },
      { id: "hero-btn-primary", label: "Botón 'VER MEDIA KIT'" },
      { id: "hero-btn-secondary", label: "Botón 'TRABAJEMOS JUNTOS'" },
    ],
  },
  {
    category: "📊 Estadísticas (Stats)",
    items: [
      { id: "stats-section", label: "Sección Completa de Estadísticas" },
      { id: "stats-card", label: "Tarjeta / Caja Principal de Métricas" },
      { id: "stat-item-0", label: "Métrica 1: 22.885 Seguidores" },
      { id: "stat-item-1", label: "Métrica 2: 3M Visualizaciones" },
      { id: "stat-item-2", label: "Métrica 3: 1.7M Alcance" },
      { id: "stat-item-3", label: "Métrica 4: +676 Nuevos Seguidores" },
    ],
  },
  {
    category: "🎯 Nichos de Contenido",
    items: [
      { id: "nichos-section", label: "Sección Completa de Nichos" },
      { id: "nichos-title", label: "Título 'NICHOS EN LOS QUE CONECTO'" },
      { id: "nichos-grid", label: "Cuadrícula Completa de Nichos" },
      { id: "nicho-card-0", label: "Nicho 1: Fitness & Running" },
      { id: "nicho-card-1", label: "Nicho 2: Deportes & Bienestar" },
      { id: "nicho-card-2", label: "Nicho 3: Ropa & Accesorios" },
      { id: "nicho-card-3", label: "Nicho 4: Suplementos & Nutrición" },
      { id: "nicho-card-4", label: "Nicho 5: Tecnología & Gadgets" },
      { id: "nicho-card-5", label: "Nicho 6: Estilo de Vida & Motivación" },
    ],
  },
  {
    category: "👥 Comunidad y Videos (Reels)",
    items: [
      { id: "comunidad-section", label: "Sección Completa Comunidad" },
      { id: "comunidad-title", label: "Título 'MI COMUNIDAD'" },
      { id: "comunidad-desc", label: "Descripción de Comunidad" },
      { id: "comunidad-card-demo", label: "Tarjeta Demográfica (Audiencia)" },
      { id: "comunidad-demo-age", label: "Texto Edad '18 - 35 AÑOS'" },
      { id: "comunidad-demo-chart", label: "Gráfico Donut (% Género)" },
      { id: "comunidad-videos-grid", label: "Cuadrícula de 5 Videos" },
      { id: "comunidad-video-0", label: "Video 1: 10K (2.1M views)" },
      { id: "comunidad-video-1", label: "Video 2: Mi Rutina de Pierna (1.6M)" },
      { id: "comunidad-video-2", label: "Video 3: 5 Consejos para Correr (952K)" },
      { id: "comunidad-video-3", label: "Video 4: Nunca te rindas (1.2M)" },
      { id: "comunidad-video-4", label: "Video 5: La Vuelta Run Club (870K)" },
    ],
  },
  {
    category: "💼 Servicios para Marcas",
    items: [
      { id: "services", label: "Sección Completa de Servicios" },
      { id: "services-title", label: "Título '¿QUÉ PUEDO HACER...?'" },
      { id: "services-grid", label: "Cuadrícula Completa de Servicios" },
      { id: "service-card-0", label: "Servicio 1: Content Creation" },
      { id: "service-card-1", label: "Servicio 2: Brand Ambassador" },
      { id: "service-card-2", label: "Servicio 3: Product Placement" },
      { id: "service-card-3", label: "Servicio 4: Eventos & Activaciones" },
      { id: "service-card-4", label: "Servicio 5: UGC para Anuncios" },
    ],
  },
  {
    category: "🏃 La Vuelta Run Club",
    items: [
      { id: "runclub-section", label: "Sección Completa Run Club" },
      { id: "runclub-badge", label: "Badge 'COMUNIDAD & DISCIPLINA'" },
      { id: "runclub-title", label: "Título 'LA VUELTA RUN CLUB'" },
      { id: "runclub-desc", label: "Descripción Run Club" },
      { id: "runclub-carousel", label: "Carrusel Completo de Fotos" },
      { id: "runclub-photo-0", label: "Foto 1 del Run Club" },
      { id: "runclub-photo-1", label: "Foto 2 del Run Club" },
      { id: "runclub-photo-2", label: "Foto 3 del Run Club" },
      { id: "runclub-photo-3", label: "Foto 4 del Run Club" },
      { id: "runclub-photo-4", label: "Foto 5 del Run Club" },
      { id: "runclub-photo-5", label: "Foto 6 del Run Club" },
      { id: "runclub-photo-6", label: "Foto 7 del Run Club" },
    ],
  },
  {
    category: "🏷️ Marcas Aliadas",
    items: [
      { id: "marcas-section", label: "Sección Completa de Marcas" },
      { id: "marcas-title", label: "Título 'MARCAS QUE HAN CONFIADO'" },
      { id: "marcas-marquee", label: "Barra Animada de Logos" },
    ],
  },
  {
    category: "⭐ Testimonios",
    items: [
      { id: "testimonios-section", label: "Sección Completa Testimonios" },
      { id: "testimonios-title", label: "Título 'LO QUE DICEN LAS MARCAS'" },
      { id: "testimonios-grid", label: "Cuadrícula de Testimonios" },
      { id: "testimonio-card-0", label: "Testimonio 1: adidas" },
      { id: "testimonio-card-1", label: "Testimonio 2: HOKA" },
      { id: "testimonio-card-2", label: "Testimonio 3: GARMIN" },
    ],
  },
  {
    category: "📬 Footer & Contacto",
    items: [
      { id: "contact", label: "Footer Completo" },
      { id: "footer-card", label: "Tarjeta Banner de Gabriel" },
      { id: "footer-badge", label: "Badge 'TRABAJEMOS EN TU MARCA'" },
      { id: "footer-title", label: "Título 'HAGAMOS ALGO'" },
      { id: "footer-script", label: "Subtítulo Script 'ÉPICO JUNTOS.'" },
      { id: "footer-desc", label: "Descripción del Footer" },
      { id: "footer-buttons", label: "Contenedor de Botones" },
      { id: "footer-btn-primary", label: "Botón 'VER MEDIA KIT'" },
      { id: "footer-btn-secondary", label: "Botón 'HABLEMOS'" },
      { id: "footer-socials", label: "Enlaces de Redes Sociales" },
      { id: "footer-watermark", label: "Logo Watermark 'LA VUELTA'" },
      { id: "footer-copyright", label: "Texto de Copyright" },
    ],
  },
  {
    category: "📦 Estructura Global",
    items: [
      { id: "main-container", label: "Contenedor Principal de la Página" },
    ],
  },
];

const ALL_EDITABLE_IDS = EDITABLE_GROUPS.flatMap((g) => g.items.map((i) => i.id));

// Natural clean default styles without artificial translate3d overlaps
const DEFAULT_STYLES: StyleConfig = {
  "stats-card": { maxWidth: 1040, paddingY: 32, paddingX: 40 },
  "hero-content": { maxWidth: 620 },
};

const STORAGE_KEY_STYLES = "gabriel_chirinos_builder_styles_v1";
const STORAGE_KEY_TEXTS = "gabriel_chirinos_builder_texts_v1";

function applyStylesToDOM(config: StyleConfig, activeId: string, editorOpen: boolean) {
  if (typeof document === "undefined") return;
  let cssRules = "";

  Object.entries(config).forEach(([id, s]) => {
    if (!s) return;
    const selector = `#${id}`;
    const rules: string[] = [];

    // Natural Box Model Spacing (Margin & Padding)
    if (s.marginTop !== undefined && s.marginTop !== 0) rules.push(`margin-top: ${s.marginTop}px !important;`);
    if (s.marginBottom !== undefined && s.marginBottom !== 0) rules.push(`margin-bottom: ${s.marginBottom}px !important;`);
    if (s.paddingY !== undefined) {
      rules.push(`padding-top: ${s.paddingY}px !important;`);
      rules.push(`padding-bottom: ${s.paddingY}px !important;`);
    }
    if (s.paddingX !== undefined) {
      rules.push(`padding-left: ${s.paddingX}px !important;`);
      rules.push(`padding-right: ${s.paddingX}px !important;`);
    }
    if (s.maxWidth !== undefined && s.maxWidth > 0) {
      rules.push(`max-width: ${s.maxWidth}px !important;`);
    }

    // Typography
    if (s.fontSize !== undefined && s.fontSize > 0) rules.push(`font-size: ${s.fontSize}px !important;`);
    if (s.letterSpacing !== undefined && s.letterSpacing !== 0) rules.push(`letter-spacing: ${s.letterSpacing}px !important;`);
    if (s.textAlign !== undefined) rules.push(`text-align: ${s.textAlign} !important;`);
    if (s.color) rules.push(`color: ${s.color} !important;`);

    // Style & Borders
    if (s.borderRadius !== undefined) rules.push(`border-radius: ${s.borderRadius}px !important;`);
    if (s.opacity !== undefined && s.opacity < 100) rules.push(`opacity: ${s.opacity / 100} !important;`);

    // Transforms (only if explicitly nudged)
    const tx = s.translateX || 0;
    const ty = s.translateY || 0;
    const sc = (s.scale || 100) / 100;
    if (tx !== 0 || ty !== 0 || sc !== 1) {
      rules.push(`transform: translate3d(${tx}px, ${ty}px, 0) scale(${sc}) !important;`);
    }

    // Visual highlight when editor is open and element is active
    if (editorOpen && id === activeId) {
      rules.push(`outline: 2px dashed #E53935 !important; outline-offset: 4px !important;`);
    }

    if (rules.length > 0) {
      cssRules += `${selector} { ${rules.join(" ")} }\n`;
    }
  });

  // Inject general styles
  let styleEl = document.getElementById("visual-builder-injected-styles");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "visual-builder-injected-styles";
    document.head.appendChild(styleEl);
  }
  styleEl.innerHTML = cssRules;
}

export default function VisualEditor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState<"spacing" | "text" | "style">("spacing");
  const [selectedId, setSelectedId] = useState<string>("stats-card");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [isTextEditingMode, setIsTextEditingMode] = useState(false);

  const [styles, setStyles] = useState<StyleConfig>(() => {
    if (typeof window === "undefined") return DEFAULT_STYLES;
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STYLES);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_STYLES;
  });

  const [customTexts, setCustomTexts] = useState<TextConfig>(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TEXTS);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {};
  });

  const [copied, setCopied] = useState(false);

  // Update dynamic styles and save
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STYLES, JSON.stringify(styles));
      applyStylesToDOM(styles, selectedId, isOpen);
    } catch {
      // ignore
    }
  }, [styles, selectedId, isOpen]);

  // Apply custom texts to DOM
  useEffect(() => {
    if (typeof document === "undefined") return;
    Object.entries(customTexts).forEach(([id, text]) => {
      const el = document.getElementById(id);
      if (el && !el.isContentEditable) {
        // If element contains inner formatting like span or br, update text safely
        if (el.tagName === "P" || el.tagName === "SPAN" || el.tagName === "H1" || el.tagName === "H2" || el.tagName === "H3" || el.tagName === "A" || el.tagName === "DIV") {
          el.innerText = text;
        }
      }
    });
    try {
      localStorage.setItem(STORAGE_KEY_TEXTS, JSON.stringify(customTexts));
    } catch {
      // ignore
    }
  }, [customTexts]);

  // Click-to-Select and ContentEditable Controller
  useEffect(() => {
    if (!isOpen) {
      // Disable contentEditable on all when closed
      document.querySelectorAll("[contenteditable=true]").forEach((el) => {
        el.removeAttribute("contenteditable");
      });
      return;
    }

    const findEditableTarget = (el: HTMLElement | null): { id: string; element: HTMLElement } | null => {
      let curr = el;
      while (curr && curr !== document.body) {
        if (curr.id && ALL_EDITABLE_IDS.includes(curr.id)) {
          return { id: curr.id, element: curr };
        }
        curr = curr.parentElement;
      }
      return null;
    };

    const handleClick = (e: MouseEvent) => {
      const editorPanel = document.getElementById("visual-builder-panel");
      if (editorPanel && editorPanel.contains(e.target as Node)) return;

      const targetInfo = findEditableTarget(e.target as HTMLElement);
      if (targetInfo) {
        setSelectedId(targetInfo.id);
      }
    };

    const handleDoubleClick = (e: MouseEvent) => {
      const editorPanel = document.getElementById("visual-builder-panel");
      if (editorPanel && editorPanel.contains(e.target as Node)) return;

      const targetInfo = findEditableTarget(e.target as HTMLElement);
      if (targetInfo) {
        setSelectedId(targetInfo.id);
        const elem = targetInfo.element;
        elem.setAttribute("contenteditable", "true");
        elem.focus();

        const handleBlur = () => {
          elem.removeAttribute("contenteditable");
          const newText = elem.innerText;
          setCustomTexts((prev) => ({ ...prev, [targetInfo.id]: newText }));
          elem.removeEventListener("blur", handleBlur);
        };

        elem.addEventListener("blur", handleBlur);
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("dblclick", handleDoubleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  }, [isOpen]);

  const handleUpdate = (field: keyof ElementStyle, value: any) => {
    setStyles((prev) => ({
      ...prev,
      [selectedId]: {
        ...(prev[selectedId] || DEFAULT_STYLES[selectedId] || {}),
        [field]: value,
      },
    }));
  };

  const currentVal = (field: keyof ElementStyle, fallback: any = 0): any => {
    const elStyle = styles[selectedId];
    if (elStyle && elStyle[field] !== undefined) {
      return elStyle[field];
    }
    const def = DEFAULT_STYLES[selectedId];
    if (def && def[field] !== undefined) {
      return def[field];
    }
    return fallback;
  };

  const handleResetCurrent = () => {
    setStyles((prev) => {
      const next = { ...prev };
      delete next[selectedId];
      return next;
    });
    setCustomTexts((prev) => {
      const next = { ...prev };
      delete next[selectedId];
      return next;
    });
  };

  const handleResetAll = () => {
    if (window.confirm("¿Seguro que deseas reiniciar todos los estilos y textos?")) {
      setStyles(DEFAULT_STYLES);
      setCustomTexts({});
      localStorage.removeItem(STORAGE_KEY_STYLES);
      localStorage.removeItem(STORAGE_KEY_TEXTS);
      window.location.reload();
    }
  };

  const handleCopyCSS = () => {
    let output = "/* ==========================================\n";
    output += "   🎨 CAMBIOS VISUALES (ESTILO ELEMENTOR PRO)\n";
    output += "   ========================================== */\n\n";

    // Text changes
    if (Object.keys(customTexts).length > 0) {
      output += "/* ✍️ TEXTOS MODIFICADOS: */\n";
      Object.entries(customTexts).forEach(([id, text]) => {
        output += `/* #${id} => "${text.replace(/\n/g, "\\n")}" */\n`;
      });
      output += "\n";
    }

    // CSS Rules
    output += "/* 📐 REGLAS DE ESPACIADO Y ESTILO: */\n";
    Object.entries(styles).forEach(([id, s]) => {
      if (!s) return;
      const rules: string[] = [];

      if (s.marginTop) rules.push(`  margin-top: ${s.marginTop}px;`);
      if (s.marginBottom) rules.push(`  margin-bottom: ${s.marginBottom}px;`);
      if (s.paddingY) {
        rules.push(`  padding-top: ${s.paddingY}px;`);
        rules.push(`  padding-bottom: ${s.paddingY}px;`);
      }
      if (s.paddingX) {
        rules.push(`  padding-left: ${s.paddingX}px;`);
        rules.push(`  padding-right: ${s.paddingX}px;`);
      }
      if (s.maxWidth) rules.push(`  max-width: ${s.maxWidth}px;`);
      if (s.fontSize) rules.push(`  font-size: ${s.fontSize}px;`);
      if (s.letterSpacing) rules.push(`  letter-spacing: ${s.letterSpacing}px;`);
      if (s.textAlign) rules.push(`  text-align: ${s.textAlign};`);
      if (s.borderRadius) rules.push(`  border-radius: ${s.borderRadius}px;`);
      if (s.opacity !== undefined && s.opacity < 100) rules.push(`  opacity: ${s.opacity / 100};`);
      if (s.color) rules.push(`  color: ${s.color};`);

      if (rules.length > 0) {
        output += `#${id} {\n${rules.join("\n")}\n}\n\n`;
      }
    });

    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Find active element label
  let activeLabel = selectedId;
  for (const group of EDITABLE_GROUPS) {
    const found = group.items.find((i) => i.id === selectedId);
    if (found) {
      activeLabel = `${group.category.split(" ")[0]} ${found.label}`;
      break;
    }
  }

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 z-[99990] flex items-center gap-2 select-none">
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#E53935] to-[#b71c1c] hover:from-[#f44336] hover:to-[#c62828] text-white px-5 py-3 rounded-full shadow-[0_0_30px_rgba(229,57,53,0.6)] border border-white/20 flex items-center gap-2.5 text-xs font-black tracking-wider uppercase font-inter cursor-pointer transition-all"
          >
            <span className="text-base">⚡</span>
            <span>Editor Elementor Pro</span>
          </motion.button>
        </div>
      )}

      {/* Main Elementor-Style Visual Builder Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="visual-builder-panel"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-4 right-4 bottom-4 z-[99999] w-[360px] sm:w-[420px] bg-[#0d0d0d]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-4 text-white flex flex-col gap-3 font-inter text-xs select-none"
          >
            {/* Header with Title & Controls */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#E53935] shadow-[0_0_10px_#E53935]" />
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider font-bebas text-white leading-none">
                    ELEMENTOR PRO BUILDER
                  </h3>
                  <p className="text-[10px] text-white/50 font-medium">Edición visual en vivo sin superposiciones</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/60 hover:text-white px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded cursor-pointer transition-colors"
                  title={isMinimized ? "Expandir" : "Minimizar"}
                >
                  {isMinimized ? "▲" : "▼"}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded cursor-pointer transition-colors"
                  title="Cerrar Editor"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Elementor Pro Tab Navigation */}
            {!isMinimized && (
              <div className="grid grid-cols-3 gap-1 bg-[#161616] p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setActiveTab("spacing")}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === "spacing"
                      ? "bg-[#E53935] text-white shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>📐</span>
                  <span>Espaciado</span>
                </button>

                <button
                  onClick={() => setActiveTab("text")}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === "text"
                      ? "bg-[#E53935] text-white shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>✍️</span>
                  <span>Texto</span>
                </button>

                <button
                  onClick={() => setActiveTab("style")}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === "style"
                      ? "bg-[#E53935] text-white shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>🎨</span>
                  <span>Estilo</span>
                </button>
              </div>
            )}

            {!isMinimized && (
              <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 custom-scroll">
                {/* Element Selector Dropdown with Search */}
                <div className="flex flex-col gap-1.5 bg-[#141414] p-2.5 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold text-white/50 tracking-wider uppercase">
                      Elemento Seleccionado:
                    </label>
                    <span className="text-[10px] text-[#E53935] font-mono font-bold">
                      #{selectedId}
                    </span>
                  </div>

                  <input
                    type="text"
                    placeholder="🔍 Buscar elemento (título, foto, video, caja...)"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="w-full bg-[#1e1e1e] border border-white/15 rounded-lg px-2.5 py-1 text-white text-[11px] placeholder:text-white/30 focus:border-[#E53935] focus:outline-none"
                  />

                  <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="w-full bg-[#1e1e1e] border border-white/15 rounded-lg px-2.5 py-1.5 text-white font-bold text-xs focus:border-[#E53935] focus:outline-none cursor-pointer"
                  >
                    {EDITABLE_GROUPS.map((group) => {
                      const filteredItems = group.items.filter((item) =>
                        searchFilter === ""
                          ? true
                          : item.label.toLowerCase().includes(searchFilter.toLowerCase()) ||
                            group.category.toLowerCase().includes(searchFilter.toLowerCase())
                      );
                      if (filteredItems.length === 0) return null;
                      return (
                        <optgroup key={group.category} label={group.category} className="bg-[#111] font-bold text-[#E53935]">
                          {filteredItems.map((el) => (
                            <option key={el.id} value={el.id} className="bg-[#1e1e1e] text-white font-normal">
                              {el.label}
                            </option>
                          ))}
                        </optgroup>
                      );
                    })}
                  </select>

                  <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px]">
                    <span className="text-white/70 truncate max-w-[240px]">
                      📍 {activeLabel}
                    </span>
                    <button
                      onClick={handleResetCurrent}
                      className="text-[10px] text-[#E53935] hover:underline font-bold cursor-pointer"
                    >
                      Restablecer
                    </button>
                  </div>
                </div>

                {/* Quick Hint */}
                <div className="bg-[#E53935]/15 border border-[#E53935]/30 rounded-lg p-2 text-[10.5px] text-white/90 leading-tight">
                  💡 <strong>Tip Elementor:</strong> Haz <strong>click</strong> para seleccionar cualquier caja y <strong>doble click</strong> para editar texto directamente en pantalla.
                </div>

                {/* TAB 1: SPACING & LAYOUT (Natural Box Model) */}
                {activeTab === "spacing" && (
                  <div className="flex flex-col gap-3 bg-[#141414] p-3 rounded-xl border border-white/10">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#E53935] border-b border-white/10 pb-1 flex items-center gap-1.5">
                      <span>📐</span> Disposición y Espaciado Natural (Box Model)
                    </h4>

                    {/* Margen Arriba (Empuja hacia abajo sin montarse) */}
                    <div>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-white/80 font-medium text-[11px]">Margen Arriba (Margin Top)</span>
                        <span className="text-[#E53935] font-black font-mono">{currentVal("marginTop", 0)}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="160"
                        step="2"
                        value={currentVal("marginTop", 0)}
                        onChange={(e) => handleUpdate("marginTop", Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>

                    {/* Margen Abajo (Separa de la sección siguiente) */}
                    <div>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-white/80 font-medium text-[11px]">Margen Abajo (Margin Bottom)</span>
                        <span className="text-[#E53935] font-black font-mono">{currentVal("marginBottom", 0)}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="160"
                        step="2"
                        value={currentVal("marginBottom", 0)}
                        onChange={(e) => handleUpdate("marginBottom", Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>

                    {/* Padding Vertical */}
                    <div>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-white/80 font-medium text-[11px]">Relleno Vertical (Padding Y)</span>
                        <span className="text-[#E53935] font-black font-mono">{currentVal("paddingY", 0)}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="120"
                        step="2"
                        value={currentVal("paddingY", 0)}
                        onChange={(e) => handleUpdate("paddingY", Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>

                    {/* Padding Horizontal */}
                    <div>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-white/80 font-medium text-[11px]">Relleno Horizontal (Padding X)</span>
                        <span className="text-[#E53935] font-black font-mono">{currentVal("paddingX", 0)}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="80"
                        step="2"
                        value={currentVal("paddingX", 0)}
                        onChange={(e) => handleUpdate("paddingX", Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>

                    {/* Ancho Máximo */}
                    <div>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-white/80 font-medium text-[11px]">Ancho Máximo (Max Width)</span>
                        <span className="text-[#E53935] font-black font-mono">
                          {currentVal("maxWidth", 0) > 0 ? `${currentVal("maxWidth")}px` : "Auto"}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="200"
                        max="1300"
                        step="20"
                        value={currentVal("maxWidth", 0) || 1200}
                        onChange={(e) => handleUpdate("maxWidth", Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 2: TYPOGRAPHY & TEXT CONTENT */}
                {activeTab === "text" && (
                  <div className="flex flex-col gap-3 bg-[#141414] p-3 rounded-xl border border-white/10">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#E53935] border-b border-white/10 pb-1 flex items-center gap-1.5">
                      <span>✍️</span> Edición de Texto y Tipografía
                    </h4>

                    {/* Direct Text Editor Field */}
                    <div>
                      <label className="text-[11px] font-medium text-white/80 block mb-1">
                        Contenido del Texto:
                      </label>
                      <textarea
                        rows={3}
                        value={
                          customTexts[selectedId] !== undefined
                            ? customTexts[selectedId]
                            : typeof document !== "undefined" && document.getElementById(selectedId)
                            ? document.getElementById(selectedId)?.innerText || ""
                            : ""
                        }
                        onChange={(e) => {
                          const val = e.target.value;
                          setCustomTexts((prev) => ({ ...prev, [selectedId]: val }));
                          const el = document.getElementById(selectedId);
                          if (el) el.innerText = val;
                        }}
                        placeholder="Escribe aquí para cambiar el texto en vivo..."
                        className="w-full bg-[#1e1e1e] border border-white/15 rounded-lg p-2 text-white text-xs focus:border-[#E53935] focus:outline-none"
                      />
                    </div>

                    {/* Font Size */}
                    <div>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-white/80 font-medium text-[11px]">Tamaño de Letra (Font Size)</span>
                        <span className="text-[#E53935] font-black font-mono">
                          {currentVal("fontSize", 0) > 0 ? `${currentVal("fontSize")}px` : "Defecto"}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="80"
                        step="1"
                        value={currentVal("fontSize", 16)}
                        onChange={(e) => handleUpdate("fontSize", Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>

                    {/* Letter Spacing */}
                    <div>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-white/80 font-medium text-[11px]">Espacio Entre Letras (Tracking)</span>
                        <span className="text-[#E53935] font-black font-mono">{currentVal("letterSpacing", 0)}px</span>
                      </div>
                      <input
                        type="range"
                        min="-2"
                        max="8"
                        step="0.5"
                        value={currentVal("letterSpacing", 0)}
                        onChange={(e) => handleUpdate("letterSpacing", Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>

                    {/* Text Alignment */}
                    <div>
                      <span className="text-white/80 font-medium text-[11px] block mb-1">Alineación del Texto:</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(["left", "center", "right"] as const).map((align) => (
                          <button
                            key={align}
                            onClick={() => handleUpdate("textAlign", align)}
                            className={`py-1 rounded font-bold text-xs uppercase cursor-pointer transition-colors ${
                              currentVal("textAlign") === align
                                ? "bg-[#E53935] text-white"
                                : "bg-[#222] text-white/60 hover:text-white"
                            }`}
                          >
                            {align === "left" ? "⬅️ Izq" : align === "center" ? "↔️ Centro" : "➡️ Der"}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: STYLE & BORDERS */}
                {activeTab === "style" && (
                  <div className="flex flex-col gap-3 bg-[#141414] p-3 rounded-xl border border-white/10">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#E53935] border-b border-white/10 pb-1 flex items-center gap-1.5">
                      <span>🎨</span> Estilo, Color y Bordes
                    </h4>

                    {/* Border Radius */}
                    <div>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-white/80 font-medium text-[11px]">Bordes Redondeados (Radius)</span>
                        <span className="text-[#E53935] font-black font-mono">{currentVal("borderRadius", 0)}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="40"
                        step="2"
                        value={currentVal("borderRadius", 0)}
                        onChange={(e) => handleUpdate("borderRadius", Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>

                    {/* Opacity */}
                    <div>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-white/80 font-medium text-[11px]">Opacidad (Transparencia)</span>
                        <span className="text-[#E53935] font-black font-mono">{currentVal("opacity", 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        step="5"
                        value={currentVal("opacity", 100)}
                        onChange={(e) => handleUpdate("opacity", Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>

                    {/* Color Quick Palette */}
                    <div>
                      <span className="text-white/80 font-medium text-[11px] block mb-1.5">Color del Texto:</span>
                      <div className="flex items-center gap-2">
                        {[
                          { name: "Blanco", color: "#FFFFFF" },
                          { name: "Rojo Gabriel", color: "#E53935" },
                          { name: "Gris Suave", color: "rgba(255,255,255,0.7)" },
                          { name: "Dorado", color: "#FFD700" },
                        ].map((c) => (
                          <button
                            key={c.name}
                            onClick={() => handleUpdate("color", c.color)}
                            className="w-7 h-7 rounded-full border-2 border-white/20 hover:scale-110 transition-transform cursor-pointer shadow-md"
                            style={{ backgroundColor: c.color }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Main Action: Copy CSS / Save */}
                <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={handleCopyCSS}
                    className="w-full bg-gradient-to-r from-[#E53935] to-[#c62828] hover:from-[#f44336] hover:to-[#d32f2f] text-white py-3 px-4 rounded-xl font-black tracking-wider uppercase text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-950/70 active:scale-98"
                  >
                    <span>💾</span>
                    <span>{copied ? "¡COPIADO! Pégalo a Antigravity en el chat" : "GUARDAR Y COPIAR CAMBIOS"}</span>
                  </button>

                  <div className="flex justify-between items-center text-[10px] text-white/50 px-1">
                    <span>⚡ Edición visual Elementor Pro</span>
                    <button
                      onClick={handleResetAll}
                      className="text-white/40 hover:text-red-400 underline cursor-pointer"
                    >
                      Reiniciar todo
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
