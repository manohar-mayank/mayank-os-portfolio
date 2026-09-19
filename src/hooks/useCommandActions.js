import { useMemo } from "react";
import { contact, gmailUrl } from "../data/profile";
import { usePortfolio } from "../context/PortfolioContext";
import { useScrollTo } from "./useScrollTo";

const destinations = [
  "home",
  "projects",
  "about",
  "skills",
  "assistants",
  "contact",
];

export function useCommandActions() {
  const { setDark, setManmaOpen } = usePortfolio();
  const scrollTo = useScrollTo();
  return useMemo(() => {
    const navigationActions = destinations.map((id) => ({
      id,
      label: `Go to ${id === "assistants" ? "Manma" : id[0].toUpperCase() + id.slice(1)}`,
      hint: "Navigate",
      run: () => scrollTo(id),
    }));
    return [
      ...navigationActions,
      {
        id: "manma",
        label: "Open Manma",
        hint: "AI guide",
        run: () => setManmaOpen(true),
      },

      {
        id: "theme",
        label: "Toggle theme",
        hint: "Appearance",
        run: () => setDark((value) => !value),
      },
      {
        id: "github",
        label: "Open GitHub",
        hint: "External link",
        run: () => window.open(contact.github, "_blank", "noopener"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: "External link",
        run: () => window.open(contact.linkedin, "_blank", "noopener"),
      },
      {
        id: "resume",
        label: "Open resume",
        hint: "PDF",
        run: () => window.open(contact.resume, "_blank", "noopener"),
      },
      {
        id: "email",
        label: "Email Mayank",
        hint: contact.email,
        run: () => window.open(gmailUrl, "_blank", "noopener"),
      },
    ];
  }, [scrollTo, setDark, setManmaOpen]);
}
