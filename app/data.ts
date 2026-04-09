// ============================================================
// DATA: Infraestructura de Transporte Colombia 2026-2030
// Fuentes: ANI, Invias, Aerocivil, DNP, MinTransporte, CCI,
//          Alcaldias, medios especializados, documento estrategico
// ============================================================

export const kpis = [
  { label: "Presupuesto Transporte 2026", value: "$20.52B", unit: "COP", delta: "+18% vs 2025" },
  { label: "PMTI (30 anos)", value: "$240B", unit: "COP", delta: "2021-2051" },
  { label: "Avance 4G Promedio", value: "92.4%", unit: "", delta: "30 proy. | 5,052 km" },
  { label: "Inversion Invias 2026", value: "$9.8B", unit: "COP", delta: "14 departamentos" },
  { label: "Metro Bogota L1", value: "75.5%", unit: "", delta: "Operacion mar 2028" },
  { label: "Vias para la Paz", value: "$15.05B", unit: "COP", delta: "20 corredores" },
];

export const pmtiDistribution = [
  { modo: "Carretero", inversion: 67.8, porcentaje: 48, color: "#3b82f6" },
  { modo: "Aereo", inversion: 33, porcentaje: 24, color: "#10b981" },
  { modo: "Ferroviario", inversion: 31, porcentaje: 22, color: "#f59e0b" },
  { modo: "Fluvial/Maritimo", inversion: 7.8, porcentaje: 6, color: "#ef4444" },
];

export const proyectos4G = [
  { nombre: "Autopista al Mar 2", avance: 99.29, estado: "Proxima completar" },
  { nombre: "Autopista Rio Magdalena 2", avance: 98.84, estado: "Proxima completar" },
  { nombre: "Bucaramanga-B/bermeja-Yondo", avance: 98.14, estado: "Construccion" },
  { nombre: "Pacifico 1", avance: 96.91, estado: "Construccion" },
  { nombre: "Antioquia-Bolivar", avance: 94.23, estado: "Construccion" },
  { nombre: "Villavicencio-Yopal", avance: 93.24, estado: "Construccion" },
  { nombre: "Tercer Carril Bogota-Girardot", avance: 73.52, estado: "Construccion" },
  { nombre: "Santana-Mocoa-Neiva", avance: 71.10, estado: "Mayor crecimiento" },
  { nombre: "Popayan-Santander Quilichao", avance: 43, estado: "Construccion" },
];

export const proyectos5G = [
  { nombre: "Accesos Cali-Palmira", avance: 42.66, detalle: "Av. Bicentenario al 74%. Malla Vial del Valle" },
  { nombre: "Buenaventura-Loboguerrero-Buga", avance: 12.26, detalle: "En ejecucion activa" },
  { nombre: "Troncal Magdalena 1", avance: 10, detalle: "Puerto Salgar-B/bermeja. En construccion" },
  { nombre: "Troncal Magdalena 2", avance: 7, detalle: "Sabana Torres-Curumani. En construccion" },
  { nombre: "ALO Sur", avance: 3, detalle: "Pre-construccion. Inicio obra ago 2026" },
  { nombre: "Accesos Norte Fase II", avance: 2, detalle: "Pre-construccion. Pendiente licencias" },
];

export const aeropuertos = [
  { nombre: "El Dorado (BOG)", pax2025: "45.48M", inversion: "EDMAX: 73M pax objetivo", estado: "Expansion", meta: "2035" },
  { nombre: "Jose Maria Cordova (MDE)", pax2025: "14.5M", inversion: "$164,000M optimizacion", estado: "Sobre capacidad 132%", meta: "2026" },
  { nombre: "Nuevo Cartagena (Bayunca)", pax2025: "N/A", inversion: "$6.55B APP", estado: "Factibilidad", meta: "H1 2026" },
  { nombre: "Alfonso Bonilla (CLO)", pax2025: "N/D", inversion: "$215,657M modernizacion", estado: "Aerocivil opera", meta: "2030" },
  { nombre: "Cortissoz (BAQ)", pax2025: "N/D", inversion: "$150,000M mejoramiento", estado: "En obra", meta: "2026" },
  { nombre: "Simon Bolivar (SMR)", pax2025: "N/D", inversion: "USD 100M+ (CAF)", estado: "Ampliacion pista", meta: "2027" },
];

export const transporteMasivo = [
  { sistema: "Metro Bogota L1", tipo: "Metro elevado", km: 23.96, avance: 75.5, presupuesto: "$23.69B", meta: "Mar 2028", paxDia: "N/A (nuevo)" },
  { sistema: "Metro Bogota L2", tipo: "Metro subterraneo", km: 15.5, avance: 0, presupuesto: "TBD", meta: "2035", paxDia: "49K/hr cap." },
  { sistema: "Regiotram Occidente", tipo: "Tren cercanias", km: 40, avance: 37, presupuesto: "TBD", meta: "Oct 2027", paxDia: "130K proy." },
  { sistema: "Metro Ligero 80 (MDE)", tipo: "Metro ligero", km: 13.25, avance: 50, presupuesto: "$3.54B", meta: "2028", paxDia: "170K proy." },
  { sistema: "Tren Cercanias Cali", tipo: "Tren electrico", km: 23, avance: 0, presupuesto: "$13B", meta: "Pausado", paxDia: "14K empleos" },
  { sistema: "Tunel del Toyo (MDE)", tipo: "Tunel vial", km: 9.8, avance: 85, presupuesto: "$5+B", meta: "Dic 2026", paxDia: "N/A" },
];

export const ciudades = [
  {
    nombre: "Bogota",
    presupuesto2026: "$40.4B",
    sectorMovilidad: "$9.2B",
    proyectos: [
      { nombre: "Metro Linea 1", monto: "$23.69B", avance: "75.5%", entrega: "Mar 2028" },
      { nombre: "Troncal Av. 68", monto: "$2.93B", avance: "77%+ (G9: 80%)", entrega: "G3-4: jun 26, resto 26-27" },
      { nombre: "TransMiCable San Cristobal", monto: "$364,000M", avance: "85.57%", entrega: "Dic 2026" },
      { nombre: "ALO Sur (24.5 km)", monto: "$1+B APP", avance: "Acuerdo ANI abr 8", entrega: "Inicio ago 2026" },
      { nombre: "Cable Potosi", monto: "$529,000M", avance: "0% obra (suspendido)", entrega: "Incierto" },
    ],
  },
  {
    nombre: "Medellin",
    presupuesto2026: "$6.3B (a 2028)",
    sectorMovilidad: "180K empleos",
    proyectos: [
      { nombre: "Metro Ligero de la 80", monto: "$3.54B", avance: "50%+", entrega: "2028" },
      { nombre: "Tunel del Toyo", monto: "$5+B", avance: "T1:99% T2:70%", entrega: "Dic 2026" },
      { nombre: "Primavera Norte", monto: "$216,000M", avance: "3%", entrega: "Abr 2027" },
      { nombre: "Mi Rio Mis Quebradas", monto: "$663,000M", avance: "En ejecucion", entrega: "Progresivo" },
      { nombre: "7o Metrocable (sur)", monto: "TBD", avance: "Factibilidad", entrega: "2027" },
    ],
  },
  {
    nombre: "Cali",
    presupuesto2026: "$7.5B",
    sectorMovilidad: "$373,183M (+356%)",
    proyectos: [
      { nombre: "Tren de Cercanias", monto: "$13B", avance: "Pausado (sin cofin. Nacion)", entrega: "TBD" },
      { nombre: "Renovacion MIO", monto: "$1.37B", avance: "47 buses entregados", entrega: "100% EV 2035" },
      { nombre: "Malla Vial", monto: "$900,000M", avance: "100+ segmentos", entrega: "Progresivo" },
      { nombre: "26 Proyectos Transformacion", monto: "$965,000M", avance: "En adjudicacion", entrega: "2026" },
    ],
  },
  {
    nombre: "Barranquilla",
    presupuesto2026: "$7.7B (historico)",
    sectorMovilidad: "+15% vs 2025",
    proyectos: [
      { nombre: "Doble Calzada B/quilla-Cienaga", monto: "$2.7B", avance: "Inicio 2026", entrega: "Multi-anual" },
      { nombre: "Gran Via Puerto Colombia", monto: "N/D", avance: "83%", entrega: "Jul 2026" },
      { nombre: "Dobles Calzadas Juan Mina+Caracoli", monto: "$228,000M", avance: "17-20%", entrega: "En obra" },
      { nombre: "Tren Tajamar", monto: "TBD", avance: "Planeacion", entrega: "TBD" },
      { nombre: "Barrios a la Obra", monto: "$326,000M", avance: "90 barrios", entrega: "Progresivo" },
    ],
  },
  {
    nombre: "Cartagena",
    presupuesto2026: "$4.55B",
    sectorMovilidad: "78% inv. publica",
    proyectos: [
      { nombre: "Canal del Dique", monto: "$5.6B", avance: "EIA al 40%, entrega oct", entrega: "Licencia antes ago 2026" },
      { nombre: "Renovacion Bocagrande", monto: "$168,157M", avance: "Inicio 2026", entrega: "2026" },
      { nombre: "Intercambiador Ternera", monto: "$41,733M", avance: "En obra", entrega: "2026" },
      { nombre: "Proteccion Costera", monto: "N/D", avance: "90%+", entrega: "2026" },
    ],
  },
];

export const cuellosDeBottella = [
  {
    sector: "Barranquilla-Cienaga-Santa Marta",
    detalle: "Viaductos K19 requieren $500,000M adicionales. El mar destruye la via en 2028.",
    prioridad: "urgente",
    region: "Costa Caribe",
  },
  {
    sector: "Bogota-Villavicencio",
    detalle: "120 sitios criticos. K18 derrumbe mayor. Segundo Tunel Renacer K44-K48. 5 tuneles y 4 viaductos por operar.",
    prioridad: "urgente",
    region: "Acceso Orinoquia",
  },
  {
    sector: "Villeta-Guaduas",
    detalle: "Principal cuello de botella troncal central. 13 anos sin solucion. Fallas geologicas activas N-S y E-O.",
    prioridad: "urgente",
    region: "Central-Norte",
  },
  {
    sector: "Sogamoso-Aguazul",
    detalle: "Sector Corinto-Pajarito. Condiciones geotecnicas dificiles de la cordillera Oriental.",
    prioridad: "urgente",
    region: "Acceso Orinoquia",
  },
  {
    sector: "Caldas-Bolombolo (Pacifico 1)",
    detalle: "Volumenes de transito muy altos. Requiere segunda calzada tramo Invias. Sitios criticos Libano y Sinifana.",
    prioridad: "urgente",
    region: "Eje Cafetero-Antioquia",
  },
  {
    sector: "Variante Riohacha",
    detalle: "En via Santa Marta-Riohacha-Maicao-Paraguachon (concesion).",
    prioridad: "alto",
    region: "Costa Caribe",
  },
  {
    sector: "Acceso Norte Santa Marta",
    detalle: "Congestion maxima en concesion.",
    prioridad: "alto",
    region: "Costa Caribe",
  },
  {
    sector: "Puente Rio Mendihuaca",
    detalle: "Carretera Santa Marta-Riohacha (concesion).",
    prioridad: "alto",
    region: "Costa Caribe",
  },
];

export const tramosEstructurar = [
  { nombre: "Cajamarca-Calarca", detalle: "Segunda calzada + segundo tunel de la Linea. Disenos requieren revision y ajuste." },
  { nombre: "Cerritos-La Virginia", detalle: "Construir segunda calzada. Estudiar adhesion a concesiones anexas." },
  { nombre: "2da Calzada Bogota-Villavicencio K0-K36", detalle: "En estructuracion ANI. Condiciones geologicas y geotecnicas especiales." },
  { nombre: "Concesion Mulalo-Loboguerrero", detalle: "Resolver problema juridico y adelantar construccion." },
];

export const transversalesFaltantes = [
  { nombre: "Salamina-Pivijay-Fundacion", region: "Magdalena" },
  { nombre: "Guaranda-Tiquisio-Norosi-Arenal-La Gloria", region: "Bolivar-Cesar" },
  { nombre: "Caucasia-Barrancabermeja", region: "Antioquia-Santander" },
  { nombre: "Paez-Aguaclara", region: "Boyaca-Casanare" },
  { nombre: "Santa Rosa-Villa Garzon", region: "Putumayo" },
  { nombre: "Necocli-Cartagena", region: "Costa Caribe (corredor turistico)" },
];

export const proyectosLargoPlazo = [
  { nombre: "Conexion Pacifico-Orinoquia", detalle: "Simultaneo con adecuacion altillanura para produccion agroindustrial. Incluye tramos Aipe-La Herrera, tunel ferreo, estaciones intermodales." },
  { nombre: "Cruce Cordillera Oriental", detalle: "Comunicacion Orinoquia con Rio Magdalena. Habilita exportacion al Pacifico." },
  { nombre: "Via Popayan-Guapi", detalle: "Nueva conexion al Pacifico. Territorios afectados por narcotrafico." },
  { nombre: "Puente Arimena-Puerto Carreno", detalle: "650 km totales (5 tramos). Acceso a 2M hectareas produccion agroindustrial. Parque Tuparro y Rio Bita." },
];

export const sectorFerreo = [
  { corredor: "La Dorada-Chiriguana (APP)", estado: "En construccion", inversion: "$3.4B", entidad: "ANI" },
  { corredor: "Bogota-Belencito", estado: "Prefactibilidad", inversion: "$317,706M", entidad: "FDN" },
  { corredor: "Tren del Carare (Bogota-Corredor Central)", estado: "Factibilidad", inversion: "TBD", entidad: "ANI" },
  { corredor: "Villavicencio-Puerto Gaitan", estado: "Factibilidad", inversion: "TBD", entidad: "ANI" },
  { corredor: "Villavicencio-Corredor Ferreo Central", estado: "Prefactibilidad", inversion: "TBD", entidad: "UPIT" },
  { corredor: "Corredor Interoceanico (Jurado-Titumate)", estado: "Prefactibilidad", inversion: "TBD", entidad: "UPIT" },
  { corredor: "Yumbo-Caimalito", estado: "Pendiente contratacion", inversion: "$1.24B", entidad: "ANI" },
  { corredor: "Regiotram de Occidente", estado: "32% avance", inversion: "TBD", entidad: "Cundinamarca" },
  { corredor: "Tren Cercanias Cali-Jamundi", estado: "Estructuracion", inversion: "$12B", entidad: "Cali" },
];

export const datosContextuales = {
  costosLogisticos: { valor: 15.6, unidad: "% de facturacion", referencia: "OCDE: 8%, Mundial: 11-13%", fuente: "Encuesta Nacional Logistica 2024" },
  cargaPortuaria: { valor: "170.8M ton/ano (est. 2025)", detalle: "H1 2025: 85.4M ton (-6.1% vs 2024). Caribe: 84.7%, Pacifico: 13.7%", lider: "Cartagena: 25.1M ton" },
  siniestrosViales: { valor: "2,529 muertos (ene-abr 2025)", detalle: "-5.14% vs 2024. 137 vidas salvadas. Motociclistas: 62% de victimas" },
  pasajerosAereos: { valor: "45.48M (El Dorado 2025)", detalle: "Ene 2026: 2M+ pax, 16K vuelos, 86% ocupacion. Mejor aeropuerto Sudamerica (Skytrax x8)" },
  flotaElectricaBogota: { valor: "1,850 buses EV (meta 2026)", detalle: "Fase VI: 269 buses troncales EV. Flota EV 3ra mas grande del mundo. 711 nuevos EV llegan 2026" },
  transcaribeCrisis: { valor: "Deficit $76,000M (2026)", detalle: "Tarifa tecnica: $6,950/pax vs usuario: $3,500. Distrito inyecto $47,000M en 2025. 55 buses nuevos mayo 2026" },
};

export const reformaInstitucional = [
  "Conformar comite de expertos en transporte para plan estrategico del proximo MinTransporte",
  "Fusionar entidades del sector y reducir planta significativamente",
  "Fortalecer la UPIT como entidad adscrita de planeacion multimodal (vial, ferreo, maritimo, aereo)",
  "Fusionar Agencia Nacional de Seguridad Vial con Policia de Carreteras",
  "Concentrar toda la planeacion de corredores intermodales en la UPIT",
  "Evaluar corredores con empresas de gran conocimiento en el sector",
];

export const programasEspeciales = [
  {
    nombre: "Manejo de Cuencas en Vias a Orinoquia",
    detalle: "Zonas de minifundio con cultivos sin tecnica. Mangueras y reservorios causan deslizamientos. Se requiere accion conjunta gobernaciones-alcaldias-Umatas: minidistritos de acueducto y riego, programas de educacion agricola.",
  },
  {
    nombre: "Reforestacion de Cuencas",
    detalle: "Desforestacion causa afectaciones a cuencas. Programa con corporaciones regionales para rehabilitacion y reforestacion, con aporte conjunto de la entidad propietaria de la via.",
  },
  {
    nombre: "Desarrollo Agroindustrial Orinoquia",
    detalle: "Puente Arimena-Puerto Carreno: 650 km. Facilita acceso a 2M hectareas. Instituto tecnologico en San Teodoro. Rio Bita y Parque Tuparro con potencial turistico.",
  },
];

export const riesgos = [
  { riesgo: "Deficit mantenimiento vial", impacto: "Critico", valor: "$19B/ano", detalle: "96% red terciaria en mal estado" },
  { riesgo: "Ejecucion aeroportuaria rezagada", impacto: "Alto", valor: "37% vs 52% meta", detalle: "51% proyectos bajo 40% avance" },
  { riesgo: "Crisis financiera BRTs", impacto: "Alto", valor: "3 sistemas en crisis", detalle: "Transcaribe ($63,000M deficit), MIO, Metrolinea" },
  { riesgo: "Cordillera Oriental en levantamiento", impacto: "Estructural", valor: "3 vias principales", detalle: "Solo 2 cordilleras con levantamiento permanente: Himalaya y C. Oriental" },
  { riesgo: "Tramo Villeta-Guaduas", impacto: "Critico", valor: "13 anos sin solucion", detalle: "Fallas geologicas activas cruzan el proyecto" },
  { riesgo: "5G incipiente", impacto: "Medio", valor: "17-20% avance", detalle: "2 de 6 proyectos en pre-construccion. CCI alerta rezago." },
  { riesgo: "Tren Cercanias Cali pausado", impacto: "Alto", valor: "$13B sin cofinanciacion", detalle: "Gobierno no firmo antes de Ley de Garantias (nov 2025)" },
  { riesgo: "Brecha aeroportuaria", impacto: "Alto", valor: "JMC al 132% capacidad", detalle: "El Dorado necesita EDMAX para sostener crecimiento" },
  { riesgo: "Tunel del Toyo: equipos electromecanicos", impacto: "Alto", valor: "T1 obra civil 99% pero sin equipos", detalle: "Gobierno Petro no ha entregado componente. Antioquia asumio 100% del proyecto" },
  { riesgo: "Falta transversales", impacto: "Estructural", valor: "6+ corredores", detalle: "Territorios sin acceso vial entre troncales N-S" },
  { riesgo: "Cable Potosi suspendido", impacto: "Alto", valor: "$529,000M con 0% obra", detalle: "Contrato adjudicado 2023, meta 2027, pero construccion no ha iniciado. 600K habitantes afectados" },
  { riesgo: "Transcaribe deficit creciente", impacto: "Critico", valor: "$76,000M deficit 2026", detalle: "Tarifa tecnica $6,950 vs usuario $3,500. Riesgo de colapso operacional" },
];

export const concesionesIngresos = [
  { tipo: "Aeroportuarias", recaudo: 1300, color: "#3b82f6" },
  { tipo: "Portuarias", recaudo: 228, color: "#10b981" },
  { tipo: "Ferreas", recaudo: 184, color: "#f59e0b" },
];

export const viasParaLaPaz = [
  "Quibdo-Medellin", "Quibdo-Pereira", "Pasto-Estanquillo",
  "San Francisco-Mocoa ($2.5B)", "Puentes Nacionales (La Doctrina)",
  "Necocli-Arboletes", "Legia-Saravena", "Candelaria-La Plata-Laberinto",
  "Corredores Wayuu (Sentencia T-302)", "Via al Mar Cauca",
  "Transversal Catatumbo ($887,000M)", "Ruta del Arroz: San Marcos-Ayapel",
  "Santa Lucia-Monitos-Puerto Escondido", "Via a El Aro",
  "Arauquita-Saravena", "Mompox-Pinillos",
  "Samaniego-La Llanada-Sotomayor", "Convencion-La Mata",
  "Puente Rio Putumayo (Puerto Asis-Teleye)", "Vias del Guavio",
];
