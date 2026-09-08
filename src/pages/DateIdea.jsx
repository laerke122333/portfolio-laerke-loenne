import ProjectPage from "../components/ProjectPage";

export default function DateIdea({ onContact }) {
  return (
    <ProjectPage
      onContact={onContact}
      category="FRITIDSPROJEKT · UX/UI & FRONTEND"
      title="DATE IDEA"
      scriptTitle="For couples"
      intro={
        <>
          Et personligt projekt udviklet i min fritid med fokus på at gøre det
          nemmere og sjovere for par at finde inspiration til nye dates.
          <a
            href="https://laerke122333.github.io/date-idea-app/"
            target="_blank"
            rel="noreferrer"
            className="project-live-link"
          >
            Se live app →
          </a>
        </>
      }
      src={`${import.meta.env.BASE_URL}videos/dateideas.MP4`}
      poster={`${import.meta.env.BASE_URL}images/dateideer.png`}
      mediaType="phone"
    
      overview={[
        {
          icon: "◷",
          label: "PROJEKTTYPE",
          value: "Fritidsprojekt",
        },
        {
          icon: "✎",
          label: "MIN ROLLE",
          value: "UX/UI design & frontend",
        },
        {
          icon: "⌘",
          label: "VÆRKTØJER",
          value: "Figma · React · Supabase",
        },
      ]}
      about={[
        "Date Idea er et personligt projekt, som jeg har udviklet i min fritid. Idéen opstod ud fra ønsket om at gøre det lettere for par at finde inspiration til nye oplevelser sammen.",

        "Løsningen samler forskellige dateidéer i kategorier som romantisk, hyggeligt, kreativt, sjovt, udendørs, hjemme og billigt.",

        "Jeg har arbejdet med både det visuelle design og funktionaliteten i appen og haft fokus på at skabe en enkel, hyggelig og overskuelig brugeroplevelse.",

        "Projektet har samtidig givet mig mulighed for at arbejde videre med React og Supabase uden for undervisningen og selv udvikle nye funktioner undervejs.",
      ]}
      process={[
        {
          icon: "✦",
          title: "Idé",
          text: "Projektet startede som en idé til en app, der kunne gøre det lettere for par at finde inspiration til dates.",
        },
        {
          icon: "▱",
          title: "UX/UI",
          text: "Jeg udviklede appens visuelle udtryk og struktur med fokus på en enkel og hyggelig brugeroplevelse.",
        },
        {
          icon: "</>",
          title: "Udvikling",
          text: "Designet blev omsat til en fungerende React-app med flere interaktive funktioner.",
        },
        {
          icon: "♡",
          title: "Partnerfunktion",
          text: "Jeg arbejdede med muligheden for at forbinde sig med sin partner og skabe en mere personlig fælles oplevelse.",
        },
        {
          icon: "◉",
          title: "Videreudvikling",
          text: "Projektet bliver løbende forbedret med nye dateidéer, funktioner og justeringer af brugeroplevelsen.",
        },
      ]}
      results={[
        {
          title: "Dateidéer efter kategori",
          text: "Brugeren kan finde inspiration ud fra forskellige kategorier og vælge den type date, der passer til situationen.",
          image: `${import.meta.env.BASE_URL}images/date.PNG`,
        },
        {
          title: "Find en tilfældig date",
          text: "En mere legende funktion gør det muligt at få valgt en dateidé og skabe spontanitet.",
          image: `${import.meta.env.BASE_URL}images/date.spin.PNG`,
        },
        {
          title: "Gem jeres oplevelser",
          text: "Dates kan markeres som prøvet, så parret kan gemme minder, dato og billeder fra oplevelsen.",
          image: `${import.meta.env.BASE_URL}images/dateideer.PNG`,
        },
      ]}
    />
  );
}
