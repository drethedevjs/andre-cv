'use client'
import { JobProps } from "@/interfaces/JobProps";

const Job: React.FC<{job: JobProps}> = ({ job }) => {
  return (
    <div className="border-8 sm:p-6 p-3 rounded-md">
      <div className="sm:flex">
        <h3 className="sm:mb-1">{job.position}, {job.company}</h3>
        <span className="bg-slate-300 p-1 ml-3 text-sm rounded-lg w-20 h-7 sm:visible invisible">Remote</span>
      </div>
      <h4 className="mb-1"><i>{job.yearRange}</i></h4>

      <ul className="list-disc sm:pl-16 pl-5 md:text-xl">
        {job.description.map((d: string, idx: Number) => {
          return (
              <li key={idx.toString()}>{d}</li>
            )
          })
        }
      </ul>
    </div>
  );
}
 
export default Job;