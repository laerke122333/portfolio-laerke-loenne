import ProjectPage from "../components/ProjectPage";

export default function StorcenterNord({ onContact }) {
  return (
    <ProjectPage
      onContact={onContact}
      category="UX & DIGITAL DESIGN"
      title="STORCENTER"
      scriptTitle="Nord"
      intro="En digital løsning med fokus på at skabe en mere overskuelig og relevant oplevelse for Storcenter Nords besøgende."
      video="/videos/storcenternordvideo.mp4"
      poster="/images/storcenter-card.png"
      mediaType="phone"
      overview={[
        {
          icon: "◷",
          label: "PROJEKTTYPE",
          value: "UX & digital design",
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
        "Projektet tog udgangspunkt i Storcenter Nords digitale brugeroplevelse og behovet for at gøre information mere overskuelig og relevant for centrets besøgende.",

        "Vi arbejdede med at forstå brugernes behov og med at skabe en løsning, hvor butikker, information og inspiration kunne præsenteres på en mere intuitiv måde.",

        "Gennem research, wireframes og prototyping udviklede vi et digitalt koncept med fokus på en enkel brugerrejse.",
      ]}
      process={[
        {
          icon: "⌕",
          title: "Research",
          text: "Vi undersøgte målgruppen og den nuværende brugeroplevelse.",
        },

        {
          icon: "◎",
          title: "Indsigter",
          text: "Researchen blev samlet til centrale behov og muligheder for forbedring.",
        },

        {
          icon: "▱",
          title: "Wireframes",
          text: "Vi udviklede strukturen og centrale brugerflows i løsningen.",
        },

        {
          icon: "✎",
          title: "Design",
          text: "Det visuelle koncept blev udviklet med fokus på overskuelighed og identitet.",
        },

        {
          icon: "✓",
          title: "Test",
          text: "Prototypen blev afprøvet og justeret ud fra brugerfeedback.",
        },
      ]}
      results={[
        {
          icon: "▦",
          image: "/images/centernord.png",
          title: "Bedre oplevelse for alle",
          text: "Vi arbejde med at gøre hele oplevelsen sjov og enkel for alle aldre.",
        },

        {
          icon: "◎",
          image: "/images/persona.fisk.png",
          title: "Relevant indhold",
          text: "Ud fra vores persona udvalgte vi den valgte information der var nødvendig.",
        },

        {
          icon: "↗",
          image: "/images/fisk.png",
          title: "Sammenhængende visuel oplevelse",
          text: "Vi arbejdede med samme visuelle stil i hele processen for at skabe en sammenhængende oplevelse.",
        },
      ]}
    />
  );
}
