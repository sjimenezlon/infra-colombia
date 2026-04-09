"use client";

import { useState } from "react";
import {
  kpis, proyectos4G, proyectos5G, aeropuertos, transporteMasivo,
  ciudades, cuellosDeBottella, tramosEstructurar, transversalesFaltantes,
  proyectosLargoPlazo, sectorFerreo, reformaInstitucional,
  programasEspeciales, riesgos, viasParaLaPaz, pmtiDistribution,
} from "./data";
import {
  PMTIChart, ConcesionesChart, Avance4GChart, PresupuestoTimelineChart,
  MetroProgressChart, CiudadesPresupuestoChart, RadarModoChart,
  Avance5GBarChart, AeropuertosPaxChart, InversionHistoricaChart,
  ElectrificacionChart,
} from "./components/Charts";

const tabs = [
  { id: "resumen", label: "Resumen Ejecutivo" },
  { id: "vial", label: "Sector Vial" },
  { id: "aereo", label: "Sector Aereo" },
  { id: "ferreo", label: "Sector Ferreo" },
  { id: "ciudades", label: "Grandes Ciudades" },
  { id: "masivo", label: "Transporte Masivo" },
  { id: "estrategico", label: "Vision Estrategica" },
  { id: "riesgos", label: "Riesgos y Brechas" },
];

function ProgressBar({ value, max = 100, color = "bg-blue-500" }: { value: number; max?: number; color?: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
      <div className={`h-full rounded-full transition-all duration-1000 ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function Card({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`bg-card-bg border border-card-border rounded-xl p-5 ${className}`} style={style}>
      {children}
    </div>
  );
}

function Badge({ text, variant = "blue" }: { text: string; variant?: "blue" | "green" | "amber" | "red" | "gray" }) {
  const colors = {
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    green: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    amber: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
    gray: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[variant]}`}>
      {text}
    </span>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-white">{children}</h2>
      {sub && <p className="text-muted text-sm mt-1">{sub}</p>}
    </div>
  );
}

// ──────────────────── SECTIONS ────────────────────

function ResumenSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpis.map((kpi, i) => (
          <Card key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <p className="text-xs text-muted uppercase tracking-wider">{kpi.label}</p>
            <p className="text-2xl font-bold text-white mt-1 animate-count">{kpi.value}</p>
            {kpi.unit && <span className="text-xs text-muted">{kpi.unit}</span>}
            <p className="text-xs text-emerald-400 mt-1">{kpi.delta}</p>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-2">PMTI 2021-2051: $240 Billones COP</h3>
          <p className="text-xs text-muted mb-4">Distribucion por modo de transporte (sobre base $140B fase 1)</p>
          <PMTIChart />
          <div className="grid grid-cols-2 gap-2 mt-4">
            {pmtiDistribution.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: m.color }} />
                <span className="text-sm text-gray-300">{m.modo}: ${m.inversion}B</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-white mb-2">Recaudo Concesiones 2025</h3>
          <p className="text-xs text-muted mb-4">Total: $1.7 Billones COP (aeroportuarias + portuarias + ferreas)</p>
          <ConcesionesChart />
          <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-xs text-blue-300">La ANI administra 100+ contratos de concesion activos. El 20% de contraprestaciones aeroportuarias se transfiere a municipios.</p>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-2">Presupuesto Transporte: Evolucion</h3>
          <p className="text-xs text-muted mb-3">Billones COP - Presupuesto General de la Nacion</p>
          <PresupuestoTimelineChart />
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-white mb-2">Radar Sectorial: Inversion vs Ejecucion vs Cobertura</h3>
          <p className="text-xs text-muted mb-3">Indice relativo por modo de transporte (0-100)</p>
          <RadarModoChart />
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-2">Inversion Historica en Infraestructura</h3>
        <p className="text-xs text-muted mb-3">CAPEX acumulado por cuatrienio vs. PMTI total (COP Billones)</p>
        <InversionHistoricaChart />
      </Card>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { titulo: "Ley 1508/2012", desc: "Marco APP - modelo regional para alianzas publico-privadas" },
          { titulo: "CONPES 4075/2022", desc: "Politica Nacional Logistica: reducir costos de 12.6% a 10% PIB" },
          { titulo: "PND 2022-2026", desc: "Colombia Potencia Mundial de la Vida: $100+B en infraestructura" },
          { titulo: "PMTI 2021-2051", desc: "Plan Maestro de Transporte Intermodal: $240B a 30 anos" },
        ].map((item, i) => (
          <Card key={i}>
            <p className="text-sm font-semibold text-amber-400">{item.titulo}</p>
            <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function VialSection() {
  return (
    <div className="space-y-8">
      <SectionTitle sub="30 proyectos | 5,052 km | 19 departamentos | CAPEX $65.6B | 92.38% avance promedio">
        Programa 4G - Concesiones Viales
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-sm font-semibold text-white mb-3">Estado de Proyectos 4G</h3>
          <Avance4GChart />
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-white mb-3">Avance por Proyecto</h3>
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
            {proyectos4G.map((p, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300 truncate mr-2">{p.nombre}</span>
                  <span className="text-white font-mono">{p.avance}%</span>
                </div>
                <ProgressBar value={p.avance} color={p.avance > 95 ? "bg-emerald-500" : p.avance > 70 ? "bg-blue-500" : "bg-amber-500"} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <SectionTitle sub="6 proyectos | 1,012 km | ~US$2,000M invertidos | 14% avance promedio">
        Programa 5G - Concesiones del Bicentenario
      </SectionTitle>
      <Card>
        <h3 className="text-sm font-semibold text-white mb-3">Avance Comparativo 5G</h3>
        <Avance5GBarChart />
      </Card>
      <div className="grid md:grid-cols-3 gap-4">
        {proyectos5G.map((p, i) => (
          <Card key={i}>
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-semibold text-white">{p.nombre}</p>
              <Badge text={`${p.avance}%`} variant={p.avance > 30 ? "green" : p.avance > 10 ? "blue" : "gray"} />
            </div>
            <ProgressBar value={p.avance} color={p.avance > 30 ? "bg-emerald-500" : "bg-blue-500"} />
            <p className="text-xs text-muted mt-2">{p.detalle}</p>
          </Card>
        ))}
      </div>

      <SectionTitle sub="Red: 10,192 km | Pavimentada: 79.8% | Deficit mantenimiento: $19B/ano">
        INVIAS - Contratacion Historica 2026
      </SectionTitle>
      <Card>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">$9.8B</p>
            <p className="text-xs text-muted">COP en 14 departamentos</p>
            <p className="text-xs text-emerald-400 mt-1">+1,200 ofertas recibidas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-400">99.45%</p>
            <p className="text-xs text-muted">Ejecucion inversion 2025</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">$2.2B</p>
            <p className="text-xs text-muted">&quot;Concluir, Concluir y Concluir&quot;</p>
            <p className="text-xs text-gray-400 mt-1">2,906 km + 400 km pavimentacion</p>
          </div>
        </div>
      </Card>

      <SectionTitle sub="$15.05B COP | 527 km | 15 departamentos | 417,000 empleos | Ahorro $2.5B/ano">
        Programa Vias para la Paz (2026-2035)
      </SectionTitle>
      <Card>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {viasParaLaPaz.map((v, i) => (
            <div key={i} className="flex items-start gap-2 p-2 bg-gray-800/50 rounded-lg">
              <span className="text-xs text-blue-400 font-mono mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-xs text-gray-300">{v}</span>
            </div>
          ))}
        </div>
      </Card>

      <SectionTitle sub="Sitios criticos identificados por expertos del sector - Documento Estrategico 2026-2030">
        Cuellos de Botella Criticos
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {cuellosDeBottella.map((c, i) => (
          <Card key={i} className={c.prioridad === "urgente" ? "border-red-500/40" : "border-amber-500/30"}>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-semibold text-white">{c.sector}</h4>
              <div className="flex gap-2">
                <Badge text={c.region} variant="blue" />
                <Badge text={c.prioridad} variant={c.prioridad === "urgente" ? "red" : "amber"} />
              </div>
            </div>
            <p className="text-xs text-gray-400">{c.detalle}</p>
          </Card>
        ))}
      </div>

      <SectionTitle sub="Ampliaciones a doble calzada, variantes y mejoras geometricas">
        Tramos por Estructurar e Iniciar
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {tramosEstructurar.map((t, i) => (
          <Card key={i}>
            <h4 className="text-sm font-semibold text-amber-400">{t.nombre}</h4>
            <p className="text-xs text-gray-400 mt-1">{t.detalle}</p>
          </Card>
        ))}
      </div>

      <SectionTitle sub="Corredores faltantes que conecten troncales Norte-Sur">
        Transversales Prioritarias
      </SectionTitle>
      <Card>
        <div className="grid md:grid-cols-3 gap-3">
          {transversalesFaltantes.map((t, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
              <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
              <div>
                <p className="text-sm text-white">{t.nombre}</p>
                <p className="text-xs text-muted">{t.region}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <p className="text-xs text-amber-300">El pais tiene una carencia de transversales que conecten las troncales norte-sur, dejando territorios importantes sin acceso vial.</p>
        </div>
      </Card>
    </div>
  );
}

function AereoSection() {
  return (
    <div className="space-y-8">
      <SectionTitle sub="590 aeropuertos | Plan $570,805M (2024-2026) | USD $300M CAF | 5 concesiones / 15 aeropuertos">
        Infraestructura Aeroportuaria
      </SectionTitle>
      <Card>
        <h3 className="text-sm font-semibold text-white mb-3">Pasajeros 2025 vs. Capacidad de Diseno (Millones)</h3>
        <AeropuertosPaxChart />
        <p className="text-xs text-muted mt-2 text-center">Rojo = sobre capacidad | Los aeropuertos que exceden su capacidad de diseno requieren expansion urgente</p>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        {aeropuertos.map((a, i) => (
          <Card key={i}>
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-sm font-bold text-white">{a.nombre}</h4>
              <Badge text={a.estado} variant={a.estado === "Expansion" ? "green" : a.estado.includes("132") ? "red" : "blue"} />
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-muted">Pasajeros 2025</span><span className="text-white">{a.pax2025}</span></div>
              <div className="flex justify-between"><span className="text-muted">Inversion</span><span className="text-white">{a.inversion}</span></div>
              <div className="flex justify-between"><span className="text-muted">Meta</span><span className="text-emerald-400">{a.meta}</span></div>
            </div>
          </Card>
        ))}
      </div>
      <Card>
        <h3 className="text-lg font-semibold text-white mb-3">Plan Aerocivil 2024-2026</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { comp: "Extincion Incendios", monto: "$123,095M", desc: "17 maquinas, 4 bases" },
            { comp: "Terminales y Torres", monto: "$90,060M", desc: "Pitalito, Mitu, Pto Carreno" },
            { comp: "Pistas y Drenajes", monto: "$133,678M", desc: "Riohacha, Leticia, Arauca" },
            { comp: "6 Aeropuertos Centro-Norte", monto: "$167,000M", desc: "MinTransporte/ANI" },
          ].map((item, i) => (
            <div key={i} className="text-center p-3 bg-gray-800/50 rounded-lg">
              <p className="text-lg font-bold text-blue-400">{item.monto}</p>
              <p className="text-xs font-semibold text-white mt-1">{item.comp}</p>
              <p className="text-xs text-muted mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card className="border-amber-500/30">
        <h3 className="text-sm font-semibold text-amber-400 mb-2">Alerta: Ejecucion Rezagada</h3>
        <p className="text-xs text-gray-400">Avance fisico promedio del Plan 2025: <span className="text-white font-bold">37%</span> vs. meta 52%. Mas de la mitad de los 56 proyectos no alcanza 40%.</p>
        <div className="mt-3">
          <ProgressBar value={37} color="bg-amber-500" />
          <div className="flex justify-between text-xs text-muted mt-1"><span>Real: 37%</span><span>Meta: 52%</span></div>
        </div>
      </Card>
    </div>
  );
}

function FerreoSection() {
  return (
    <div className="space-y-8">
      <SectionTitle sub="6 corredores prioritarios | $94B planificados | Primera APP ferrea 2025">Sector Ferreo</SectionTitle>
      <Card className="border-emerald-500/30">
        <h3 className="text-lg font-semibold text-emerald-400 mb-2">Hito: La Dorada-Chiriguana</h3>
        <p className="text-sm text-gray-300 mb-3">Primera APP ferrea de Colombia - COP $3.4 Billones</p>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Carga 2025", value: "1M+ ton" },
            { label: "Puentes 2026", value: "4 rehabilitados" },
            { label: "Obras hidraulicas", value: "1,480" },
            { label: "Riel cambiado", value: "205.5 km" },
          ].map((item, i) => (
            <div key={i} className="p-3 bg-emerald-500/10 rounded-lg">
              <p className="text-lg font-bold text-white">{item.value}</p>
              <p className="text-xs text-emerald-300">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">+32,000 empleos. 400,000 beneficiarios en 25 municipios. MdE para pasajeros firmado.</p>
      </Card>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-card-border">
            <th className="text-left py-3 px-4 text-muted font-medium">Corredor</th>
            <th className="text-left py-3 px-4 text-muted font-medium">Estado</th>
            <th className="text-left py-3 px-4 text-muted font-medium">Inversion</th>
            <th className="text-left py-3 px-4 text-muted font-medium">Entidad</th>
          </tr></thead>
          <tbody>
            {sectorFerreo.map((f, i) => (
              <tr key={i} className="border-b border-card-border/50 hover:bg-gray-800/50">
                <td className="py-3 px-4 text-white">{f.corredor}</td>
                <td className="py-3 px-4"><Badge text={f.estado} variant={f.estado.includes("construccion") || f.estado.includes("avance") ? "green" : f.estado.includes("Factibilidad") ? "blue" : "amber"} /></td>
                <td className="py-3 px-4 text-gray-300">{f.inversion}</td>
                <td className="py-3 px-4 text-gray-400">{f.entidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Card>
        <h3 className="text-sm font-semibold text-white mb-3">Trenes de Cercanias</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { ciudad: "Bogota", proyecto: "Regiotram de Occidente", estado: "32% avance, Op. Oct 2027" },
            { ciudad: "Cali", proyecto: "Tren Cercanias Cali-Jamundi", estado: "Estructuracion, $12B" },
            { ciudad: "Medellin", proyecto: "Corredor Ferreo Multiproposito", estado: "En caracterizacion" },
          ].map((item, i) => (
            <div key={i} className="p-3 bg-gray-800/50 rounded-lg">
              <p className="text-sm font-semibold text-blue-400">{item.ciudad}</p>
              <p className="text-xs text-white mt-1">{item.proyecto}</p>
              <p className="text-xs text-muted mt-1">{item.estado}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function CiudadesSection() {
  const [selected, setSelected] = useState(0);
  const ciudad = ciudades[selected];
  return (
    <div className="space-y-6">
      <SectionTitle sub="Bogota, Medellin, Cali, Barranquilla, Cartagena">Grandes Ciudades</SectionTitle>
      <Card>
        <h3 className="text-sm font-semibold text-white mb-3">Presupuesto Distrital 2026 (COP Billones)</h3>
        <CiudadesPresupuestoChart />
      </Card>
      <div className="flex flex-wrap gap-2">
        {ciudades.map((c, i) => (
          <button key={i} onClick={() => setSelected(i)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selected === i ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"}`}>
            {c.nombre}
          </button>
        ))}
      </div>
      <Card>
        <div className="flex flex-wrap items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{ciudad.nombre}</h3>
          <div className="flex gap-4 text-sm">
            <div><span className="text-muted">Presupuesto: </span><span className="text-blue-400 font-bold">{ciudad.presupuesto2026}</span></div>
            <div><span className="text-muted">Movilidad: </span><span className="text-emerald-400 font-bold">{ciudad.sectorMovilidad}</span></div>
          </div>
        </div>
        <div className="space-y-3">
          {ciudad.proyectos.map((p, i) => (
            <div key={i} className="flex flex-wrap items-center justify-between p-3 bg-gray-800/50 rounded-lg gap-2">
              <div className="flex-1 min-w-[200px]"><p className="text-sm font-semibold text-white">{p.nombre}</p></div>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-blue-400">{p.monto}</span>
                <Badge text={p.avance} variant={p.avance.includes("%") && parseFloat(p.avance) > 50 ? "green" : "blue"} />
                <span className="text-muted">{p.entrega}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function MasivoSection() {
  return (
    <div className="space-y-8">
      <SectionTitle sub="Metros, BRTs, trenes, cables">Transporte Masivo</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-sm font-semibold text-white mb-3">Avance Grandes Proyectos Metro/Tren</h3>
          <p className="text-xs text-muted mb-2">Evolucion porcentual de avance</p>
          <MetroProgressChart />
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-white mb-3">Electrificacion de Flotas BRT</h3>
          <p className="text-xs text-muted mb-2">% de flota electrica proyectada por ciudad</p>
          <ElectrificacionChart />
        </Card>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-card-border">
            <th className="text-left py-3 px-3 text-muted font-medium">Sistema</th>
            <th className="text-left py-3 px-3 text-muted font-medium">Tipo</th>
            <th className="text-right py-3 px-3 text-muted font-medium">Km</th>
            <th className="text-left py-3 px-3 text-muted font-medium">Avance</th>
            <th className="text-left py-3 px-3 text-muted font-medium">Presupuesto</th>
            <th className="text-left py-3 px-3 text-muted font-medium">Meta</th>
          </tr></thead>
          <tbody>
            {transporteMasivo.map((t, i) => (
              <tr key={i} className="border-b border-card-border/50 hover:bg-gray-800/50">
                <td className="py-3 px-3 text-white font-medium">{t.sistema}</td>
                <td className="py-3 px-3 text-gray-400">{t.tipo}</td>
                <td className="py-3 px-3 text-right text-gray-300">{t.km}</td>
                <td className="py-3 px-3"><div className="flex items-center gap-2"><div className="w-16"><ProgressBar value={t.avance} color={t.avance > 50 ? "bg-emerald-500" : t.avance > 20 ? "bg-blue-500" : "bg-gray-600"} /></div><span className="text-xs text-white font-mono">{t.avance}%</span></div></td>
                <td className="py-3 px-3 text-blue-400">{t.presupuesto}</td>
                <td className="py-3 px-3 text-emerald-400">{t.meta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-sm font-semibold text-white mb-3">BRTs en Crisis</h3>
          <div className="space-y-3">
            {[
              { nombre: "Transcaribe (Cartagena)", issue: "Deficit fiscal $63,000M. Tarifa $3,900 (+14.7%)" },
              { nombre: "MIO (Cali)", issue: "Operadores patrimonio negativo. Renovacion $1.37B" },
              { nombre: "Metrolinea (Bucaramanga)", issue: "Estaciones vandalizadas, baja demanda" },
            ].map((brt, i) => (
              <div key={i} className="p-3 bg-gray-800/50 rounded-lg border-l-2 border-red-500/50">
                <p className="text-sm font-semibold text-white">{brt.nombre}</p>
                <p className="text-xs text-gray-400 mt-1">{brt.issue}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-white mb-3">BRTs Destacados</h3>
          <div className="space-y-3">
            {[
              { nombre: "Megabus (Pereira)", issue: "Unico sin deficit. 100% EV Dosquebradas. $3,600" },
              { nombre: "TransMilenio (Bogota)", issue: "+34.5 km. Fase VI: 269 buses EV. 101 EV H1 2026" },
              { nombre: "Transmetro (B/quilla)", issue: "60 nuevos buses. R40/S40 reactivadas. Expansion" },
            ].map((brt, i) => (
              <div key={i} className="p-3 bg-gray-800/50 rounded-lg border-l-2 border-emerald-500/50">
                <p className="text-sm font-semibold text-white">{brt.nombre}</p>
                <p className="text-xs text-gray-400 mt-1">{brt.issue}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card>
        <h3 className="text-sm font-semibold text-white mb-3">Cables Aereos</h3>
        <div className="grid md:grid-cols-4 gap-3">
          {[
            { ciudad: "Bogota", desc: "7 lineas ($2.1B). TransMiCable 80%+, Cable Potosi" },
            { ciudad: "Medellin", desc: "6 Metrocables. 7mo en factibilidad (sur)" },
            { ciudad: "Manizales", desc: "3ra linea en construccion. Meta: 5 lineas" },
            { ciudad: "Pereira/Ibague/S.Marta", desc: "Prefactibilidades en curso" },
          ].map((c, i) => (
            <div key={i} className="p-3 bg-gray-800/50 rounded-lg">
              <p className="text-sm font-semibold text-blue-400">{c.ciudad}</p>
              <p className="text-xs text-gray-400 mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function EstrategicoSection() {
  return (
    <div className="space-y-8">
      <SectionTitle sub="Documento estrategico 2026-2030 + analisis datos publicos">Vision Estrategica</SectionTitle>
      <Card className="border-blue-500/30">
        <h3 className="text-lg font-semibold text-blue-400 mb-3">Reforma Institucional Propuesta</h3>
        <p className="text-xs text-gray-400 mb-4">Revisar entidades del MinTransporte, fusionar, y concentrar planeacion en la UPIT.</p>
        <div className="space-y-2">
          {reformaInstitucional.map((r, i) => (
            <div key={i} className="flex items-start gap-3 p-2">
              <span className="text-blue-400 font-bold text-sm">{i + 1}.</span>
              <p className="text-sm text-gray-300">{r}</p>
            </div>
          ))}
        </div>
      </Card>
      <SectionTitle sub="Conexiones intercordilleranas, acceso agroindustrial">Proyectos a Largo Plazo</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {proyectosLargoPlazo.map((p, i) => (
          <Card key={i}>
            <h4 className="text-sm font-semibold text-amber-400 mb-2">{p.nombre}</h4>
            <p className="text-xs text-gray-400">{p.detalle}</p>
          </Card>
        ))}
      </div>
      <SectionTitle sub="Cuencas, reforestacion, agroindustria">Programas Especiales</SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {programasEspeciales.map((p, i) => (
          <Card key={i}>
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">{p.nombre}</h4>
            <p className="text-xs text-gray-400">{p.detalle}</p>
          </Card>
        ))}
      </div>
      <Card className="border-red-500/30">
        <h3 className="text-sm font-semibold text-red-400 mb-2">Dato Critico: Cordillera Oriental</h3>
        <p className="text-xs text-gray-400">Solo dos cordilleras en el mundo presentan levantamiento permanente: el <strong className="text-white">Himalaya</strong> y la <strong className="text-white">Cordillera Oriental de Colombia</strong>. Esto causa deslizamientos permanentes en las 3 carreteras principales al altiplano/Orinoquia y en las vias al valle del Rio Magdalena.</p>
      </Card>
    </div>
  );
}

function RiesgosSection() {
  return (
    <div className="space-y-8">
      <SectionTitle sub="Riesgos estructurales, operativos y financieros">Matriz de Riesgos y Brechas</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {riesgos.map((r, i) => (
          <Card key={i} className={r.impacto === "Critico" || r.impacto === "Estructural" ? "border-red-500/40" : "border-amber-500/30"}>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-semibold text-white">{r.riesgo}</h4>
              <Badge text={r.impacto} variant={r.impacto === "Critico" || r.impacto === "Estructural" ? "red" : r.impacto === "Alto" ? "amber" : "blue"} />
            </div>
            <p className="text-lg font-bold text-white">{r.valor}</p>
            <p className="text-xs text-gray-400 mt-1">{r.detalle}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h3 className="text-lg font-semibold text-white mb-3">Indicadores Clave 2026-2028</h3>
        <div className="space-y-3">
          {[
            { indicador: "Metro Bogota L1", meta: "90% avance", fecha: "Dic 2026", actual: "75.5%" },
            { indicador: "Metro Bogota L1 Operacion", meta: "Comercial", fecha: "Mar 2028", actual: "En obra" },
            { indicador: "Tunel del Toyo", meta: "Operacion", fecha: "Dic 2026", actual: "T1:99% T2:70%" },
            { indicador: "Metro Ligero 80", meta: "Apertura", fecha: "2028", actual: "50%+" },
            { indicador: "Regiotram Fase 1", meta: "Operacion", fecha: "Oct 2027", actual: "37%" },
            { indicador: "Aeropuerto Cartagena", meta: "Viabilidad", fecha: "H1 2026", actual: "Factibilidad" },
            { indicador: "EDMAX El Dorado", meta: "Inicio obra", fecha: "Dic 2028", actual: "Audiencia" },
            { indicador: "4G completo", meta: "100% operacion", fecha: "2026-2027", actual: "92.38%" },
          ].map((item, i) => (
            <div key={i} className="flex flex-wrap items-center justify-between p-3 bg-gray-800/50 rounded-lg gap-2">
              <span className="text-sm text-white font-medium">{item.indicador}</span>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-blue-400">{item.actual}</span>
                <span className="text-muted">&rarr;</span>
                <span className="text-emerald-400">{item.meta}</span>
                <Badge text={item.fecha} variant="gray" />
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card className="border-emerald-500/30">
        <h3 className="text-lg font-semibold text-emerald-400 mb-3">Fortalezas</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Escala sin precedentes: 4G (92%), 5G, PMTI ($240B), Vias para la Paz ($15B)",
            "Diversificacion modal: primera APP ferrea, modo fluvial, cables aereos",
            "Metro Bogota 75.5%, Metro 80 42%, Tren Cercanias Cali en estructuracion",
            "Electrificacion: Cali (100% EV 2035), Bogota (269+ buses EV), Pereira",
            "Inclusion regional: 14 departamentos historicamente desatendidos priorizados",
            "Financiamiento multilateral: BID, CAF, Banco Mundial (USD $10-13B activos)",
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-2 p-2">
              <span className="text-emerald-400 mt-0.5">&#10003;</span>
              <p className="text-xs text-gray-300">{f}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ──────────────────── MAIN ────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState("resumen");

  const renderSection = () => {
    switch (activeTab) {
      case "resumen": return <ResumenSection />;
      case "vial": return <VialSection />;
      case "aereo": return <AereoSection />;
      case "ferreo": return <FerreoSection />;
      case "ciudades": return <CiudadesSection />;
      case "masivo": return <MasivoSection />;
      case "estrategico": return <EstrategicoSection />;
      case "riesgos": return <RiesgosSection />;
      default: return <ResumenSection />;
    }
  };

  return (
    <main className="min-h-screen">
      <header className="relative overflow-hidden border-b border-card-border">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-emerald-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs text-blue-400 uppercase tracking-widest mb-2">Analisis Exhaustivo</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Infraestructura de Transporte
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> Colombia</span>
              </h1>
              <p className="text-muted mt-2 text-sm max-w-2xl">
                Dashboard con datos de ANI, Invias, Aerocivil, DNP, MinTransporte, alcaldias y fuentes gremiales. Integra documento estrategico 2026-2030 con recomendaciones de expertos.
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted">Actualizado</p>
              <p className="text-sm text-white font-mono">Abril 2026</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-card-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">{renderSection()}</div>

      <footer className="border-t border-card-border mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
            <div>
              <p>Fuentes: ANI, Invias, Aerocivil, MinTransporte, DNP, Metro de Bogota, Metro de Medellin, CCI, BID, CAF, Banco Mundial</p>
              <p className="mt-1">Documento estrategico: &quot;Infraestructura - Transporte Colombia 2026-2030&quot; | Portafolio, La Republica, El Tiempo, El Colombiano, Infobae, Valora Analitik</p>
            </div>
            <p className="text-gray-500">Datos sujetos a actualizacion</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
