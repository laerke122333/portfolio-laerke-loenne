import ProjectPage from "../components/ProjectPage";
export default function Reset({ onContact }) {
  return (
    <ProjectPage
      onContact={onContact}
      category="UX/UI & FRONTEND"
      title="RESET"
      scriptTitle="App"
      intro="Selvvalgt eksamensopgave med fokus på at hjælpe husstande med at holde styr på opgaver, ansvar og point."
      src={`${import.meta.env.BASE_URL}videos/resetvideo.mp4`}
      poster={`${import.meta.env.BASE_URL}images/resetbillede.png`}
      autoPlay
      muted
      loop
      playsInline
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
    />
  );
}