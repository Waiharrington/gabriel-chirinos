"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ElementStyle {
  marginTop: number;
  marginBottom: number;
  translateX: number;
  translateY: number;
  paddingY: number;
  paddingX: number;
  maxWidth: number;
  scale: number;
}

type StyleConfig = Record<string, Partial<ElementStyle>>;

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

const DEFAULT_STYLES: StyleConfig = {
  "header-logo": { translateX: 158, translateY: 0, scale: 100 },
  "hero-buttons": { translateX: 159, translateY: 0, scale: 100 },
  "hero-title": { translateX: 153, translateY: -5, scale: 100 },
  "hero-script": { translateX: 156, translateY: -26, scale: 100 },
  "hero-badge": { translateX: 158, translateY: -29, scale: 100 },
  "hero-desc": { translateX: 158, translateY: -24, scale: 100 },
  "hero-content": { translateX: 0, translateY: 0, scale: 100, maxWidth: 600 },
  "stats-card": { translateX: -6, translateY: 40, scale: 100, maxWidth: 1040, paddingY: 32, paddingX: 40 },
};

const STORAGE_KEY = "gabriel_chirinos_visual_styles_v5";

function applyStylesToDOM(config: StyleConfig, activeId: string, editorOpen: boolean) {
  if (typeof document === "undefined") return;
  let cssRules = "";

  Object.entries(config).forEach(([id, s]) => {
    if (!s) return;
    const selector = `#${id}`;
    const rules: string[] = [];

    if (s.marginTop !== undefined) rules.push(`margin-top: ${s.marginTop}px !important;`);
    if (s.marginBottom !== undefined) rules.push(`margin-bottom: ${s.marginBottom}px !important;`);
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

    const tx = s.translateX || 0;
    const ty = s.translateY || 0;
    const sc = (s.scale || 100) / 100;

    if (tx !== 0 || ty !== 0 || sc !== 1) {
      rules.push(`transform: translate3d(${tx}px, ${ty}px, 0) scale(${sc}) !important;`);
    }

    // Visual highlight when editor is open and element is active
    if (editorOpen && id === activeId) {
      rules.push(`outline: 2px dashed #E53935 !important; outline-offset: 6px !important;`);
      rules.push(`cursor: grab !important;`);
    }

    if (rules.length > 0) {
      cssRules += `${selector} { ${rules.join(" ")} }\n`;
    }
  });

  let styleEl = document.getElementById("visual-editor-injected-styles");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "visual-editor-injected-styles";
    document.head.appendChild(styleEl);
  }
  styleEl.innerHTML = cssRules;
}

export default function VisualEditor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("header-logo");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [styles, setStyles] = useState<StyleConfig>(() => {
    if (typeof window === "undefined") return DEFAULT_STYLES;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
      const v4 = localStorage.getItem("gabriel_chirinos_visual_styles_v4");
      if (v4) return JSON.parse(v4);
    } catch {
      // ignore
    }
    return DEFAULT_STYLES;
  });
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragCoords, setDragCoords] = useState({ x: 0, y: 0 });

  const dragStartRef = useRef<{ mouseX: number; mouseY: number; elemX: number; elemY: number; targetId: string } | null>(null);

  // Update dynamic styles and save
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(styles));
      applyStylesToDOM(styles, selectedId, isOpen);
    } catch {
      // ignore
    }
  }, [styles, selectedId, isOpen]);

  // Direct Click-to-Select and Drag-and-Drop listener
  useEffect(() => {
    if (!isOpen) return;

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

    const handleMouseDown = (e: MouseEvent) => {
      const editorPanel = document.getElementById("visual-editor-panel");
      if (editorPanel && editorPanel.contains(e.target as Node)) return;

      const targetInfo = findEditableTarget(e.target as HTMLElement);
      if (!targetInfo) return;

      setSelectedId(targetInfo.id);

      e.preventDefault();
      const curX = styles[targetInfo.id]?.translateX || DEFAULT_STYLES[targetInfo.id]?.translateX || 0;
      const curY = styles[targetInfo.id]?.translateY || DEFAULT_STYLES[targetInfo.id]?.translateY || 0;

      dragStartRef.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        elemX: curX,
        elemY: curY,
        targetId: targetInfo.id,
      };
      setIsDragging(true);
      setDragCoords({ x: curX, y: curY });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragStartRef.current) return;
      const { mouseX, mouseY, elemX, elemY, targetId } = dragStartRef.current;
      const dx = Math.round(e.clientX - mouseX);
      const dy = Math.round(e.clientY - mouseY);

      const newX = elemX + dx;
      const newY = elemY + dy;

      setDragCoords({ x: newX, y: newY });

      setStyles((prev) => ({
        ...prev,
        [targetId]: {
          ...(prev[targetId] || DEFAULT_STYLES[targetId] || {}),
          translateX: newX,
          translateY: newY,
        },
      }));
    };

    const handleMouseUp = () => {
      if (dragStartRef.current) {
        dragStartRef.current = null;
        setIsDragging(false);
      }
    };

    // Keyboard Arrow Nudging
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement)?.tagName)) return;

      e.preventDefault();
      const step = e.shiftKey ? 10 : 1;
      const curX = styles[selectedId]?.translateX || DEFAULT_STYLES[selectedId]?.translateX || 0;
      const curY = styles[selectedId]?.translateY || DEFAULT_STYLES[selectedId]?.translateY || 0;

      let newX = curX;
      let newY = curY;

      if (e.key === "ArrowLeft") newX -= step;
      if (e.key === "ArrowRight") newX += step;
      if (e.key === "ArrowUp") newY -= step;
      if (e.key === "ArrowDown") newY += step;

      setStyles((prev) => ({
        ...prev,
        [selectedId]: {
          ...(prev[selectedId] || DEFAULT_STYLES[selectedId] || {}),
          translateX: newX,
          translateY: newY,
        },
      }));
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, styles, selectedId]);

  const handleUpdate = (field: keyof ElementStyle, value: number) => {
    setStyles((prev) => ({
      ...prev,
      [selectedId]: {
        ...(prev[selectedId] || DEFAULT_STYLES[selectedId] || {}),
        [field]: value,
      },
    }));
  };

  const currentVal = (field: keyof ElementStyle, fallback: number = 0): number => {
    const elStyle = styles[selectedId];
    if (elStyle && elStyle[field] !== undefined) {
      return elStyle[field] as number;
    }
    const def = DEFAULT_STYLES[selectedId];
    if (def && def[field] !== undefined) {
      return def[field] as number;
    }
    return fallback;
  };

  const handleResetCurrent = () => {
    setStyles((prev) => ({
      ...prev,
      [selectedId]: { ...(DEFAULT_STYLES[selectedId] || {}) },
    }));
  };

  const handleResetAll = () => {
    if (window.confirm("¿Seguro que deseas reiniciar todos los estilos a los valores por defecto?")) {
      setStyles(DEFAULT_STYLES);
    }
  };

  const handleCopyCSS = () => {
    let output = "/* 🎨 Estilos visuales personalizados para Gabriel Chirinos Landing */\n\n";
    Object.entries(styles).forEach(([id, s]) => {
      if (!s) return;
      const tx = s.translateX || 0;
      const ty = s.translateY || 0;
      const sc = (s.scale || 100) / 100;
      if (tx === 0 && ty === 0 && sc === 1 && !s.marginTop && !s.marginBottom && !s.paddingY && !s.paddingX && !s.maxWidth) return;

      output += `#${id} {\n`;
      if (tx || ty || sc !== 1) output += `  transform: translate3d(${tx}px, ${ty}px, 0) scale(${sc});\n`;
      if (s.marginTop) output += `  margin-top: ${s.marginTop}px;\n`;
      if (s.marginBottom) output += `  margin-bottom: ${s.marginBottom}px;\n`;
      if (s.paddingY) output += `  padding-top: ${s.paddingY}px;\n  padding-bottom: ${s.paddingY}px;\n`;
      if (s.paddingX) output += `  padding-left: ${s.paddingX}px;\n  padding-right: ${s.paddingX}px;\n`;
      if (s.maxWidth) output += `  max-width: ${s.maxWidth}px;\n`;
      output += `}\n\n`;
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
      {/* Floating Drag Coordinates Tooltip while dragging */}
      {isDragging && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[999999] bg-[#E53935] text-white font-mono font-black text-xs px-4 py-2 rounded-full shadow-2xl pointer-events-none flex items-center gap-2">
          <span>🖐️ Moviendo: #{selectedId}</span>
          <span className="bg-black/40 px-2 py-0.5 rounded">X: {dragCoords.x}px</span>
          <span className="bg-black/40 px-2 py-0.5 rounded">Y: {dragCoords.y}px</span>
        </div>
      )}

      {/* Floating Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 z-[99990] flex items-center gap-2 select-none">
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E53935] hover:bg-[#C62828] text-white px-5 py-3 rounded-full shadow-[0_0_25px_rgba(229,57,53,0.6)] border border-white/20 flex items-center gap-2 text-xs font-black tracking-wider uppercase font-inter cursor-pointer transition-all"
          >
            <span className="text-base">🖐️</span>
            <span>Mover Elementos</span>
          </motion.button>
        </div>
      )}

      {/* Main Visual Editor Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="visual-editor-panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-5 right-5 z-[99999] w-[350px] sm:w-[410px] bg-[#0c0c0c]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-4 text-white flex flex-col gap-3 font-inter text-xs select-none"
            style={{ maxHeight: isMinimized ? "auto" : "88vh", overflowY: isMinimized ? "hidden" : "auto" }}
          >
            {/* Header with drag toggle & minimize */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E53935] shadow-[0_0_8px_#E53935]" />
                <h3 className="text-xs font-black uppercase tracking-wider font-bebas text-white">
                  EDITOR VISUAL COMPLETO (CLICK & DRAG)
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/60 hover:text-white px-2 py-0.5 text-xs bg-white/10 hover:bg-white/20 rounded cursor-pointer"
                  title={isMinimized ? "Expandir" : "Minimizar"}
                >
                  {isMinimized ? "▲" : "▼"}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white px-2 py-0.5 text-xs bg-white/10 hover:bg-white/20 rounded cursor-pointer"
                  title="Cerrar"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Instruction Tip */}
            <div className="bg-[#E53935]/15 border border-[#E53935]/30 rounded-lg p-2.5 text-[11px] text-white/90 leading-tight">
              👉 <strong>¡Haz click en cualquier elemento</strong> (textos, fotos, videos, botones) y <strong>arrástralo libremente</strong> o usa las <strong>flechas del teclado</strong> (Shift + Flechas = 10px).
            </div>

            {!isMinimized && (
              <>
                {/* Search & Element Selector Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold text-white/50 tracking-wider uppercase block">
                      Elemento seleccionado:
                    </label>
                    <span className="text-[10px] text-[#E53935] font-bold">
                      #{selectedId}
                    </span>
                  </div>

                  {/* Filter input */}
                  <input
                    type="text"
                    placeholder="🔍 Buscar elemento (ej: video, foto, título...)"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="w-full bg-[#181818] border border-white/15 rounded-lg px-2.5 py-1 text-white text-[11px] placeholder:text-white/30 focus:border-[#E53935] focus:outline-none"
                  />

                  {/* Grouped Select */}
                  <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="w-full bg-[#181818] border border-white/15 rounded-lg px-2.5 py-1.5 text-white font-bold text-xs focus:border-[#E53935] focus:outline-none cursor-pointer"
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
                            <option key={el.id} value={el.id} className="bg-[#181818] text-white font-normal">
                              {el.label}
                            </option>
                          ))}
                        </optgroup>
                      );
                    })}
                  </select>
                </div>

                {/* Active Element Badge */}
                <div className="bg-black/40 border border-white/10 px-2.5 py-1.5 rounded-lg flex items-center justify-between">
                  <span className="text-white/80 text-[11px] font-medium truncate max-w-[240px]">
                    📍 {activeLabel}
                  </span>
                  <button
                    onClick={handleResetCurrent}
                    className="text-[10px] text-[#E53935] hover:underline font-bold cursor-pointer"
                    title="Reiniciar posición de este elemento"
                  >
                    Restablecer
                  </button>
                </div>

                {/* Precision Sliders */}
                <div className="flex flex-col gap-2.5 bg-[#141414] p-3 rounded-xl border border-white/[0.08]">
                  {/* Position X (Horizontal) */}
                  <div>
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-white/70 font-semibold text-[11px]">↔️ Mover Horizontal (X)</span>
                      <span className="text-[#E53935] font-black font-mono">{currentVal("translateX")}px</span>
                    </div>
                    <input
                      type="range"
                      min="-400"
                      max="400"
                      step="1"
                      value={currentVal("translateX")}
                      onChange={(e) => handleUpdate("translateX", Number(e.target.value))}
                      className="w-full accent-[#E53935] cursor-pointer"
                    />
                  </div>

                  {/* Position Y (Vertical) */}
                  <div>
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-white/70 font-semibold text-[11px]">↕️ Mover Vertical (Y)</span>
                      <span className="text-[#E53935] font-black font-mono">{currentVal("translateY")}px</span>
                    </div>
                    <input
                      type="range"
                      min="-400"
                      max="400"
                      step="1"
                      value={currentVal("translateY")}
                      onChange={(e) => handleUpdate("translateY", Number(e.target.value))}
                      className="w-full accent-[#E53935] cursor-pointer"
                    />
                  </div>

                  {/* Padding Vertical */}
                  <div>
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-white/70 font-semibold text-[11px]">📦 Espacio Interno (Padding Y)</span>
                      <span className="text-[#E53935] font-black font-mono">{currentVal("paddingY", 0)}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="140"
                      step="2"
                      value={currentVal("paddingY", 0)}
                      onChange={(e) => handleUpdate("paddingY", Number(e.target.value))}
                      className="w-full accent-[#E53935] cursor-pointer"
                    />
                  </div>

                  {/* Margin Top */}
                  <div>
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-white/70 font-semibold text-[11px]">↕️ Margen Arriba (Margin Top)</span>
                      <span className="text-[#E53935] font-black font-mono">{currentVal("marginTop", 0)}px</span>
                    </div>
                    <input
                      type="range"
                      min="-120"
                      max="200"
                      step="2"
                      value={currentVal("marginTop", 0)}
                      onChange={(e) => handleUpdate("marginTop", Number(e.target.value))}
                      className="w-full accent-[#E53935] cursor-pointer"
                    />
                  </div>

                  {/* Scale / Size */}
                  <div>
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-white/70 font-semibold text-[11px]">🔍 Tamaño / Escala</span>
                      <span className="text-[#E53935] font-black font-mono">{currentVal("scale", 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="160"
                      step="1"
                      value={currentVal("scale", 100)}
                      onChange={(e) => handleUpdate("scale", Number(e.target.value))}
                      className="w-full accent-[#E53935] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 pt-1 border-t border-white/10">
                  <button
                    onClick={handleCopyCSS}
                    className="w-full bg-[#E53935] hover:bg-[#C62828] text-white py-2.5 px-3 rounded-lg font-black tracking-wider uppercase text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-950/60"
                  >
                    <span>📋</span>
                    <span>{copied ? "¡COPIADO! Pégalo a Antigravity en el chat" : "COPIAR CSS PARA GUARDAR"}</span>
                  </button>

                  <div className="flex justify-between items-center text-[10px] text-white/50 px-1">
                    <span>Atajos: Arrastrar | Flechas</span>
                    <button
                      onClick={handleResetAll}
                      className="text-white/40 hover:text-white underline cursor-pointer"
                    >
                      Reiniciar todo
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
