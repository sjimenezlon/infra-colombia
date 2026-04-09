// ============================================================
// DATA: Infraestructura de Transporte Colombia 2026-2030
// Fuentes: ANI, Invias, Aerocivil, DNP, MinTransporte, CCI,
//          Alcaldias, medios especializados, documento estrategico
// ============================================================

export const kpis = [
  { label: "Presupuesto Transporte 2026", value: "$20.52B", unit: "COP", delta: "+18% vs 2025" },
  { label: "PMTI (30 años)", value: "$240B", unit: "COP", delta: "2021-2051" },
  { label: "Avance 4G Promedio", value: "92.4%", unit: "", delta: "30 proy. | 5,052 km" },
  { label: "Inversión Invias 2026", value: "$9.8B", unit: "COP", delta: "14 departamentos" },
  { label: "Metro Bogotá L1", value: "75.5%", unit: "", delta: "Operación mar 2028" },
  { label: "Vías para la Paz", value: "$15.05B", unit: "COP", delta: "20 corredores" },
];

export const pmtiDistribution = [
  { modo: "Carretero", inversion: 67.8, porcentaje: 48, color: "#3b82f6" },
  { modo: "Aéreo", inversion: 33, porcentaje: 24, color: "#10b981" },
  { modo: "Ferroviario", inversion: 31, porcentaje: 22, color: "#f59e0b" },
  { modo: "Fluvial/Marítimo", inversion: 7.8, porcentaje: 6, color: "#ef4444" },
];

export const proyectos4G = [
  { nombre: "Autopista al Mar 2", avance: 99.29, estado: "Próxima a completar" },
  { nombre: "Autopista Río Magdalena 2", avance: 98.84, estado: "Próxima a completar" },
  { nombre: "Bucaramanga-B/bermeja-Yondo", avance: 98.14, estado: "Construcción" },
  { nombre: "Pacífico 1", avance: 96.91, estado: "Construcción" },
  { nombre: "Antioquia-Bolívar", avance: 94.23, estado: "Construcción" },
  { nombre: "Villavicencio-Yopal", avance: 93.24, estado: "Construcción" },
  { nombre: "Tercer Carril Bogotá-Girardot", avance: 73.52, estado: "Construcción" },
  { nombre: "Santana-Mocoa-Neiva", avance: 71.10, estado: "Mayor crecimiento" },
  { nombre: "Popayán-Santander Quilichao", avance: 43, estado: "Construcción" },
];

export const proyectos5G = [
  { nombre: "Accesos Cali-Palmira", avance: 42.66, detalle: "Av. Bicentenario al 74%. Malla Vial del Valle" },
  { nombre: "Buenaventura-Loboguerrero-Buga", avance: 12.26, detalle: "En ejecución activa" },
  { nombre: "Troncal Magdalena 1", avance: 10, detalle: "Puerto Salgar-B/bermeja. En construcción" },
  { nombre: "Troncal Magdalena 2", avance: 7, detalle: "Sabana Torres-Curumani. En construcción" },
  { nombre: "ALO Sur", avance: 3, detalle: "Pre-construcción. Inicio obra ago 2026" },
  { nombre: "Accesos Norte Fase II", avance: 2, detalle: "Pre-construcción. Pendiente licencias" },
];

export const aeropuertos = [
  { nombre: "El Dorado (BOG)", pax2025: "45.48M", inversion: "EDMAX: 73M pax objetivo", estado: "Expansión", meta: "2035" },
  { nombre: "Jose Maria Cordova (MDE)", pax2025: "14.5M", inversion: "$164,000M optimización", estado: "Sobre capacidad 132%", meta: "2026" },
  { nombre: "Nuevo Cartagena (Bayunca)", pax2025: "N/A", inversion: "$6.55B APP", estado: "Factibilidad", meta: "H1 2026" },
  { nombre: "Alfonso Bonilla (CLO)", pax2025: "N/D", inversion: "$215,657M modernización", estado: "Aerocivil opera", meta: "2030" },
  { nombre: "Cortissoz (BAQ)", pax2025: "N/D", inversion: "$150,000M mejoramiento", estado: "En obra", meta: "2026" },
  { nombre: "Simon Bolívar (SMR)", pax2025: "N/D", inversion: "USD 100M+ (CAF)", estado: "Ampliación pista", meta: "2027" },
];

export const transporteMasivo = [
  { sistema: "Metro Bogotá L1", tipo: "Metro elevado", km: 23.96, avance: 75.5, presupuesto: "$23.69B", meta: "Mar 2028", paxDia: "N/A (nuevo)" },
  { sistema: "Metro Bogotá L2", tipo: "Metro subterráneo", km: 15.5, avance: 0, presupuesto: "TBD", meta: "2035", paxDia: "49K/hr cap." },
  { sistema: "Regiotram Occidente", tipo: "Tren cercanías", km: 40, avance: 37, presupuesto: "TBD", meta: "Oct 2027", paxDia: "130K proy." },
  { sistema: "Metro Ligero 80 (MDE)", tipo: "Metro ligero", km: 13.25, avance: 50, presupuesto: "$3.54B", meta: "2028", paxDia: "170K proy." },
  { sistema: "Tren Cercanías Cali", tipo: "Tren eléctrico", km: 23, avance: 0, presupuesto: "$13B", meta: "Pausado", paxDia: "14K empleos" },
  { sistema: "Túnel del Toyo (MDE)", tipo: "Túnel vial", km: 9.8, avance: 85, presupuesto: "$5+B", meta: "Dic 2026", paxDia: "N/A" },
];

export const ciudades = [
  {
    nombre: "Bogotá",
    presupuesto2026: "$40.4B",
    sectorMovilidad: "$9.2B",
    proyectos: [
      { nombre: "Metro Línea 1", monto: "$23.69B", avance: "75.5%", entrega: "Mar 2028" },
      { nombre: "Troncal Av. 68", monto: "$2.93B", avance: "77%+ (G9: 80%)", entrega: "G3-4: jun 26, resto 26-27" },
      { nombre: "TransMiCable San Cristóbal", monto: "$364,000M", avance: "85.57%", entrega: "Dic 2026" },
      { nombre: "ALO Sur (24.5 km)", monto: "$1+B APP", avance: "Acuerdo ANI abr 8", entrega: "Inicio ago 2026" },
      { nombre: "Cable Potosí", monto: "$529,000M", avance: "0% obra (suspendido)", entrega: "Incierto" },
    ],
  },
  {
    nombre: "Medellín",
    presupuesto2026: "$6.3B (a 2028)",
    sectorMovilidad: "180K empleos",
    proyectos: [
      { nombre: "Metro Ligero de la 80", monto: "$3.54B", avance: "50%+", entrega: "2028" },
      { nombre: "Túnel del Toyo", monto: "$5+B", avance: "T1:99% T2:70%", entrega: "Dic 2026" },
      { nombre: "Primavera Norte", monto: "$216,000M", avance: "3%", entrega: "Abr 2027" },
      { nombre: "Mi Río Mis Quebradas", monto: "$663,000M", avance: "En ejecución", entrega: "Progresivo" },
      { nombre: "7o Metrocable (sur)", monto: "TBD", avance: "Factibilidad", entrega: "2027" },
    ],
  },
  {
    nombre: "Cali",
    presupuesto2026: "$7.5B",
    sectorMovilidad: "$373,183M (+356%)",
    proyectos: [
      { nombre: "Tren de Cercanías", monto: "$13B", avance: "Pausado (sin cofin. Nación)", entrega: "TBD" },
      { nombre: "Renovación MIO", monto: "$1.37B", avance: "47 buses entregados", entrega: "100% EV 2035" },
      { nombre: "Malla Vial", monto: "$900,000M", avance: "100+ segmentos", entrega: "Progresivo" },
      { nombre: "26 Proyectos Transformación", monto: "$965,000M", avance: "En adjudicación", entrega: "2026" },
    ],
  },
  {
    nombre: "Barranquilla",
    presupuesto2026: "$7.7B (histórico)",
    sectorMovilidad: "+15% vs 2025",
    proyectos: [
      { nombre: "Doble Calzada B/quilla-Cienaga", monto: "$2.7B", avance: "Inicio 2026", entrega: "Multi-anual" },
      { nombre: "Gran Via Puerto Colombia", monto: "N/D", avance: "83%", entrega: "Jul 2026" },
      { nombre: "Dobles Calzadas Juan Mina+Caracoli", monto: "$228,000M", avance: "17-20%", entrega: "En obra" },
      { nombre: "Tren Tajamar", monto: "TBD", avance: "Planeación", entrega: "TBD" },
      { nombre: "Barrios a la Obra", monto: "$326,000M", avance: "90 barrios", entrega: "Progresivo" },
    ],
  },
  {
    nombre: "Cartagena",
    presupuesto2026: "$4.55B",
    sectorMovilidad: "78% inv. pública",
    proyectos: [
      { nombre: "Canal del Dique", monto: "$5.6B", avance: "EIA al 40%, entrega oct", entrega: "Licencia antes ago 2026" },
      { nombre: "Renovación Bocagrande", monto: "$168,157M", avance: "Inicio 2026", entrega: "2026" },
      { nombre: "Intercambiador Ternera", monto: "$41,733M", avance: "En obra", entrega: "2026" },
      { nombre: "Protección Costera", monto: "N/D", avance: "90%+", entrega: "2026" },
    ],
  },
];

export const cuellosDeBottella = [
  {
    sector: "Barranquilla-Cienaga-Santa Marta",
    detalle: "Viaductos K19 requieren $500,000M adicionales. El mar destruye la vía en 2028.",
    prioridad: "urgente",
    region: "Costa Caribe",
  },
  {
    sector: "Bogotá-Villavicencio",
    detalle: "120 sitios críticos. K18 derrumbe mayor. Segundo Túnel Renacer K44-K48. 5 tuneles y 4 viaductos por operar.",
    prioridad: "urgente",
    region: "Acceso Orinoquia",
  },
  {
    sector: "Villeta-Guaduas",
    detalle: "Principal cuello de botella troncal central. 13 años sin solución. Fallas geológicas activas N-S y E-O.",
    prioridad: "urgente",
    region: "Central-Norte",
  },
  {
    sector: "Sogamoso-Aguazul",
    detalle: "Sector Corinto-Pajarito. Condiciones geotécnicas dificiles de la cordillera Oriental.",
    prioridad: "urgente",
    region: "Acceso Orinoquia",
  },
  {
    sector: "Caldas-Bolombolo (Pacífico 1)",
    detalle: "Volumenes de transito muy altos. Requiere segunda calzada tramo Invias. Sitios críticos Líbano y Sinifaná.",
    prioridad: "urgente",
    region: "Eje Cafetero-Antioquia",
  },
  {
    sector: "Variante Riohacha",
    detalle: "En vía Santa Marta-Riohacha-Maicao-Paraguachon (concesión).",
    prioridad: "alto",
    region: "Costa Caribe",
  },
  {
    sector: "Acceso Norte Santa Marta",
    detalle: "Congestion maxima en concesión.",
    prioridad: "alto",
    region: "Costa Caribe",
  },
  {
    sector: "Puente Río Mendihuaca",
    detalle: "Carretera Santa Marta-Riohacha (concesión).",
    prioridad: "alto",
    region: "Costa Caribe",
  },
];

export const tramosEstructurar = [
  { nombre: "Cajamarca-Calarcá", detalle: "Segunda calzada + segundo túnel de la Línea. Diseños requieren revisión y ajuste." },
  { nombre: "Cerritos-La Virginia", detalle: "Construir segunda calzada. Estudiar adhesión a concesiónes anexas." },
  { nombre: "2da Calzada Bogotá-Villavicencio K0-K36", detalle: "En estructuración ANI. Condiciones geológicas y geotécnicas especiales." },
  { nombre: "Concesión Mulalo-Loboguerrero", detalle: "Resolver problema jurídico y adelantar construcción." },
];

export const transversalesFaltantes = [
  { nombre: "Salamina-Pivijay-Fundacion", region: "Magdalena" },
  { nombre: "Guaranda-Tiquisio-Norosi-Arenal-La Gloria", region: "Bolívar-Cesar" },
  { nombre: "Caucasia-Barrancabermeja", region: "Antioquia-Santander" },
  { nombre: "Paez-Aguaclara", region: "Boyacá-Casanare" },
  { nombre: "Santa Rosa-Villa Garzón", region: "Putumayo" },
  { nombre: "Necocli-Cartagena", region: "Costa Caribe (corredor turístico)" },
];

export const proyectosLargoPlazo = [
  { nombre: "Conexión Pacífico-Orinoquia", detalle: "Simultaneo con adecuacion altillanura para producción agroindustrial. Incluye tramos Aipe-La Herrera, túnel férreo, estaciones intermodales." },
  { nombre: "Cruce Cordillera Oriental", detalle: "Comunicación Orinoquia con Río Magdalena. Habilita exportación al Pacífico." },
  { nombre: "Via Popayán-Guapi", detalle: "Nueva conexión al Pacífico. Territorios afectados por narcotrafico." },
  { nombre: "Puente Arimena-Puerto Carreño", detalle: "650 km totales (5 tramos). Acceso a 2M hectáreas producción agroindustrial. Parque Tuparro y Río Bita." },
];

export const sectorFerreo = [
  { corredor: "La Dorada-Chiriguaná (APP)", estado: "En construcción", inversion: "$3.4B", entidad: "ANI" },
  { corredor: "Bogotá-Belencito", estado: "Prefactibilidad", inversion: "$317,706M", entidad: "FDN" },
  { corredor: "Tren del Carare (Bogotá-Corredor Central)", estado: "Factibilidad", inversion: "TBD", entidad: "ANI" },
  { corredor: "Villavicencio-Puerto Gaitán", estado: "Factibilidad", inversion: "TBD", entidad: "ANI" },
  { corredor: "Villavicencio-Corredor Férreo Central", estado: "Prefactibilidad", inversion: "TBD", entidad: "UPIT" },
  { corredor: "Corredor Interoceanico (Jurado-Titumate)", estado: "Prefactibilidad", inversion: "TBD", entidad: "UPIT" },
  { corredor: "Yumbo-Caimalito", estado: "Pendiente contratación", inversion: "$1.24B", entidad: "ANI" },
  { corredor: "Regiotram de Occidente", estado: "32% avance", inversion: "TBD", entidad: "Cundinamarca" },
  { corredor: "Tren Cercanías Cali-Jamundi", estado: "Estructuración", inversion: "$12B", entidad: "Cali" },
];

export const datosContextuales = {
  costosLogisticos: { valor: 15.6, unidad: "% de facturación", referencia: "OCDE: 8%, Mundial: 11-13%", fuente: "Encuesta Nacional Logística 2024" },
  cargaPortuaria: { valor: "170.8M ton/ano (est. 2025)", detalle: "H1 2025: 85.4M ton (-6.1% vs 2024). Caribe: 84.7%, Pacífico: 13.7%", lider: "Cartagena: 25.1M ton" },
  siniestrosViales: { valor: "2,529 muertos (ene-abr 2025)", detalle: "-5.14% vs 2024. 137 vidas salvadas. Motociclistas: 62% de víctimas" },
  pasajerosAéreos: { valor: "57.52M pax aéreos 2025 (record)", detalle: "32.9M nacionales + 24.7M internacionales. +1.67% vs 2024. 2026: ya 10M+ pax" },
  flotaElectricaBogotá: { valor: "1,850 buses EV (meta 2026)", detalle: "Fase VI: 269 buses troncales EV. Flota EV 3ra mas grande del mundo. 711 nuevos EV llegan 2026" },
  transcaribeCrisis: { valor: "Deficit $76,000M (2026)", detalle: "Tarifa técnica: $6,950/pax vs usuario: $3,500. Distrito inyectó $47,000M en 2025. 55 buses nuevos mayo 2026" },
  empleoSector: { valor: "1.58M empleados construcción (ene 2026)", detalle: "6.8% de población ocupada. Cada $1B invertido genera 28,000 empleos" },
  competitividad: { valor: "Puesto 58 de 64 (IMD 2024)", detalle: "Pilar infraestructura: posicion 56. Muy por debajo de Chile (44), Mexico (55)" },
  redTerciaria: { valor: "142,284 km", detalle: "69% de red total (206,708 km). 94-96% en mal estado. Solo 6% pavimentado. Meta: 33,000 km en cuatrienio" },
  ied: { valor: "USD 685M en transporte (2025)", detalle: "Caida 61% desde 2022 ($1,764M). IED total: USD 11,469M (-16.1%)" },
  ejecuciónPresupuestal: { valor: "Solo 7% ejecutado (abr 2025)", detalle: "$4B aplazados. Invias adeuda $1B+ a constructoras. Peor ejecución histórica sector transporte" },
};

export const proyectosAdicionales = {
  mulaloLoboguerrero: { estado: "En arbitraje", inversion: "$1.794B en patrimonio", detalle: "31.8 km, 5 tuneles, 48 puentes. Covimar solicitó terminación. +10 años en controversias" },
  segundoTunelLinea: { estado: "En evaluación ANI", longitud: "11 km (seria mas largo de America)", detalle: "Prefactibilidad aprobada. Factibilidad completada. Construcción estimada: 72 meses. 90% estructura privada" },
  varianteSanFranciscoMocoa: { avance: "30%", detalle: "27 km, 63 puentes, 3 tuneles. 100% pavimentacion frente S.Francisco. 4 puentes en servicio. 848 empleos. Inversión $1.2B + $2.5B adicionales. Meta: 2030" },
  puentePumarejo: { estado: "Antiguo puente sin demoler", detalle: "Desmonte por fases desde 2026 ($146,000M, 5 años). Bloquea navegación río Magdalena. Desacato abierto contra Invias" },
};

export const reformaInstitucional = [
  "Conformar comite de expertos en transporte para plan estrategico del proximo MinTransporte",
  "Fusionar entidades del sector y reducir planta significativamente",
  "Fortalecer la UPIT como entidad adscrita de planeacion multimodal (vial, férreo, marítimo, aéreo)",
  "Fusionar Agencia Nacional de Seguridad Vial con Policía de Carreteras",
  "Concentrar toda la planeacion de corredores intermodales en la UPIT",
  "Evaluar corredores con empresas de gran conocimiento en el sector",
];

export const programasEspeciales = [
  {
    nombre: "Manejo de Cuencas en Vias a Orinoquia",
    detalle: "Zonas de minifundio con cultivos sin técnica. Mangueras y reservorios causan deslizamientos. Se requiere accion conjunta gobernaciones-alcaldias-Umatas: minidistritos de acueducto y riego, programas de educación agricola.",
  },
  {
    nombre: "Reforestación de Cuencas",
    detalle: "Deforestación causa afectaciones a cuencas. Programa con corporaciones regionales para rehabilitación y reforestacion, con aporte conjunto de la entidad propietaria de la via.",
  },
  {
    nombre: "Desarrollo Agroindustrial Orinoquia",
    detalle: "Puente Arimena-Puerto Carreño: 650 km. Facilita acceso a 2M hectáreas. Instituto tecnológico en San Teodoro. Río Bita y Parque Tuparro con potencial turístico.",
  },
];

export const riesgos = [
  { riesgo: "Deficit mantenimiento vial", impacto: "Crítico", valor: "$19B/ano", detalle: "96% red terciaria en mal estado" },
  { riesgo: "Ejecución aeroportuaria rezagada", impacto: "Alto", valor: "37% vs 52% meta", detalle: "51% proyectos bajo 40% avance" },
  { riesgo: "Crisis financiera BRTs", impacto: "Alto", valor: "3 sistemas en crisis", detalle: "Transcaribe ($63,000M deficit), MIO, Metrolinea" },
  { riesgo: "Cordillera Oriental en levantamiento", impacto: "Estructural", valor: "3 vias principales", detalle: "Solo 2 cordilleras con levantamiento permanente: Himalaya y C. Oriental" },
  { riesgo: "Tramo Villeta-Guaduas", impacto: "Crítico", valor: "13 años sin solución", detalle: "Fallas geológicas activas cruzan el proyecto" },
  { riesgo: "5G incipiente", impacto: "Medio", valor: "17-20% avance", detalle: "2 de 6 proyectos en pre-construcción. CCI alerta rezago." },
  { riesgo: "Tren Cercanías Cali pausado", impacto: "Alto", valor: "$13B sin cofinanciación", detalle: "Gobierno no firmó antes de Ley de Garantías (nov 2025)" },
  { riesgo: "Brecha aeroportuaria", impacto: "Alto", valor: "JMC al 132% capacidad", detalle: "El Dorado necesita EDMAX para sostener crecimiento" },
  { riesgo: "Túnel del Toyo: equipos electromecanicos", impacto: "Alto", valor: "T1 obra civil 99% pero sin equipos", detalle: "Gobierno Petro no ha entregado componente. Antioquia asumió 100% del proyecto" },
  { riesgo: "Falta transversales", impacto: "Estructural", valor: "6+ corredores", detalle: "Territorios sin acceso vial entre troncales N-S" },
  { riesgo: "Cable Potosí suspendido", impacto: "Alto", valor: "$529,000M con 0% obra", detalle: "Contrato adjudicado 2023, meta 2027, pero construcción no ha iniciado. 600K habitantes afectados" },
  { riesgo: "Transcaribe deficit creciente", impacto: "Crítico", valor: "$76,000M deficit 2026", detalle: "Tarifa técnica $6,950 vs usuario $3,500. Riesgo de colapso operacional" },
  { riesgo: "Ejecución presupuestal históricamente baja", impacto: "Crítico", valor: "Solo 7% ejecutado (abr 2025)", detalle: "$4B aplazados. Invias adeuda $1B+ a constructoras. CCI alerta peor ejecución histórica" },
  { riesgo: "Mulalo-Loboguerrero en arbitraje", impacto: "Alto", valor: "+10 años sin avance", detalle: "Covimar pidió terminación contrato. $1.794B bloqueados en patrimonio autonomo" },
  { riesgo: "Puente Pumarejo antiguo sin demoler", impacto: "Medio", valor: "$146,000M desmonte", detalle: "Bloquea navegación Magdalena. Desacato abierto contra Invias" },
  { riesgo: "IED en transporte desplomada", impacto: "Alto", valor: "USD 685M (-61% vs 2022)", detalle: "De USD 1,764M en 2022 a USD 685M en 2025. Senal de baja confianza inversora" },
];

export const concesionesIngresos = [
  { tipo: "Aeroportuarias", recaudo: 1300, color: "#3b82f6" },
  { tipo: "Portuarias", recaudo: 228, color: "#10b981" },
  { tipo: "Ferreas", recaudo: 184, color: "#f59e0b" },
];

export const viasParaLaPaz = [
  "Quibdo-Medellín", "Quibdo-Pereira", "Pasto-Estanquillo",
  "San Francisco-Mocoa ($2.5B)", "Puentes Nacionales (La Doctrina)",
  "Necocli-Arboletes", "Legia-Saravena", "Candelaria-La Plata-Laberinto",
  "Corredores Wayuu (Sentencia T-302)", "Via al Mar Cauca",
  "Transversal Catatumbo ($887,000M)", "Ruta del Arroz: San Marcos-Ayapel",
  "Santa Lucia-Monitos-Puerto Escondido", "Via a El Aro",
  "Arauquita-Saravena", "Mompox-Pinillos",
  "Samaniego-La Llanada-Sotomayor", "Convencion-La Mata",
  "Puente Río Putumayo (Puerto Asís-Teleye)", "Vias del Guavio",
];
