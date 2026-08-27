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

const EDITABLE_ELEMENTS = [
  { id: "hero-title", label: "🦸 Título 'CONECTO MARCAS'" },
  { id: "hero-script", label: "🦸 Subtítulo 'en movimiento'" },
  { id: "hero-badge", label: "🦸 Badge 'CREADOR DE CONTENIDO'" },
  { id: "hero-desc", label: "🦸 Párrafo de Descripción" },
  { id: "hero-buttons", label: "🦸 Botones 'VER MEDIA KIT'" },
  { id: "hero-content", label: "🦸 Hero: Bloque Completo" },
  { id: "stats-card", label: "📊 Tarjeta de Estadísticas (Caja)" },
  { id: "stats-section", label: "📊 Sección de Estadísticas" },
  { id: "marcas-section", label: "🏷️ Sección de Marcas" },
  { id: "comunidad-section", label: "👥 Sección Comunidad" },
  { id: "nichos-section", label: "🎯 Sección Nichos" },
  { id: "services", label: "💼 Sección Servicios" },
  { id: "main-container", label: "📦 Contenedor Principal (Página)" },
];

const DEFAULT_STYLES: StyleConfig = {
  "hero-title": { translateX: 0, translateY: 0, scale: 100 },
  "hero-script": { translateX: 0, translateY: 0, scale: 100 },
  "hero-badge": { translateX: 0, translateY: 0, scale: 100 },
  "hero-desc": { translateX: 0, translateY: 0, scale: 100 },
  "hero-buttons": { translateX: 0, translateY: 0, scale: 100 },
  "hero-content": { translateX: 0, translateY: 0, scale: 100, maxWidth: 600 },
  "stats-card": { translateX: 0, translateY: 0, scale: 100, maxWidth: 1040, paddingY: 32, paddingX: 40 },
};

const STORAGE_KEY = "gabriel_chirinos_visual_styles_v2";

export default function VisualEditor() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("hero-title");
  const [styles, setStyles] = useState<StyleConfig>(DEFAULT_STYLES);
  const [copied, setCopied] = useState(false);
  const [dragMode, setDragMode] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragCoords, setDragCoords] = useState({ x: 0, y: 0 });

  const dragStartRef = useRef<{ mouseX: number; mouseY: number; elemX: number; elemY: number; targetId: string } | null>(null);

  // Load from localStorage
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

  // Update dynamic styles and save
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

      // Visual highlight when selected
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
  };

  // Direct Click-to-Select and Drag-and-Drop listener
  useEffect(() => {
    if (!isOpen) return;

    const findEditableTarget = (el: HTMLElement | null): { id: string; element: HTMLElement } | null => {
      let curr = el;
      while (curr && curr !== document.body) {
        if (curr.id && EDITABLE_ELEMENTS.some((item) => item.id === curr?.id)) {
          return { id: curr.id, element: curr };
        }
        curr = curr.parentElement;
      }
      return null;
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Don't drag if clicking inside the editor UI itself
      const editorPanel = document.getElementById("visual-editor-panel");
      if (editorPanel && editorPanel.contains(e.target as Node)) return;

      const targetInfo = findEditableTarget(e.target as HTMLElement);
      if (!targetInfo) return;

      setSelectedId(targetInfo.id);

      if (dragMode) {
        e.preventDefault();
        const curX = styles[targetInfo.id]?.translateX || 0;
        const curY = styles[targetInfo.id]?.translateY || 0;

        dragStartRef.current = {
          mouseX: e.clientX,
          mouseY: e.clientY,
          elemX: curX,
          elemY: curY,
          targetId: targetInfo.id,
        };
        setIsDragging(true);
        setDragCoords({ x: curX, y: curY });
      }
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
          ...(prev[targetId] || {}),
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
      // Don't interfere if typing in an input
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement)?.tagName)) return;

      e.preventDefault();
      const step = e.shiftKey ? 10 : 1;
      const curX = styles[selectedId]?.translateX || 0;
      const curY = styles[selectedId]?.translateY || 0;

      let newX = curX;
      let newY = curY;

      if (e.key === "ArrowLeft") newX -= step;
      if (e.key === "ArrowRight") newX += step;
      if (e.key === "ArrowUp") newY -= step;
      if (e.key === "ArrowDown") newY += step;

      setStyles((prev) => ({
        ...prev,
        [selectedId]: {
          ...(prev[selectedId] || {}),
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
  }, [isOpen, dragMode, styles, selectedId]);

  const handleUpdate = (field: keyof ElementStyle, value: number) => {
    setStyles((prev) => ({
      ...prev,
      [selectedId]: {
        ...(prev[selectedId] || {}),
        [field]: value,
      },
    }));
  };

  const currentVal = (field: keyof ElementStyle, fallback: number = 0): number => {
    const elStyle = styles[selectedId];
    if (elStyle && elStyle[field] !== undefined) {
      return elStyle[field] as number;
    }
    return fallback;
  };

  const handleResetCurrent = () => {
    setStyles((prev) => ({
      ...prev,
      [selectedId]: { translateX: 0, translateY: 0, scale: 100, marginTop: 0, marginBottom: 0 },
    }));
  };

  const handleCopyCSS = () => {
    let output = "/* 🎨 Estilos visuales personalizados */\n\n";
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
    setTimeout(() => setCopied(false), 2500);
  };

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
            className="fixed bottom-5 right-5 z-[99999] w-[340px] sm:w-[380px] bg-[#0c0c0c]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-4 text-white flex flex-col gap-3 font-inter text-xs select-none"
            style={{ maxHeight: isMinimized ? "auto" : "85vh", overflowY: isMinimized ? "hidden" : "auto" }}
          >
            {/* Header with drag toggle & minimize */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E53935] shadow-[0_0_8px_#E53935]" />
                <h3 className="text-xs font-black uppercase tracking-wider font-bebas text-white">
                  EDITOR DIRECTO (CLICK & DRAG)
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/60 hover:text-white px-2 py-0.5 text-xs bg-white/10 rounded"
                  title={isMinimized ? "Expandir" : "Minimizar"}
                >
                  {isMinimized ? "▲" : "▼"}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white px-2 py-0.5 text-xs bg-white/10 rounded"
                  title="Cerrar"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Instruction Tip */}
            <div className="bg-[#E53935]/15 border border-[#E53935]/30 rounded-lg p-2.5 text-[11px] text-white/90 leading-tight">
              👉 <strong>¡Haz click directo en cualquier texto o caja</strong> de la pantalla y <strong>arrástralo con el mouse</strong> para moverlo libremente! También puedes usar las <strong>flechas del teclado</strong> (o Shift + Flechas para pasos de 10px).
            </div>

            {!isMinimized && (
              <>
                {/* Element Selector Dropdown */}
                <div>
                  <label className="text-[10px] font-bold text-white/50 tracking-wider uppercase block mb-1">
                    Elemento seleccionado actualmente:
                  </label>
                  <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="w-full bg-[#181818] border border-white/15 rounded-lg px-2.5 py-1.5 text-white font-bold text-xs focus:border-[#E53935] focus:outline-none cursor-pointer"
                  >
                    {EDITABLE_ELEMENTS.map((el) => (
                      <option key={el.id} value={el.id} className="bg-[#111]">
                        {el.label}
                      </option>
                    ))}
                  </select>
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
                      min="-350"
                      max="350"
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
                      min="-350"
                      max="350"
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
                      max="120"
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
                      min="-100"
                      max="150"
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
                      onClick={handleCopyCSS}
                      className="bg-[#E53935] hover:bg-[#C62828] text-white py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>📋</span> {copied ? "¡Copiado!" : "Copiar CSS"}
                    </button>
                    <button
                      onClick={handleResetCurrent}
                      className="bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>🔄</span> Reset
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
