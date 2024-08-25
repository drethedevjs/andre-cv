import { SkillsProps } from "@/interfaces/SkillsProps";

const Skills: React.FC<{skills: Array<string>}> = ({skills}) => {
  return (
    <div className="container mx-auto lg:px-20 md:px-0  mb-10 mt-10">
      <h2 className="mb-3">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((s:string, idx: Number) => {
          return (
            <span 
              key={idx.toString()} 
              className="p-2 text-xl bg-slate-600 text-cyan-100 rounded-md"
            >
              {s}
            </span>
          )
        })}
      </div>
    </div>
  );
}
 
export default Skills;