export type SupportKind = "specific" | "general" | "specialist" | "remote";

export type SupportResource = {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  city?: string;
  name: string;
  kind: SupportKind;
  summary: string;
  languages?: string;
  website?: string;
  email?: string;
  phone?: string;
  hours?: string;
  formUrl?: string;
  sourceUrl: string;
  verifiedAt: "2026-09-25";
  notice?: string;
  sexualAbuse?: boolean;
};

const verifiedAt = "2026-09-25" as const;

export const internationalSupport: SupportResource[] = [
  { id: "asocavics", country: "Argentina", countryCode: "ar", flag: "🇦🇷", name: "ASOCAVICS", kind: "specific", summary: "Asociación de apoyo a víctimas de sectas; solo consta un formulario indexado.", formUrl: "https://asocavics.org/contacto/", sourceUrl: "https://asocavics.org/contacto/", verifiedAt, notice: "Canal sin comprobación de respuesta. El dominio no resolvió durante la revisión; puede no estar disponible." },
  { id: "cifs", country: "Australia", countryCode: "au", flag: "🇦🇺", name: "Cult Information and Family Support (CIFS)", kind: "general", summary: "Información y apoyo a exmiembros y familiares; ofrece encuentros por Zoom.", website: "https://www.cifs.org.au/", email: "info@cifs.org.au", phone: "+61 423 332 766", formUrl: "https://www.cifs.org.au/contact/", sourceUrl: "https://www.cifs.org.au/contact/", verifiedAt },
  { id: "infosecte", country: "Canadá", countryCode: "ca", flag: "🇨🇦", city: "Montreal", name: "Info-Secte / Info-Cult", kind: "general", summary: "Información y apoyo general ante grupos de alto control.", languages: "Web en francés e inglés", website: "https://infosecte.org/", email: "info@infosecte.org", phone: "+1 514 274 2333", sourceUrl: "https://infosecte.org/equipe/", verifiedAt },
  { id: "change-of-path", country: "Canadá", countryCode: "ca", flag: "🇨🇦", city: "Ontario / Zoom", name: "Change of Path · Shunning Recovery Support Group", kind: "remote", summary: "Grupo de pares para personas desde 16 años afectadas por ostracismo religioso, principalmente ex Testigos.", email: "info@listeningtreestudio.ca", phone: "+1 226 838 9772", hours: "Segundo miércoles de cada mes, 19:00–20:30, hora de Ontario", formUrl: "https://211ontario.ca/service/71895166/change-of-path-support-group-for-people-leaving-faith-communities-shunning-recovery-support-group/", sourceUrl: "https://211ontario.ca/service/71895166/change-of-path-support-group-for-people-leaving-faith-communities-shunning-recovery-support-group/", verifiedAt },
  { id: "infosekta", country: "Suiza", countryCode: "ch", flag: "🇨🇭", city: "Zúrich", name: "infoSekta", kind: "general", summary: "Centro generalista con un grupo específico para ex Testigos.", languages: "Web en alemán", website: "https://www.infosekta.ch/was-wir-bieten/", email: "info@infosekta.ch", phone: "+41 44 454 80 80", hours: "Lunes 17:00–19:00; jueves y viernes 09:00–12:00, hora de Suiza", sourceUrl: "https://www.infosekta.ch/kontakt/", verifiedAt },
  { id: "jz-help", country: "Alemania", countryCode: "de", flag: "🇩🇪", name: "JZ Help e.V.", kind: "specific", summary: "Apoyo e información para personas afectadas por los Testigos de Jehová.", languages: "Web en alemán e inglés", website: "https://jz.help/en/", email: "info@jz.help", sourceUrl: "https://jz.help/en/", verifiedAt },
  { id: "ausstieg", country: "Alemania", countryCode: "de", flag: "🇩🇪", name: "Ausstieg e.V.", kind: "specific", summary: "Orientación para personas que salen de grupos religiosos de alto control y sus familiares.", languages: "Web en alemán", website: "https://ausstieg-info.de/kontakt/", email: "kontakt@ausstieg.info", sourceUrl: "https://ausstieg-info.de/kontakt/", verifiedAt },
  { id: "xjv", country: "Dinamarca", countryCode: "dk", flag: "🇩🇰", name: "Støtteforeningen for tidligere Jehovas Vidner", kind: "specific", summary: "Grupo de apoyo para antiguos Testigos de Jehová.", website: "https://xjv.dk/", sourceUrl: "https://xjv.dk/stottegruppen/behov.php", verifiedAt, notice: "Vigencia pendiente: los datos de su web parecen antiguos y no se ha comprobado que responda. Confirma el canal antes de usarlo." },
  { id: "uut", country: "Finlandia", countryCode: "fi", flag: "🇫🇮", name: "Uskontojen uhrien tuki UUT ry", kind: "general", summary: "Apoyo a personas afectadas por comunidades religiosas, con grupo para ex Testigos en Helsinki.", website: "https://www.uskontojenuhrientuki.fi/", email: "tiedotus@uut.fi", phone: "+358 400 466 990", hours: "Línea de pares: martes 18:00–20:00; jueves y sábado 13:00–15:00, hora de Finlandia. No es línea de crisis.", sourceUrl: "https://www.uskontojenuhrientuki.fi/loyda-tukea/puhelimet/", verifiedAt },
  { id: "escape-france", country: "Francia", countryCode: "fr", flag: "🇫🇷", name: "Escape Cult Mind Control France", kind: "specific", summary: "Entidad centrada en personas afectadas por los Testigos de Jehová.", email: "escapejwmindcontrol.france@gmail.com", phone: "+33 6 12 10 21 78", sourceUrl: "https://www.gemppi.org/contact/", verifiedAt, notice: "Contacto publicado por GEMPPI; no se verificó una página de contacto propia ni la respuesta." },
  { id: "gemppi", country: "Francia", countryCode: "fr", flag: "🇫🇷", city: "Marsella y red regional", name: "GEMPPI", kind: "general", summary: "Acogida general y corresponsales especializados en Testigos de Jehová.", website: "https://www.gemppi.org/contact/", email: "gemppi.contact@gmail.com", phone: "+33 6 98 02 57 03", hours: "Lunes a sábado, horario de oficina francés", sourceUrl: "https://www.gemppi.org/contact/", verifiedAt },
  { id: "caffes", country: "Francia", countryCode: "fr", flag: "🇫🇷", city: "Lille", name: "CAFFES", kind: "general", summary: "Escucha y orientación ante control y abuso por grupos de alto control.", phone: "+33 3 20 57 26 77", hours: "Martes a viernes 08:30–12:30, hora de Francia", formUrl: "https://caffes.fr/contact/", sourceUrl: "https://caffes.fr/contact/", verifiedAt },
  { id: "unadfi", country: "Francia", countryCode: "fr", flag: "🇫🇷", name: "UNADFI / ADFI", kind: "general", summary: "Orientación ante derivas sectarias mediante una red de oficinas territoriales.", website: "https://www.unadfi.org/contactez-votre-adfi/", email: "documentation@unadfi.org", phone: "+33 1 34 00 14 58", hours: "Lunes a viernes 09:30–13:00 y 14:00–17:00, salvo lunes por la mañana y viernes por la tarde, hora de Francia", sourceUrl: "https://www.unadfi.org/contactez-votre-adfi/", verifiedAt },
  { id: "faith-to-faithless", country: "Reino Unido", countryCode: "gb", flag: "🇬🇧", name: "Faith to Faithless · Humanists UK", kind: "specific", summary: "Apoyo para quienes dejan religiones de alto control; menciona expresamente a ex Testigos.", website: "https://humanists.uk/faith-to-faithless/", email: "helpline@faithtofaithless.com", phone: "0800 448 0748", hours: "Lunes y miércoles 10:00–13:00; jueves 16:00–19:00, hora del Reino Unido", sourceUrl: "https://humanists.uk/faith-to-faithless/", verifiedAt },
  { id: "dialogcentre", country: "Reino Unido", countryCode: "gb", flag: "🇬🇧", name: "DialogCentre UK", kind: "general", summary: "Información y ayuda a exmiembros y familias afectados por grupos de alto control.", website: "https://dialogcentre.org.uk/contact/", email: "help@dialogcentre.org.uk", phone: "+44 1235 200 404", formUrl: "https://dialogcentre.org.uk/contact/", sourceUrl: "https://dialogcentre.org.uk/contact/", verifiedAt },
  { id: "quovadis", country: "Italia", countryCode: "it", flag: "🇮🇹", city: "Módena", name: "Quo Vadis APS · Veramente Liberi", kind: "general", summary: "Programa de primera escucha y orientación que incluye a ex Testigos.", languages: "Web en italiano", website: "https://www.veramenteliberi.org/", email: "quovadisaps@gmail.com", phone: "+39 392 153 9014", formUrl: "https://www.quovadisaps.com/contatti/", sourceUrl: "https://www.quovadisaps.com/contatti/", verifiedAt },
  { id: "tro-uten-tvang", country: "Noruega", countryCode: "no", flag: "🇳🇴", name: "Tro uten tvang", kind: "specific", summary: "Orientación práctica y apoyo social para Testigos actuales o anteriores.", website: "https://troutentvang.no/", formUrl: "https://troutentvang.no/#kontakt", sourceUrl: "https://troutentvang.no/", verifiedAt },
  { id: "uncult", country: "Nueva Zelanda", countryCode: "nz", flag: "🇳🇿", city: "Christchurch", name: "Uncult Ōtautahi", kind: "general", summary: "Grupo presencial de pares para adultos de 18 años o más que han salido de grupos de alto control.", hours: "Segundo lunes de cada mes, 18:30, hora de Christchurch; inscripción previa", formUrl: "https://www.uncult.support/", sourceUrl: "https://www.uncult.support/", verifiedAt },
  { id: "liberati", country: "Estados Unidos", countryCode: "us", flag: "🇺🇸", name: "The Liberati", kind: "remote", summary: "Apoyo entre pares y recursos prácticos para quienes dejan los Testigos de Jehová.", website: "https://theliberati.org/", email: "supportteam@theliberati.org", formUrl: "https://theliberati.org/", sourceUrl: "https://theliberati.org/", verifiedAt },
  { id: "silentlambs", country: "Estados Unidos", countryCode: "us", flag: "🇺🇸", name: "Silentlambs", kind: "specialist", summary: "Recurso específico para supervivientes de abuso sexual en el entorno de Testigos de Jehová.", sexualAbuse: true, website: "https://silentlambs.org/", email: "info@silentlambs.org", phone: "+1 877 982 2873", sourceUrl: "https://silentlambs.org/contact-us/", verifiedAt },
  { id: "free-from-faith", country: "Sudáfrica", countryCode: "za", flag: "🇿🇦", name: "Free From Faith Helpline · South African Secular Society", kind: "general", summary: "Escucha entre pares para personas que cuestionan o dejan una religión.", phone: "+27 10 500 7715", hours: "Todos los días 18:00–20:00, hora de Sudáfrica (CAT)", sourceUrl: "https://www.secularsociety.org.za/the-sass-free-from-faith-helpline/", verifiedAt },
  { id: "recovering-from-religion", country: "Internacional", countryCode: "international", flag: "🌍", name: "Recovering from Religion", kind: "remote", summary: "Apoyo general remoto a quienes dudan, cambian o dejan una religión.", website: "https://www.recoveringfromreligion.org/", formUrl: "https://www.recoveringfromreligion.org/webcall", sourceUrl: "https://www.recoveringfromreligion.org/", verifiedAt, notice: "La disponibilidad inmediata y la atención en español no están garantizadas." },
];

export const supportCountries = [...new Set(internationalSupport.filter((r) => r.countryCode !== "international").map((r) => r.countryCode))]
  .map((code) => {
    const resources = internationalSupport.filter((r) => r.countryCode === code);
    return { code, country: resources[0].country, flag: resources[0].flag, resources };
  })
  .sort((a, b) => a.country.localeCompare(b.country, "es"));

export const remoteResources = internationalSupport.filter((r) => r.countryCode === "international");
