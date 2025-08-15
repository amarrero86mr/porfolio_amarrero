import { useContext } from "react";
import ContactForm from "../components/contactForm";
import { SkillContext, type TSkillContext } from "../components/skills.contexty";

export const Contact = () => {
  const { skillSelected } = useContext<TSkillContext>(SkillContext)
  const selectedSkills: Array<string> = skillSelected; // Tu array dinámico

  return (
    <div>
      <ContactForm skills={selectedSkills} />
    </div>
  );
}
