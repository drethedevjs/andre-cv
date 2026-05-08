"use client";
import { SkillsProps } from "@/interfaces/SkillsProps";
import { motion } from "framer-motion";

const Skills: React.FC<{ skills: Array<SkillsProps> }> = ({ skills }) => {
  return (
    <div className="container mx-auto lg:px-20 md:px-0 px-4 mb-10 mt-10">
      <h2 className="mb-3">Skills</h2>
      <h3 className="mb-5">Proficient</h3>
      <div className="flex flex-wrap gap-1">
        {skills
          .filter((s) => s.proficient)
          .map((s: SkillsProps, idx: number) => (
            <motion.span
              key={idx}
              className="skill"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
            >
              {s.name}
            </motion.span>
          ))}
      </div>

      <h3 className="mt-5 mb-5">Actively Learning</h3>
      <div className="flex flex-wrap gap-1">
        {skills
          .filter((s) => !s.proficient)
          .map((s: SkillsProps, idx: number) => (
            <motion.span
              key={idx}
              className="skill"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
            >
              {s.name}
            </motion.span>
          ))}
      </div>
    </div>
  );
};

export default Skills;
