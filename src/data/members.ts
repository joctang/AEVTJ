// Socios por comunidad autónoma, extraídos del mapa "Miembros de la Asociación"
// (Interactive Geo Maps, post 3344) del WordPress original.
export const membersByRegion: Record<string, number> = {
  andalusia: 59,
  aragon: 22,
  asturias: 9,
  "balearic-islands": 14,
  "basque-country": 19,
  "canary-islands": 34,
  cantabria: 11,
  "castile-and-leon": 8,
  "castile-la-mancha": 55,
  catalonia: 184,
  extremadura: 3,
  galicia: 22,
  "la-rioja": 3,
  madrid: 143,
  murcia: 25,
  navarre: 5,
  valencia: 77,
};

export const totalMembers = Object.values(membersByRegion).reduce((a, b) => a + b, 0);
