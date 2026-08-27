"use client";

import { useEffect, useState } from "react";
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

const EDITABLE_ELEMENTS = [
  { id: "stats-card", label: "📊 Tarjeta de Estadísticas (Caja)" },
  { id: "stats-section", label: "📊 Sección de Estadísticas (Contenedor)" },
  { id: "hero-content", label: "🦸 Hero: Contenido (Textos & Botones)" },
  { id: "hero-title", label: "🦸 Hero: Título 'CONECTO MARCAS'" },
  { id: "hero-script", label: "🦸 Hero: Subtítulo 'en movimiento'" },
  { id: "hero-buttons", label: "🦸 Hero: Botones CTA" },
  { id: "main-container", label: "📦 Contenedor Principal (Página)" },
  { id: "marcas-section", label: "🏷️ Sección de Marcas (Logos)" },
  { id: "comunidad-section", label: "👥 Sección Comunidad" },
  { id: "nichos-section", label: "🎯 Sección Nichos" },
  { id: "services", label: "💼 Sección Servicios" },
];

const DEFAULT_STYLES: StyleConfig = {
  "stats-card": {
    marginTop: 0,
    marginBottom: 0,
    translateX: 0,
    translateY: 0,
    paddingY: 32,
    paddingX: 40,
    maxWidth: 1040,
    scale: 100,
  },
  "stats-section": {
    marginTop: 0,
    marginBottom: 0,
    translateX: 0,
    translateY: 0,
    paddingY: 8,
    paddingX: 0,
    maxWidth: 1200,
    scale: 100,
  },
  "hero-content": {
    marginTop: 0,
    marginBottom: 0,
    translateX: 0,
    translateY: 0,
    paddingY: 24,
    paddingX: 0,
    maxWidth: 600,
    scale: 100,
  },
  "hero-title": {
    marginTop: 0,
    marginBottom: 0,
    translateX: 0,
    translateY: 0,
    paddingY: 0,
    paddingX: 0,
    maxWidth: 600,
    scale: 100,
  },
  "hero-script": {
    marginTop: -8,
    marginBottom: 16,
    translateX: 0,
    translateY: 0,
    paddingY: 0,
    paddingX: 0,
    maxWidth: 600,
    scale: 100,
  },
  "hero-buttons": {
    marginTop: 0,
    marginBottom: 0,
    translateX: 0,
    translateY: 0,
    paddingY: 0,
    paddingX: 0,
    maxWidth: 600,
    scale: 100,
  },
  "main-container": {
    marginTop: 0,
    marginBottom: 0,
    translateX: 0,
    translateY: 0,
    paddingY: 32,
    paddingX: 48,
    maxWidth: 1200,
    scale: 100,
  },
};

const STORAGE_KEY = "gabriel_chirinos_visual_styles_v1";

export default function VisualEditor() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("stats-card");
  const [styles, setStyles] = useState<StyleConfig>(DEFAULT_STYLES);
  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  // Load styles on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setStyles(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save styles to localStorage and update dynamic stylesheet
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(styles));
      applyStylesToDOM(styles, selectedId, isOpen);
    } catch {
      // ignore
    }
  }, [styles, selectedId, isOpen]);

  const applyStylesToDOM = (config: StyleConfig, activeId: string, editorOpen: boolean) => {
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

      // If editor is open and this is the active element, show dashed outline
      if (editorOpen && id === activeId) {
        rules.push(`outline: 2px dashed #E53935 !important; outline-offset: 4px !important;`);
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
  };

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

  const handleReset = () => {
    setStyles((prev) => ({
      ...prev,
      [selectedId]: { ...(DEFAULT_STYLES[selectedId] || {}) },
    }));
  };

  const handleResetAll = () => {
    setStyles(DEFAULT_STYLES);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleCopyCSS = () => {
    let output = "/* Estilos configurados desde el Editor Visual */\n\n";
    Object.entries(styles).forEach(([id, s]) => {
      if (!s) return;
      output += `#${id} {\n`;
      if (s.marginTop) output += `  margin-top: ${s.marginTop}px;\n`;
      if (s.marginBottom) output += `  margin-bottom: ${s.marginBottom}px;\n`;
      if (s.paddingY) {
        output += `  padding-top: ${s.paddingY}px;\n`;
        output += `  padding-bottom: ${s.paddingY}px;\n`;
      }
      if (s.paddingX) {
        output += `  padding-left: ${s.paddingX}px;\n`;
        output += `  padding-right: ${s.paddingX}px;\n`;
      }
      if (s.maxWidth) output += `  max-width: ${s.maxWidth}px;\n`;
      if (s.translateX || s.translateY || (s.scale && s.scale !== 100)) {
        output += `  transform: translate3d(${s.translateX || 0}px, ${s.translateY || 0}px, 0) scale(${(s.scale || 100) / 100});\n`;
      }
      output += `}\n\n`;
    });

    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleManualSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(styles));
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-[99990] flex items-center gap-2 select-none">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#E53935] hover:bg-[#C62828] text-white px-4 py-2.5 rounded-full shadow-[0_0_20px_rgba(229,57,53,0.5)] border border-white/20 flex items-center gap-2 text-xs font-black tracking-wider uppercase font-inter cursor-pointer transition-all"
        >
          <span className="text-sm">🎛️</span>
          <span>{isOpen ? "Cerrar Editor" : "Ajustar Posiciones"}</span>
        </motion.button>
      </div>

      {/* Editor Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-5 z-[99999] w-[360px] sm:w-[400px] max-h-[85vh] bg-[#0c0c0c]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-5 overflow-y-auto text-white flex flex-col gap-4 font-inter text-xs select-none"
            style={{ scrollbarWidth: "thin" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E53935] shadow-[0_0_8px_#E53935]" />
                <h3 className="text-sm font-black uppercase tracking-wider font-bebas text-white">
                  EDITOR VISUAL DE POSICIÓN & MÁRGENES
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white text-base leading-none p-1"
              >
                ✕
              </button>
            </div>

            {/* Element Selector Dropdown */}
            <div>
              <label className="text-[10px] font-bold text-white/50 tracking-wider uppercase block mb-1.5">
                Selecciona el elemento a modificar:
              </label>
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full bg-[#161616] border border-white/15 rounded-lg px-3 py-2 text-white font-medium focus:border-[#E53935] focus:outline-none cursor-pointer"
              >
                {EDITABLE_ELEMENTS.map((el) => (
                  <option key={el.id} value={el.id} className="bg-[#111]">
                    {el.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-3.5 bg-[#141414]/80 p-3.5 rounded-xl border border-white/[0.08]">
              {/* Margin Top */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 font-semibold">↕️ Margen Superior (Top)</span>
                  <span className="text-[#E53935] font-black">{currentVal("marginTop")}px</span>
                </div>
                <input
                  type="range"
                  min="-150"
                  max="200"
                  step="2"
                  value={currentVal("marginTop")}
                  onChange={(e) => handleUpdate("marginTop", Number(e.target.value))}
                  className="w-full accent-[#E53935] cursor-pointer"
                />
              </div>

              {/* Margin Bottom */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 font-semibold">↕️ Margen Inferior (Bottom)</span>
                  <span className="text-[#E53935] font-black">{currentVal("marginBottom")}px</span>
                </div>
                <input
                  type="range"
                  min="-150"
                  max="200"
                  step="2"
                  value={currentVal("marginBottom")}
                  onChange={(e) => handleUpdate("marginBottom", Number(e.target.value))}
                  className="w-full accent-[#E53935] cursor-pointer"
                />
              </div>

              {/* Translate Y */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 font-semibold">↕️ Desplazar Vertical (Y)</span>
                  <span className="text-[#E53935] font-black">{currentVal("translateY")}px</span>
                </div>
                <input
                  type="range"
                  min="-250"
                  max="250"
                  step="2"
                  value={currentVal("translateY")}
                  onChange={(e) => handleUpdate("translateY", Number(e.target.value))}
                  className="w-full accent-[#E53935] cursor-pointer"
                />
              </div>

              {/* Translate X */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 font-semibold">↔️ Desplazar Horizontal (X)</span>
                  <span className="text-[#E53935] font-black">{currentVal("translateX")}px</span>
                </div>
                <input
                  type="range"
                  min="-250"
                  max="250"
                  step="2"
                  value={currentVal("translateX")}
                  onChange={(e) => handleUpdate("translateX", Number(e.target.value))}
                  className="w-full accent-[#E53935] cursor-pointer"
                />
              </div>

              {/* Padding Y (Espacio Interno Vertical) */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 font-semibold">📦 Espacio Interno Vertical (Padding Y)</span>
                  <span className="text-[#E53935] font-black">{currentVal("paddingY", 24)}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="2"
                  value={currentVal("paddingY", 24)}
                  onChange={(e) => handleUpdate("paddingY", Number(e.target.value))}
                  className="w-full accent-[#E53935] cursor-pointer"
                />
              </div>

              {/* Padding X (Espacio Interno Horizontal) */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 font-semibold">📦 Espacio Interno Horizontal (Padding X)</span>
                  <span className="text-[#E53935] font-black">{currentVal("paddingX", 24)}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="2"
                  value={currentVal("paddingX", 24)}
                  onChange={(e) => handleUpdate("paddingX", Number(e.target.value))}
                  className="w-full accent-[#E53935] cursor-pointer"
                />
              </div>

              {/* Max Width */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 font-semibold">📏 Ancho Máximo (Max Width)</span>
                  <span className="text-[#E53935] font-black">{currentVal("maxWidth", 1040)}px</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="1600"
                  step="10"
                  value={currentVal("maxWidth", 1040)}
                  onChange={(e) => handleUpdate("maxWidth", Number(e.target.value))}
                  className="w-full accent-[#E53935] cursor-pointer"
                />
              </div>

              {/* Scale */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 font-semibold">🔍 Escala / Tamaño</span>
                  <span className="text-[#E53935] font-black">{currentVal("scale", 100)}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  step="1"
                  value={currentVal("scale", 100)}
                  onChange={(e) => handleUpdate("scale", Number(e.target.value))}
                  className="w-full accent-[#E53935] cursor-pointer"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 pt-1 border-t border-white/10">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleManualSave}
                  className="bg-[#E53935] hover:bg-[#C62828] text-white py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>💾</span> {savedNotice ? "¡Guardado!" : "Guardar"}
                </button>
                <button
                  onClick={handleCopyCSS}
                  className="bg-white/10 hover:bg-white/20 border border-white/15 text-white py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>📋</span> {copied ? "¡Copiado!" : "Copiar CSS"}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-white/50 pt-1">
                <button
                  onClick={handleReset}
                  className="hover:text-[#E53935] hover:underline"
                >
                  Resetear este elemento
                </button>
                <button
                  onClick={handleResetAll}
                  className="hover:text-red-400 hover:underline"
                >
                  Resetear todo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
