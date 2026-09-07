import ProjectPage from "../components/ProjectPage";

export default function Reset({ onContact }) {
  return (
    <ProjectPage
      onContact={onContact}
      /* =====================================================
          HERO
      ====================================================== */

      category="UX/UI & FRONTEND"
      title="RESET"
      scriptTitle="App"
      intro="Selvvalgt eksamensopgave med fokus på at hjælpe husstande med at holde styr på opgaver, ansvar og point."
      src={`${import.meta.env.BASE_URL}videos/resetvideo.mp4`}
      poster={`${import.meta.env.BASE_URL}images/resetbillede.png`}
      mediaType="phone"
      /* =====================================================
          PROJEKT OVERBLIK
      ====================================================== */

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
      /* =====================================================
          OM PROJEKTET
      ====================================================== */

      about={[
        "Reset er en digital løsning udviklet med fokus på husstande, hvor flere personer skal deles om hverdagens praktiske opgaver.",

        "Formålet med appen er at skabe et bedre overblik over, hvilke opgaver der skal udføres, hvem der har ansvaret, og hvordan opgaverne bliver fordelt mellem medlemmerne i husstanden.",

        "Løsningen kombinerer opgavestyring med et pointsystem og belønninger. På den måde bliver de praktiske opgaver mere overskuelige, samtidig med at brugerne får en ekstra motivation til at bidrage.",

        "Projektet blev udviklet som mit eksamensprojekt, hvor jeg arbejdede med hele processen fra research og UX/UI-design til udvikling af den fungerende løsning i React og Supabase.",
      ]}
      /* =====================================================
          PROCESSEN
      ====================================================== */

      process={[
        {
          icon: "⌕",
          title: "Research",
          text: "Jeg undersøgte målgruppens behov og udfordringer i forbindelse med fordeling af praktiske opgaver i hjemmet.",
        },

        {
          icon: "✦",
          title: "Koncept",
          text: "På baggrund af researchen udviklede jeg konceptet Reset med fokus på overblik, fordeling, point og belønninger.",
        },

        {
          icon: "▱",
          title: "UX/UI",
          text: "Jeg udviklede struktur, wireframes og prototype i Figma med fokus på en enkel og overskuelig brugeroplevelse.",
        },

        {
          icon: "</>",
          title: "Udvikling",
          text: "Designet blev omsat til en React-applikation, hvor komponenter, state og funktionalitet blev samlet i en SPA.",
        },

        {
          icon: "◉",
          title: "Supabase",
          text: "Supabase blev brugt til at gemme og håndtere blandt andet opgaver, point og belønninger.",
        },
      ]}
      /* =====================================================
          RESULTAT
      ====================================================== */

      results={[
        {
          title: "Overblik over opgaver",
          text: "Brugeren får et samlet overblik over husstandens opgaver og kan hurtigt se, hvad der skal klares.",
          image: `${import.meta.env.BASE_URL}images/resetoverblik.png`,
        },

        {
          title: "Bedre fordeling",
          text: "Opgaver kan fordeles mellem husstandens medlemmer, så det bliver tydeligt, hvem der har ansvaret for hvad.",
          image: `${import.meta.env.BASE_URL}images/resetfordeling.png`,
        },

        {
          title: "Point og belønninger",
          text: "Når brugerne udfører opgaver, kan de optjene point, som gør løsningen mere motiverende og engagerende.",
          image: `${import.meta.env.BASE_URL}images/resetbelønninger.png`,
        },
      ]}
    />
  );
}
