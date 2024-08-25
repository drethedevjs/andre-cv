import Job from "./Job";
import jobData from "@/data/jobData";

const Experience = () => {
  return (
    <div className="container mx-auto lg:px-20">
      <h2 className="mb-5">Experience</h2>
      <div className="indent-2 grid gap-4 ml-12">
        { jobData.map(jd => <Job job={jd} />) }
      </div>
    </div>
  );
}

export default Experience;