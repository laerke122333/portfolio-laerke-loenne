import ProjectPage from "../components/ProjectPage";

export default function North({ onContact }) {
  return (
    <ProjectPage
      onContact={onContact}
      category="CUSTOMER EXPERIENCE & UX/UI"
      title="NORTH"
      scriptTitle="Strik med omtanke"
      intro="Et projekt med fokus på customer experience, research og udviklingen af en sammenhængende digital oplevelse."
      video="/videos/northvideo.mp4"
      poster="/images/north-card.png"
      mediaType="phone"
      overview={[
        {
          icon: "◷",
          label: "PROJEKTTYPE",
          value: "Customer Experience",
        },

        {
          icon: "✎",
          label: "MIN ROLLE",
          value: "UX/UI & research",
        },

        {
          icon: "⌘",
          label: "VÆRKTØJER",
          value: "Figma · Research · Prototype",
        },
      ]}
      about={[
        "North blev udviklet med fokus på customer experience og på at skabe en tydelig og sammenhængende digital brugeroplevelse.",

        "Projektet havde særligt fokus på at forstå målgruppen og skabe et visuelt univers, der understøtter brandets identitet og gør oplevelsen mere overskuelig.",

        "Research, idéudvikling og design blev løbende omsat til wireframes og en interaktiv prototype.",
      ]}
      process={[
        {
          icon: "⌕",
          title: "Research",
          text: "Vi undersøgte målgruppen, behovene og den eksisterende kundeoplevelse.",
        },

        {
          icon: "◌",
          title: "Moodboards",
          text: "Vi arbejdede med visuel retning, farver, stemning og identitet.",
        },

        {
          icon: "▱",
          title: "Wireframes",
          text: "Strukturen blev opbygget med fokus på en rolig og intuitiv brugerrejse.",
        },

        {
          icon: "✎",
          title: "Design",
          text: "Det endelige visuelle design blev udviklet og samlet i Figma.",
        },

        {
          icon: "▶",
          title: "Prototype",
          text: "Designet blev gjort interaktivt, så centrale brugerflows kunne afprøves.",
        },
      ]}
      results={[
        {
          icon: "▦",
          image: "/images/north.png",
          title: "Tydelig struktur",
          text: "Indhold og navigation er organiseret, så brugeren hurtigt kan orientere sig.",
        },

        {
          icon: "♡",
          image: "/images/north.card.png",
          title: "Tryg oplevelse",
          text: "Det visuelle design skaber en rolig og sammenhængende kundeoplevelse.",
        },

        {
          icon: "✦",
          image: "/images/north.personer.png",
          title: "Stærkere identitet",
          text: "Designet understøtter Norths visuelle univers og brandoplevelse.",
        },
      ]}
    />
  );
}
