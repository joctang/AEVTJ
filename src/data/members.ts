// Socios por comunidad autónoma (datos de la asociación, septiembre 2026).
// Las claves coinciden con los ids de @svg-maps/spain.
export const membersByRegion: Record<string, number> = {
  andalusia: 60,
  aragon: 24,
  asturias: 12,
  "balearic-islands": 15,
  "basque-country": 21,
  "canary-islands": 35,
  cantabria: 12,
  "castile-and-leon": 13,
  "castile-la-mancha": 65,
  catalonia: 208,
  extremadura: 3,
  galicia: 24,
  "la-rioja": 3,
  madrid: 161,
  murcia: 26,
  navarre: 5,
  valencia: 88,
};

// Socios sin forma propia en el mapa: se listan aparte bajo él.
export const membersOffMap = [
  { name: "Ceuta", members: 1 },
  { name: "Melilla", members: 2 },
  { name: "Fuera de España", members: 37 },
];

const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);

const membersAbroad = membersOffMap.find((r) => r.name === "Fuera de España")?.members ?? 0;

export const totalMembers = sum(Object.values(membersByRegion)) + sum(membersOffMap.map((r) => r.members));

// Socios residentes en España (comunidades + Ceuta y Melilla).
export const spainMembers = totalMembers - membersAbroad;

// Cifra que muestra la home (titular, texto y estadísticas).
export const memberCount = totalMembers;
