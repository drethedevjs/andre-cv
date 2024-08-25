'use client'
import { JobProps } from "@/interfaces/JobProps";

const Job: React.FC<{job: JobProps}> = ({ job }) => {
  return (
    <div className="border-8 p-6 rounded-md">
      <div className="flex">
        <h3 className="mb-1">{job.position}, {job.company}</h3>
        <span className="bg-slate-300 p-1 ml-3 text-sm rounded-lg w-20 h-7">Remote</span>
      </div>
      <h4 className="mb-1"><i>{job.yearRange}</i></h4>

      <ul className="list-disc pl-16 text-xl">
        {job.description.map((d: string, idx: Number) => {
          return (
              <li key={idx.toString()} >{d}</li>
            )
          })
        }
      </ul>
    </div>
  );
}
 
export default Job;