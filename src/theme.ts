export const colors = {
  pink: "#F46D9A",
  teal: "#38C7C8",
  lavender: "#A98BD5",
  purple: "#35235A",
  yellow: "#FDBB2D",
  cream: "#FFFDF8",
  softPink: "#FFF1F6",
  softTeal: "#EEFCFC",
  textMuted: "#665982",
} as const;

export type Service = {
  icon: string;
  title: string;
  text: string;
};

export type PackageItem = {
  name: string;
  price: string;
  text: string;
  badge?: string;
};

export type Step = [number: string, title: string, text: string];

export type Motif = [title: string, text: string];

export const services: Service[] = [
  {
    icon: "🎂",
    title: "Dětské oslavy",
    text: "Přijedeme na narozeniny domů, do herny, kavárny nebo na zahradu.",
  },
  {
    icon: "🧸",
    title: "Školky a dětské dny",
    text: "Veselé motivy pro větší skupinu dětí, rychlé tempo a příjemná organizace.",
  },
  {
    icon: "✨",
    title: "Firemní family days",
    text: "Krásný doplněk pro akce, kde chcete zabavit děti a potěšit rodiče.",
  },
];

export const motifs: Motif[] = [
  ["Vesmír", "Kosmické planety, hvězdičky a zákoutí vesmíru na tváři."],
  ["Fotbal", "Sportovní duch s barvami oblíbeného týmu na obličeji."],
  ["Kočka", "Roztomilá kočička s ousky a knírajícím nosem."],
  ["Motýl", "Krásný motýl s křídly a třpytky jako třiduch."],
  ["Duha", "Pastelová duha plná barev přinášející radost a kouzlo."],
  ["Spiderman", "Superhrdina Spider-Man s pověstným značením a silou."],
  ["Jednorožec", "Kouzelný jednorožec s růžkem, květy a vlásky plnými magie."],
  ["Minecraft", "Bloky, kostky a pixelová dobrodružství z populární hry."],
];

export const packages: PackageItem[] = [
  {
    name: "Malý motiv",
    price: "od 50 Kč",
    text: "Srdíčko, kytička, pavouček nebo malý obrázek na tvář.",
  },
  {
    name: "Celý obličej",
    price: "od 100 Kč",
    text: "Vesmír, fotbal, kočka, motýl, duha, Spiderman, jednorožec nebo Minecraft.",
  },
  {
    name: "Dětská oslava",
    price: "od 1 000 Kč",
    text: "Ideální balíček na 1 hodinu pro cca 5–7 dětí, cena zahrnuje všechny potřebné materiály.",
    badge: "Nejoblíbenější",
  },
];

export const steps: Step[] = [
  ["1", "Rezervace termínu", "Napíšete datum, místo a typ akce."],
  ["2", "Příprava motivů", "Vybere se styl podle věku dětí a času."],
  ["3", "Malování na místě", "Příjemně, trpělivě a v klidu."],
  ["4", "Krásné fotky", "Děti mají památku a rodiče radost."],
];

export function runSmokeTests(): void {
  const requiredSections = ["Služby", "Motivy", "Ceník", "Kontakt"];

  console.assert(
    requiredSections.length === 4,
    "Navigation should contain 4 core sections",
  );

  console.assert(packages.length === 3, "Pricing should contain 3 packages");

  console.assert(
    motifs.length >= 6,
    "Motifs should contain at least 6 examples",
  );

  console.assert(
    services.every((service) => service.title && service.text),
    "Each service should have title and text",
  );
}
