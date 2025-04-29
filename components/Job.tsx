"use client";
import { JobProps, PositionDetails } from "@/interfaces/JobProps";
import Image from "next/image";

const Job: React.FC<{ job: JobProps }> = ({ job }) => {
  const handleCopy = (positionDetails: Array<PositionDetails>) => {
    let descriptions = positionDetails.map((pd) => pd.description);
    navigator.clipboard.writeText(descriptions.join("\n"));
  };

  return (
    <div className="border-4 border-secondary shadow-md sm:p-6 p-3 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="sm:mb-1">
            {job.position}, {job.company_name}
          </h3>
          <span className="remote">Remote</span>
        </div>

        <Image
          src="\copy-icon.svg"
          alt="Copy icon"
          width={35}
          height={35}
          className="ml-auto p-1 hover:border hover:border-primary hover:rounded-lg active:bg-slate-200 sm:visible invisible"
          onClick={() => handleCopy(job.position_details)}
        />
      </div>
      <h4 className="mb-1">
        <i>{job.yearRange}</i>
      </h4>

      <ul className="list-disc sm:pl-16 pl-5 md:text-xl">
        {job.position_details.map((d: PositionDetails) => {
          return <li key={d.id.toString()}>{d.description}</li>;
        })}
      </ul>
    </div>
  );
};

export default Job;
