"use client";

import { useState } from "react";

// ── ANIMATED GAUGE ──
export function Gauge({ value, max = 100, label, color = "#3b82f6", size = 120 }: {
  value: number; max?: number; label: string; color?: string; size?: number;
}) {
  const pct = Math.min((value / max) * 100, 100);
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#1e293b" strokeWidth={8} />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={color} strokeWidth={8} strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center" style={{ width: size, height: size }}>
        <span className="text-xl font-bold text-white">{value}%</span>
      </div>
      <p className="text-xs text-gray-400 text-center mt-1 max-w-[120px]">{label}</p>
    </div>
  );
}

// ── GAUGE ROW (for multiple gauges) ──
export function GaugeRow({ items }: { items: { value: number; label: string; color: string }[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-4">
      {items.map((item, i) => (
        <div key={i} className="relative flex flex-col items-center">
          <Gauge value={item.value} label={item.label} color={item.color} />
        </div>
      ))}
    </div>
  );
}

// ── TIMELINE VERTICAL ──
export function Timeline({ events }: { events: { date: string; title: string; detail: string; status: "done" | "active" | "pending" }[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-700" />
      {events.map((e, i) => (
        <div key={i} className="relative mb-6 last:mb-0">
          <div className={`absolute -left-3.5 w-3 h-3 rounded-full border-2 ${
            e.status === "done" ? "bg-emerald-500 border-emerald-400" :
            e.status === "active" ? "bg-blue-500 border-blue-400 animate-pulse" :
            "bg-gray-600 border-gray-500"
          }`} />
          <div className="ml-4">
            <span className={`text-xs font-mono ${e.status === "done" ? "text-emerald-400" : e.status === "active" ? "text-blue-400" : "text-gray-500"}`}>{e.date}</span>
            <p className="text-sm font-semibold text-white">{e.title}</p>
            <p className="text-xs text-gray-400">{e.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── SPARKLINE (mini inline chart) ──
export function Sparkline({ data, color = "#3b82f6", width = 80, height = 24 }: {
  data: number[]; color?: string; width?: number; height?: number;
}) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width={width} height={height} className="inline-block">
      <polyline points={points} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round" />
      <circle cx={(data.length - 1) / (data.length - 1) * width} cy={height - ((data[data.length - 1] - min) / range) * height} r={2} fill={color} />
    </svg>
  );
}

// ── STAT CARD WITH SPARKLINE ──
export function StatCard({ title, value, unit, spark, sparkColor, trend }: {
  title: string; value: string; unit?: string; spark?: number[]; sparkColor?: string; trend?: string;
}) {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-4">
      <p className="text-xs text-muted uppercase tracking-wider mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-2xl font-bold text-white">{value}</span>
          {unit && <span className="text-xs text-muted ml-1">{unit}</span>}
          {trend && <p className="text-xs text-emerald-400 mt-0.5">{trend}</p>}
        </div>
        {spark && <Sparkline data={spark} color={sparkColor || "#3b82f6"} />}
      </div>
    </div>
  );
}

// ── CORRIDOR MAP (SVG schematic) ──
export function CorridorMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const cities = [
    { name: "Bogota", x: 280, y: 180, size: 8 },
    { name: "Medellin", x: 180, y: 130, size: 7 },
    { name: "Cali", x: 160, y: 260, size: 6 },
    { name: "Barranquilla", x: 210, y: 30, size: 6 },
    { name: "Cartagena", x: 170, y: 40, size: 6 },
    { name: "Bucaramanga", x: 270, y: 100, size: 5 },
    { name: "Santa Marta", x: 240, y: 25, size: 5 },
    { name: "Villavicencio", x: 310, y: 210, size: 4 },
    { name: "Buenaventura", x: 120, y: 250, size: 5 },
    { name: "Pereira", x: 195, y: 200, size: 4 },
    { name: "Ibague", x: 230, y: 210, size: 4 },
    { name: "Manizales", x: 200, y: 185, size: 4 },
    { name: "Quibdo", x: 130, y: 170, size: 3 },
    { name: "Popayan", x: 165, y: 290, size: 4 },
    { name: "Pasto", x: 170, y: 330, size: 4 },
    { name: "Puerto Carreno", x: 420, y: 120, size: 3 },
    { name: "Yopal", x: 340, y: 160, size: 3 },
    { name: "Necocli", x: 120, y: 70, size: 3 },
    { name: "Uraba/Turbo", x: 115, y: 85, size: 3 },
  ];

  const corridors = [
    { from: "Bogota", to: "Medellin", type: "4G", color: "#10b981" },
    { from: "Bogota", to: "Villavicencio", type: "Critico", color: "#ef4444" },
    { from: "Bogota", to: "Bucaramanga", type: "4G", color: "#10b981" },
    { from: "Bogota", to: "Ibague", type: "4G", color: "#10b981" },
    { from: "Medellin", to: "Uraba/Turbo", type: "Toyo", color: "#f59e0b" },
    { from: "Cali", to: "Buenaventura", type: "5G", color: "#3b82f6" },
    { from: "Cali", to: "Popayan", type: "APP", color: "#8b5cf6" },
    { from: "Barranquilla", to: "Santa Marta", type: "Critico", color: "#ef4444" },
    { from: "Barranquilla", to: "Cartagena", type: "Activo", color: "#10b981" },
    { from: "Medellin", to: "Cali", type: "Pacifico1", color: "#f59e0b" },
    { from: "Pereira", to: "Ibague", type: "Linea", color: "#10b981" },
    { from: "Necocli", to: "Cartagena", type: "Transversal", color: "#f59e0b" },
    { from: "Villavicencio", to: "Yopal", type: "4G", color: "#10b981" },
    { from: "Yopal", to: "Puerto Carreno", type: "Futuro", color: "#64748b" },
    { from: "Popayan", to: "Pasto", type: "APP", color: "#8b5cf6" },
    { from: "Quibdo", to: "Medellin", type: "ViasPaz", color: "#f59e0b" },
    { from: "Quibdo", to: "Pereira", type: "ViasPaz", color: "#f59e0b" },
  ];

  const getCity = (name: string) => cities.find(c => c.name === name);

  return (
    <div className="relative">
      <svg viewBox="0 0 480 370" className="w-full h-auto">
        {/* Background shape of Colombia (simplified) */}
        <path
          d="M120,10 L260,5 L300,15 L340,30 L380,50 L420,80 L440,130 L430,180 L420,220 L400,260 L360,300 L320,340 L280,360 L240,365 L200,355 L170,340 L150,310 L130,270 L110,230 L90,190 L80,150 L85,110 L95,70 L105,40 Z"
          fill="#0f172a" stroke="#1e293b" strokeWidth={1}
        />

        {/* Corridors */}
        {corridors.map((c, i) => {
          const from = getCity(c.from);
          const to = getCity(c.to);
          if (!from || !to) return null;
          return (
            <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y}
              stroke={c.color} strokeWidth={c.type === "Critico" ? 2.5 : 1.5}
              strokeDasharray={c.type === "Futuro" || c.type === "Transversal" ? "4 3" : "none"}
              opacity={0.6}
            />
          );
        })}

        {/* Cities */}
        {cities.map((c, i) => (
          <g key={i}
            onMouseEnter={() => setHoveredCity(c.name)}
            onMouseLeave={() => setHoveredCity(null)}
            className="cursor-pointer"
          >
            <circle cx={c.x} cy={c.y} r={c.size}
              fill={hoveredCity === c.name ? "#3b82f6" : "#e2e8f0"}
              stroke="#0f172a" strokeWidth={1.5}
              className="transition-all duration-200"
            />
            <text x={c.x} y={c.y - c.size - 3}
              textAnchor="middle" fontSize={c.size > 5 ? 9 : 7}
              fill={hoveredCity === c.name ? "#ffffff" : "#94a3b8"}
              className="transition-all pointer-events-none"
            >
              {c.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-3 justify-center">
        {[
          { color: "#10b981", label: "4G / Operando" },
          { color: "#3b82f6", label: "5G" },
          { color: "#8b5cf6", label: "APP" },
          { color: "#f59e0b", label: "En obra / Vias Paz" },
          { color: "#ef4444", label: "Critico" },
          { color: "#64748b", label: "Futuro" },
        ].map((l, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 rounded" style={{ background: l.color }} />
            <span className="text-[10px] text-gray-400">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── COMPARISON BARS (side by side) ──
export function ComparisonBars({ items }: { items: { label: string; valueA: number; valueB: number; labelA: string; labelB: string; max: number }[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const pctA = (item.valueA / item.max) * 100;
        const pctB = (item.valueB / item.max) * 100;
        return (
          <div key={i}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white font-medium">{item.label}</span>
              <span className="text-gray-400">{item.labelA}: {item.valueA} | {item.labelB}: {item.valueB}</span>
            </div>
            <div className="flex gap-1 h-4">
              <div className="bg-blue-500/30 rounded-l-full overflow-hidden flex-1">
                <div className="h-full bg-blue-500 rounded-l-full transition-all duration-1000" style={{ width: `${pctA}%` }} />
              </div>
              <div className="bg-emerald-500/30 rounded-r-full overflow-hidden flex-1">
                <div className="h-full bg-emerald-500 rounded-r-full transition-all duration-1000 ml-auto" style={{ width: `${pctB}%` }} />
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center gap-6 text-xs text-muted mt-2">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-blue-500" />Demanda/Real</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-500" />Capacidad/Meta</span>
      </div>
    </div>
  );
}

// ── HEATMAP GRID ──
export function HeatmapGrid({ data }: { data: { label: string; values: { name: string; value: number }[] }[] }) {
  const allValues = data.flatMap(d => d.values.map(v => v.value));
  const maxVal = Math.max(...allValues);
  const getColor = (v: number) => {
    const ratio = v / maxVal;
    if (ratio > 0.75) return "bg-emerald-500/60";
    if (ratio > 0.5) return "bg-blue-500/50";
    if (ratio > 0.25) return "bg-amber-500/40";
    return "bg-gray-700/40";
  };

  return (
    <div className="overflow-x-auto">
      <div className="grid gap-1" style={{ gridTemplateColumns: `120px repeat(${data[0]?.values.length || 0}, 1fr)` }}>
        <div />
        {data[0]?.values.map((v, i) => (
          <div key={i} className="text-[10px] text-gray-400 text-center truncate px-1">{v.name}</div>
        ))}
        {data.map((row, ri) => (
          <>
            <div key={`l-${ri}`} className="text-xs text-gray-300 flex items-center">{row.label}</div>
            {row.values.map((v, ci) => (
              <div key={`${ri}-${ci}`} className={`rounded text-center text-[10px] text-white py-1.5 ${getColor(v.value)}`} title={`${row.label} - ${v.name}: ${v.value}`}>
                {v.value > 0 ? v.value : "-"}
              </div>
            ))}
          </>
        ))}
      </div>
      <div className="flex justify-end gap-2 mt-2 text-[10px] text-muted">
        <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-gray-700/40" />Bajo</span>
        <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-amber-500/40" />Medio</span>
        <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-blue-500/50" />Alto</span>
        <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-emerald-500/60" />Muy alto</span>
      </div>
    </div>
  );
}

// ── DONUT STAT ──
export function DonutStat({ value, total, label, color = "#3b82f6" }: {
  value: number; total: number; label: string; color?: string;
}) {
  const pct = (value / total) * 100;
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;

  return (
    <div className="flex items-center gap-3">
      <svg width={80} height={80} className="-rotate-90">
        <circle cx={40} cy={40} r={r} fill="none" stroke="#1e293b" strokeWidth={6} />
        <circle cx={40} cy={40} r={r} fill="none" stroke={color} strokeWidth={6}
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
        />
      </svg>
      <div className="absolute w-[80px] h-[80px] flex items-center justify-center">
        <span className="text-sm font-bold text-white">{Math.round(pct)}%</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{value} / {total}</p>
        <p className="text-xs text-muted">{label}</p>
      </div>
    </div>
  );
}
