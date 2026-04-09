"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, AreaChart, Area, LineChart, Line,
} from "recharts";
import { pmtiDistribution, concesionesIngresos } from "../data";

const tooltipStyle = {
  contentStyle: { background: "#1e293b", border: "1px solid #334155", borderRadius: 8 },
  labelStyle: { color: "#e2e8f0" },
  itemStyle: { color: "#e2e8f0" },
};

export function PMTIChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={pmtiDistribution}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={110}
          paddingAngle={3}
          dataKey="porcentaje"
          nameKey="modo"
          label={({ name, value }: any) => `${name} ${value}%`}
        >
          {pmtiDistribution.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: any, name: any) => [`${value}%`, name]}
          {...tooltipStyle}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function ConcesionesChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={concesionesIngresos} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 12 }} />
        <YAxis dataKey="tipo" type="category" width={100} tick={{ fill: "#94a3b8", fontSize: 12 }} />
        <Tooltip
          formatter={(value: any) => [`$${value}B COP`, "Recaudo 2025"]}
          {...tooltipStyle}
        />
        <Bar dataKey="recaudo" radius={[0, 6, 6, 0]}>
          {concesionesIngresos.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function Avance4GChart() {
  const data = [
    { name: "Operacion", value: 16, color: "#10b981" },
    { name: "Construccion", value: 10, color: "#3b82f6" },
    { name: "Pre-constr.", value: 2, color: "#f59e0b" },
    { name: "Reversion", value: 1, color: "#ef4444" },
  ];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" outerRadius={80} dataKey="value" nameKey="name" label={({ name, value }: any) => `${name}: ${value}`}>
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip {...tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

// ── NEW CHARTS ──

export function PresupuestoTimelineChart() {
  const data = [
    { ano: "2022", valor: 13.2 },
    { ano: "2023", valor: 14.8 },
    { ano: "2024", valor: 16.1 },
    { ano: "2025", valor: 17.4 },
    { ano: "2026", valor: 20.52 },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="gradPresup" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis dataKey="ano" tick={{ fill: "#94a3b8", fontSize: 12 }} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} domain={[10, 22]} />
        <Tooltip formatter={(v: any) => [`$${v}B COP`, "Presupuesto"]} {...tooltipStyle} />
        <Area type="monotone" dataKey="valor" stroke="#3b82f6" strokeWidth={2} fill="url(#gradPresup)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function MetroProgressChart() {
  const data = [
    { fecha: "Ene 24", metro: 35, m80: 12, regiotram: 5 },
    { fecha: "Jul 24", metro: 50, m80: 22, regiotram: 12 },
    { fecha: "Ene 25", metro: 60, m80: 30, regiotram: 18 },
    { fecha: "Jul 25", metro: 67, m80: 36, regiotram: 24 },
    { fecha: "Nov 25", metro: 71, m80: 42, regiotram: 32 },
    { fecha: "Mar 26", metro: 75.5, m80: 50, regiotram: 37 },
  ];
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis dataKey="fecha" tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} domain={[0, 100]} />
        <Tooltip formatter={(v: any, n: any) => [`${v}%`, n]} {...tooltipStyle} />
        <Line type="monotone" dataKey="metro" name="Metro BOG L1" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="m80" name="Metro 80 MDE" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="regiotram" name="Regiotram" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function CiudadesPresupuestoChart() {
  const data = [
    { ciudad: "Bogota", presupuesto: 40.4, color: "#3b82f6" },
    { ciudad: "Barranquilla", presupuesto: 7.7, color: "#10b981" },
    { ciudad: "Cali", presupuesto: 7.5, color: "#f59e0b" },
    { ciudad: "Medellin", presupuesto: 6.3, color: "#8b5cf6" },
    { ciudad: "Cartagena", presupuesto: 4.55, color: "#ef4444" },
  ];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis dataKey="ciudad" tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <Tooltip formatter={(v: any) => [`$${v}B COP`, "Presupuesto 2026"]} {...tooltipStyle} />
        <Bar dataKey="presupuesto" radius={[6, 6, 0, 0]}>
          {data.map((d, i) => <Cell key={i} fill={d.color} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function RadarModoChart() {
  const data = [
    { modo: "Carretero", inversion: 90, ejecucion: 75, cobertura: 85 },
    { modo: "Aereo", inversion: 70, ejecucion: 37, cobertura: 60 },
    { modo: "Ferreo", inversion: 55, ejecucion: 20, cobertura: 15 },
    { modo: "Fluvial", inversion: 25, ejecucion: 10, cobertura: 10 },
    { modo: "Masivo", inversion: 80, ejecucion: 55, cobertura: 45 },
  ];
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data}>
        <PolarGrid stroke="#1e293b" />
        <PolarAngleAxis dataKey="modo" tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#64748b", fontSize: 10 }} />
        <Radar name="Inversion" dataKey="inversion" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
        <Radar name="Ejecucion" dataKey="ejecucion" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
        <Radar name="Cobertura" dataKey="cobertura" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.15} />
        <Tooltip {...tooltipStyle} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export function Avance5GBarChart() {
  const data = [
    { nombre: "Cali-Palmira", avance: 42.66, color: "#10b981" },
    { nombre: "Buenav.-Buga", avance: 12.26, color: "#3b82f6" },
    { nombre: "Troncal Mag 1", avance: 10, color: "#3b82f6" },
    { nombre: "Troncal Mag 2", avance: 7, color: "#f59e0b" },
    { nombre: "ALO Sur", avance: 3, color: "#f59e0b" },
    { nombre: "Accesos Norte II", avance: 2, color: "#ef4444" },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis type="number" domain={[0, 50]} tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <YAxis dataKey="nombre" type="category" width={95} tick={{ fill: "#94a3b8", fontSize: 10 }} />
        <Tooltip formatter={(v: any) => [`${v}%`, "Avance"]} {...tooltipStyle} />
        <Bar dataKey="avance" radius={[0, 4, 4, 0]}>
          {data.map((d, i) => <Cell key={i} fill={d.color} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AeropuertosPaxChart() {
  const data = [
    { aeropuerto: "El Dorado", pax: 45.48, capacidad: 35, color: "#3b82f6" },
    { aeropuerto: "JMC Medellin", pax: 14.5, capacidad: 11, color: "#ef4444" },
    { aeropuerto: "CLO Cali", pax: 6.2, capacidad: 8, color: "#10b981" },
    { aeropuerto: "BAQ B/quilla", pax: 4.1, capacidad: 5, color: "#f59e0b" },
    { aeropuerto: "CTG Cartagena", pax: 5.8, capacidad: 6, color: "#8b5cf6" },
  ];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis dataKey="aeropuerto" tick={{ fill: "#94a3b8", fontSize: 10 }} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <Tooltip {...tooltipStyle} />
        <Bar dataKey="pax" name="Pasajeros 2025 (M)" fill="#3b82f6" radius={[4, 4, 0, 0]}>
          {data.map((d, i) => <Cell key={i} fill={d.color} />)}
        </Bar>
        <Bar dataKey="capacidad" name="Capacidad Diseno (M)" fill="#374151" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function InversionHistoricaChart() {
  const data = [
    { periodo: "2010-14", inversion: 18 },
    { periodo: "2014-18", inversion: 32 },
    { periodo: "2018-22", inversion: 45 },
    { periodo: "2022-26", inversion: 65.6 },
    { periodo: "PMTI", inversion: 240 },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis dataKey="periodo" tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <Tooltip formatter={(v: any) => [`$${v}B COP`, "Inversion"]} {...tooltipStyle} />
        <Bar dataKey="inversion" radius={[6, 6, 0, 0]}>
          {data.map((_, i) => <Cell key={i} fill={i === 4 ? "#10b981" : "#3b82f6"} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ElectrificacionChart() {
  const data = [
    { ano: "2025", cali: 10, bogota: 15, pereira: 30 },
    { ano: "2027", cali: 20, bogota: 35, pereira: 60 },
    { ano: "2029", cali: 40, bogota: 55, pereira: 80 },
    { ano: "2031", cali: 60, bogota: 70, pereira: 100 },
    { ano: "2033", cali: 80, bogota: 85, pereira: 100 },
    { ano: "2035", cali: 100, bogota: 95, pereira: 100 },
  ];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="gCali" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gBog" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gPer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis dataKey="ano" tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} domain={[0, 100]} />
        <Tooltip formatter={(v: any, n: any) => [`${v}%`, n]} {...tooltipStyle} />
        <Area type="monotone" dataKey="pereira" name="Pereira" stroke="#10b981" fill="url(#gPer)" strokeWidth={2} />
        <Area type="monotone" dataKey="bogota" name="Bogota" stroke="#3b82f6" fill="url(#gBog)" strokeWidth={2} />
        <Area type="monotone" dataKey="cali" name="Cali (MIO)" stroke="#f59e0b" fill="url(#gCali)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
