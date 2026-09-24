import { memberCount } from "./members";

export const worldPartners = [
  { name: "Asociación Civil Argentina de Ayuda a Víctimas de Sectas", href: "https://asocavics.org/", flag: "/uploads/2025/10/mundo-5bf827.svg", country: "ar" },
  { name: "Comunidad de Ex Testigos de Jehová México", href: "https://www.facebook.com/p/Comunidad-de-Ex-Testigos-de-Jehov%C3%A1-M%C3%A9xico-61562062544131/", flag: "/uploads/2025/10/bandera-13b538.svg", country: "mx" },
  { name: "Dales Unidos contra la Violencia Coercitiva", href: "https://www.instagram.com/dales.a.c/", flag: "/uploads/2025/10/bandera-13b538.svg", country: "mx" },
  { name: "exJW Support, UK peer support network", href: "http://www.exjwsupport.co.uk/", flag: "/uploads/2025/10/reino-unido-64dcd5.svg", country: "gb" },
  { name: 'Probudili jsme se - "Nos despertamos"', href: "http://facebook.com/groups/309238966897350", flag: "/uploads/2025/10/republica-checa-8eae56.svg", country: "cz" },
  { name: "JZ Help e.V - Ayuda para las víctimas y los afectados por los Testigos de Jehová", href: "https://jz.help/", flag: "/uploads/2025/10/alemania-702b87.svg", country: "de" },
  { name: "Stichting Against Watchtower Shunning", href: null, flag: "/uploads/2025/10/paises-bajos-825498.svg", country: "nl" },
  { name: "Advocates for Awareness of Watchtower Abuses (AAWA)", href: "https://www.aawa.co/", flag: "/uploads/2025/10/estados-unidos-13253c.svg", country: "us" },
  { name: "Jehovah's Witnesses Support Network (informal, linked to Royal Commission advocacy)", href: "https://www.aawa.co/", flag: "/uploads/2025/10/australia-d02556.svg", country: "au" },
  { name: "Stop Mandated Shunning", href: "https://stopmandatedshunning.org/", flag: "/uploads/2025/11/internacional-b2f5cb.svg", country: null },
  { name: "Reddit r/exjw", href: "https://www.reddit.com/r/exjw/", flag: "/uploads/2025/11/internacional-3ad5aa.svg", country: null },
];

export const stats = [
  { value: String(memberCount), label: "Socios" },
  { value: "25", label: "Asociaciones de víctimas" },
  { value: "8", label: "Juicios ganados" },
];
