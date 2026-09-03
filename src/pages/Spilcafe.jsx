import ProjectPage from "../components/ProjectPage";

export default function Spilcafe({ onContact }) {
  return (
    <ProjectPage
      onContact={onContact}
      category="UX/UI & DIGITAL LØSNING"
      title="SPIL"
      scriptTitle="Café"
      intro="En digital løsning til en spilcafé i Aarhus, der hjælper gæster med at finde rundt i caféens store udvalg af spil."
      video="/videos/spilcafevideo.mp4"
      poster="/images/spilcafe.png"
      mediaType="phone"
      overview={[
        {
          icon: "◷",
          label: "PROJEKTTYPE",
          value: "UX/UI projekt",
        },

        {
          icon: "✎",
          label: "MIN ROLLE",
          value: "UX/UI design",
        },

        {
          icon: "⌘",
          label: "VÆRKTØJER",
          value: "Figma · Research · Prototype",
        },
      ]}
      about={[
        "Projektet tog udgangspunkt i en spilcafé med et stort udvalg af brætspil. Udfordringen var, at gæsterne kunne have svært ved hurtigt at finde et spil, der passede til deres behov.",

        "Løsningen blev derfor designet til at give brugerne et bedre digitalt overblik over spillene og gøre det lettere at finde relevante muligheder.",

        "Jeg arbejdede blandt andet med informationsarkitektur, brugerflow, visuel struktur og prototyping i Figma.",
      ]}
      process={[
        {
          icon: "⌕",
          title: "Research",
          text: "Vi undersøgte brugernes adfærd og udfordringer, når de skulle vælge spil.",
        },

        {
          icon: "✦",
          title: "Idéudvikling",
          text: "På baggrund af research udviklede vi idéer til en digital løsning.",
        },

        {
          icon: "▱",
          title: "Wireframes",
          text: "Vi arbejdede med struktur, informationshierarki og brugerflow.",
        },

        {
          icon: "✎",
          title: "Design",
          text: "Det visuelle koncept blev udviklet og samlet i en prototype i Figma.",
        },

        {
          icon: "✓",
          title: "Test",
          text: "Prototypen blev testet med fokus på forståelighed og navigation.",
        },
      ]}
      results={[
        {
          icon: "▦",
          image: "/images/spilcafefilter.png",
          title: "Overblik over spil",
          text: "Brugeren kan hurtigt danne sig et overblik over caféens spiludvalg.",
        },

        {
          icon: "⌕",
          image: "/images/spilcafe.png",
          title: "Lettere valg",
          text: "Strukturen hjælper gæsten med at finde spil, der passer til situationen.",
        },

        {
          icon: "♡",
          image: "/images/spil-cafe.card.png",
          title: "Bedre oplevelse",
          text: "Løsningen understøtter en mere overskuelig oplevelse i caféen.",
        },
      ]}
    />
  );
}
