'use client'
import { JobProps } from "@/interfaces/JobProps";
import Image from 'next/image';

const Job: React.FC<{job: JobProps}> = ({ job }) => {
  const handleCopy = (description: Array<string>) => navigator.clipboard.writeText(description.join("\n"));

  return (
    <div className="border-4 border-slate-400 shadow-md sm:p-6 p-3 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="sm:mb-1">{job.position}, {job.company}</h3>
          <span className="remote">Remote</span>
        </div>

        <Image
          src="\copy-icon.svg"
          alt="Copy icon"
          width={35}
          height={35}
          className="ml-auto p-1 hover:border hover:border-primary hover:rounded-lg active:bg-slate-200 sm:visible invisible"
          onClick={() => handleCopy(job.description)} />
      </div>
      <h4 className="mb-1"><i>{job.yearRange}</i></h4>

      <ul className="list-disc sm:pl-16 pl-5 md:text-xl">
        {job.description.map((d: string, idx: Number) => {
          return (
            <li key={idx.toString()}>{d}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default Job;