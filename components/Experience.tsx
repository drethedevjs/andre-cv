import { JobProps } from "@/types/JobProps";
import Job from "./Job";

const Experience = () => {
  let job: JobProps = {
    company: "Best Lawyers",
    position: "Software Engineer II",
    yearRange: "Jun 2023 - Aug 2024",
    description: [
      "Using Vue.js, Bootstrap, and .NET MVC, .NET 6 & 7, .NET Framework, and Entity Framework Core to build and maintain pages in our application ecosystem.",
      "Used Telerik Kendo UI components to update and create web pages.",
      "Using SQL Server to create stored procedures for new and existing projects."
    ],
    isRemote: true
  };
  
  return (
    <div className="container mx-auto px-20 mb-10">
      <h1 className="mb-5">Experience</h1>
      <div className="indent-2 grid gap-4 ml-12">
        <Job job={job} />
      </div>
    </div>
  );
}
 
export default Experience;