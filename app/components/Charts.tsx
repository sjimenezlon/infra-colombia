"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
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
    { name: "En Operacion", value: 16, color: "#10b981" },
    { name: "Construccion", value: 10, color: "#3b82f6" },
    { name: "Pre-construccion", value: 2, color: "#f59e0b" },
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
