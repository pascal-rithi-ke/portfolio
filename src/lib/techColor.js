import { data } from "@/data/info";

// Teintes réparties avec l'angle d'or pour que chaque techno ait une couleur distincte
const GOLDEN_ANGLE = 137.508;
const SATURATIONS = [75, 55, 90];

const allTechs = [...new Set(data.project.flatMap((project) => project.tech))].sort(
  (a, b) => a.localeCompare(b)
);

const palette = new Map(
  allTechs.map((tech, index) => [
    tech,
    {
      hue: Math.round((index * GOLDEN_ANGLE) % 360),
      saturation: SATURATIONS[index % SATURATIONS.length],
    },
  ])
);

function fallback(name) {
  let hash = 0;
  for (const char of name.toLowerCase()) {
    hash = (hash * 31 + char.codePointAt(0)) >>> 0;
  }
  return { hue: hash % 360, saturation: SATURATIONS[0] };
}

export function techColor(name, { selected = false } = {}) {
  const { hue, saturation } = palette.get(name) ?? fallback(name);
  const textColor = `hsl(${hue} ${Math.min(saturation, 70)}% 27%)`;

  return {
    backgroundColor: `hsl(${hue} ${saturation}% 91%)`,
    color: textColor,
    borderColor: selected ? textColor : `hsl(${hue} ${saturation}% 78%)`,
  };
}
