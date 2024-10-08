import { JobProps } from "@/interfaces/JobProps";

let jobData: Array<JobProps> = [{
  company: "Best Lawyers",
  position: "Software Engineer II",
  yearRange: "Jun 2023 - Aug 2024",
  description: [
    "Using Vue.js, Bootstrap, and .NET MVC, .NET 6 & 7, .NET Framework, and Entity Framework Core to build and maintain pages in our application ecosystem.",
    "Used Telerik Kendo UI components to update and create web pages.",
    "Using SQL Server to create stored procedures for new and existing projects.",
    "Using Azure DevOps to deploy changes to dev and production.",
    "Used ElasticSearch to query data and add new data to already built data pulls.",
    "Streamlined publications management process, reducing it from three screens to a single interface. Internal users can now create and manage publications much more efficiently saving time and money.",
    "Migrated business application features from legacy systems to our new web application. This migration allowed users to conduct research efficiently and to have a more cohesive user experience."
  ],
  isRemote: true
},
{
  company: "Plex by Rockwell Automation",
  position: "Software Engineer I",
  yearRange: "May 2021 - Jun 2023",
  description: [
    "Used .NET MVC, .NET Core, and .NET Framework to build and maintain our ERP web applications and REST APIs.",
    "Used SQL Server to create stored procedures for new and existing projects and wrote T-SQLT to test them.",
    "Using Azure DevOps to create pull requests and perform code reviews.",
    "Used Jira to manage tickets and Confluence to read and contribute to business knowledge.",
    "Used xUnit to build unit tests.",
    "Created a tracking number feature for user shipments.",
    "Revamped an internal template for testing records. This streamlined code reviews and the QA process which saves everyone time.",
    "Developed solutions tailored to customer success projects to present to stakeholders.",
    "Worked on a team project to build a feature to help users track inventory."
  ],
  isRemote: true
},
{
  company: "iDrive Fulfillment",
  position: "Software Engineer I",
  yearRange: "Aug 2019 - May 2021",
  description: [
    "Using AngularJS and .NET Core and .NET Framework to build and maintain pages in our application ecosystem.",
    "Used SQL Server to create and maintain stored procedures.",
    "Re-engineered a notification system so users can subscribe themselves. This freed us engineers from having to do a deployment with every request.",
    "Built a feature that allowed the CTO to share product release notes with the business. This kept him from crafting and sending long emails to the company and it gave stakeholders a place to see all release notes in one place.",
    "Integrated Swagger API to help clients easily integrate with our system.",
    "Maintained an external API for clients who needed to access our data.",
    "Integrated Order Bot to our system.",
    "Worked with CTO to build a program for employees to track their performance. This facilitated friendly competition among the employee which boosted morale."
  ],
  isRemote: true
},
{
  company: "Fayette County Public Schools",
  position: "Software Engineer I",
  yearRange: "Sept 2018 - Aug 2019",
  description: [
    "Developed two .NET Core web applications: one allowing users to log incoming phone calls for administrative assistants, while the other streamlined the management of incoming requests for the dev team.",
    "Maintained two online forms utilizing a low-code framework and customized logic using C#."
  ],
  isRemote: false
}];

export default jobData;