'use client'
import { JobProps } from "@/types/JobProps";

const Job: React.FC<{job: JobProps}> = ({ job }) => {
  return (
    <div className="border-8 p-6 rounded-md">
      <h2 className="mb-1">{job.position}, {job.company}</h2>
      <h3 className="mb-1"><i>{job.yearRange}</i></h3>
      <ul className="list-disc pl-16 text-xl">
        {job.description.map((d: string) => {
          return (
              <li>{d}</li>
            )
          })
        }
      </ul>
    </div>
  );
}
 
export default Job;