"use client";
import jobData from "@/data/jobData";
import { motion } from "framer-motion";
import Job from "./Job";

const ExperienceSection = () => {
  return (
    <div className="container mx-auto lg:px-20 px-4">
      <h2 className="mb-5">Experience</h2>
      <div className="grid gap-4 lg:ml-12">
        {jobData.map((jd, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
          >
            <Job job={jd} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
