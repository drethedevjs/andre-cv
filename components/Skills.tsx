import { SkillsProps } from "@/interfaces/SkillsProps";

const Skills: React.FC<{ skills: Array<SkillsProps> }> = ({ skills }) => {
  return (
    <div className="container mx-auto lg:px-20 md:px-0 px-4 mb-10 mt-10">
      <h2 className="mb-3">Skills</h2>
      <h3 className="mb-5">Proficient</h3>
      <div className="flex flex-wrap gap-1">
        {skills
          .filter((s) => s.proficient)
          .map((s: SkillsProps, idx: Number) => {
            return (
              <span key={idx.toString()} className="skill">
                {s.name}
              </span>
            );
          })}
      </div>

      <h3 className="mt-5 mb-5">Actively Learning</h3>
      <div className="flex flex-wrap gap-1">
        {skills
          .filter((s) => !s.proficient)
          .map((s: SkillsProps, idx: Number) => {
            return (
              <span key={idx.toString()} className="skill">
                {s.name}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
