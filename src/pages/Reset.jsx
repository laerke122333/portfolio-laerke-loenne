import ProjectPage from "../components/ProjectPage";

export default function Reset({ onContact }) {
  return (
    <ProjectPage
      onContact={onContact}
      category="UX/UI & FRONTEND"
      title="RESET"
      scriptTitle="App"
      intro="Selvvalgt eksamensopgave med fokus på at hjælpe husstande med at holde styr på opgaver, ansvar og point."
      video="/videos/resetvideo.mp4"
      poster="/images/reset-card.png"
      mediaType="phone"
      overview={[
        {
          icon: "◷",
          label: "PROJEKTTYPE",
          value: "Eksamensprojekt",
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
        "Reset er en digital løsning, der skal gøre det lettere for husstande at skabe overblik over hverdagens praktiske opgaver.",

        "Brugerne kan oprette, fordele og færdiggøre opgaver og samtidig optjene point. Ideen er at skabe en mere motiverende og overskuelig måde at fordele ansvar på.",

        "I projektet arbejdede jeg både med brugeroplevelsen, det visuelle design og udviklingen af løsningen i React med data fra Supabase.",
      ]}
      process={[
        {
          icon: "⌕",
          title: "Research",
          text: "Jeg undersøgte målgruppens behov og udfordringer med fordeling af opgaver i hjemmet.",
        },

        {
          icon: "✦",
          title: "Idéudvikling",
          text: "Indsigterne blev omsat til koncept, funktioner og de første idéer til Reset.",
        },

        {
          icon: "▱",
          title: "Wireframes",
          text: "Jeg udviklede de første skitser og brugerflows med fokus på en enkel navigation.",
        },

        {
          icon: "✎",
          title: "Design",
          text: "I Figma udviklede jeg det visuelle udtryk, komponenter og den interaktive prototype.",
        },

        {
          icon: "</>",
          title: "Udvikling",
          text: "Løsningen blev udviklet i React og koblet sammen med Supabase.",
        },
      ]}
      results={[
        {
          icon: "✓",
          image: "/images/resetbillede.png",
          title: "Overblik over opgaver",
          text: "Brugeren får hurtigt et samlet overblik over husstandens aktuelle opgaver.",
        },

        {
          icon: "↔",
          image: "/images/resetoverblik.png",
          title: "Nem fordeling",
          text: "Opgaver kan tydeligt fordeles mellem personerne i husstanden.",
        },

        {
          icon: "★",
          image: "/images/resetbelønninger.png",
          title: "Motivation",
          text: "Pointsystemet tilfører gamification og gør opgaverne mere motiverende.",
        },
      ]}
    />
  );
}
