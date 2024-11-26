'use client'
import jobData from "@/data/jobData";
import { JobProps } from "@/interfaces/JobProps";
import { useState } from "react";
import Job from "./Job";

const Experience = () => {
  const [ experience, setExperience ] = useState<JobProps[]>(jobData);
  // setExperience(jobData);
  // useEffect(() => {
  //   const getExperience = async () => {
  //     let res = await fetch("/experience");
  //     if (!res.ok) {
  //       console.error("No experience found");
  //       return;
  //     }

  //     let data = await res.json();
  //     setExperience(data);
  //   }

  //   try {
  //     getExperience();
  //   } catch (error: any) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <div className="container mx-auto lg:px-20 px-4">
      <h2 className="mb-5">Experience</h2>
      <div className="indent-2 grid gap-4 lg:ml-12">
        { experience.map((jd, idx) => <Job key={idx} job={jd} />) }
      </div>
    </div>
  );
}

export default Experience;