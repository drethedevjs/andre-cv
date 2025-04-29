import { JobProps } from "@/interfaces/JobProps";

let jobData: Array<JobProps> = [
  {
    id: 1,
    company_name: "Booz Allen Hamilton",
    position: "Software Engineer II",
    yearRange: "October 2024 - Present",
    position_details: [
      {
        id: 1, // Global unique ID
        description:
          "Used Vue.js and .NET Framework to build out a new screen during system migration.",
        position_id: 1
      },
      {
        id: 2,
        description:
          "Used .NET 8 to create a new API aforementioned screen in keeping with microservices architecture.",
        position_id: 2
      },
      {
        id: 3,
        description:
          "Used Entity Framework Core to perform operations on the data in a SQL Server database.",
        position_id: 3
      }
    ],
    isRemote: true
  },
  {
    id: 2,
    company_name: "Best Lawyers",
    position: "Software Engineer II",
    yearRange: "Jun 2023 - Aug 2024",
    position_details: [
      {
        id: 2,
        description:
          "Using Vue.js, Bootstrap, and .NET MVC, .NET 6 & 7, .NET Framework, and Entity Framework Core to build and maintain pages in our application ecosystem.",
        position_id: 2
      },
      {
        id: 3,
        description:
          "Used Telerik Kendo UI components to update and create web pages.",
        position_id: 2
      },
      {
        id: 4,
        description:
          "Using SQL Server to create stored procedures for new and existing projects.",
        position_id: 2
      },
      {
        id: 5,
        description:
          "Using Azure DevOps to deploy changes to dev and production.",
        position_id: 2
      },
      {
        id: 6,
        description:
          "Used ElasticSearch to query data and add new data to already built data pulls.",
        position_id: 2
      },
      {
        id: 7,
        description:
          "Streamlined publications management process, reducing it from three screens to a single interface. Internal users can now create and manage publications much more efficiently saving time and money.",
        position_id: 2
      },
      {
        id: 8,
        description:
          "Migrated business application features from legacy systems to our new web application. This migration allowed users to conduct research efficiently and to have a more cohesive user experience.",
        position_id: 2
      }
    ],
    isRemote: true
  },
  {
    id: 3,
    company_name: "Plex by Rockwell Automation",
    position: "Software Engineer I",
    yearRange: "May 2021 - Jun 2023",
    position_details: [
      {
        id: 9,
        description:
          "Used .NET MVC, .NET Core, and .NET Framework to build and maintain our ERP web applications and REST APIs.",
        position_id: 3
      },
      {
        id: 10,
        description:
          "Used SQL Server to create stored procedures for new and existing projects and wrote T-SQLT to test them.",
        position_id: 3
      },
      {
        id: 11,
        description:
          "Using Azure DevOps to create pull requests and perform code reviews.",
        position_id: 3
      },
      {
        id: 12,
        description:
          "Used Jira to manage tickets and Confluence to read and contribute to business knowledge.",
        position_id: 3
      },
      {
        id: 13,
        description: "Used xUnit to build unit tests.",
        position_id: 3
      },
      {
        id: 14,
        description: "Created a tracking number feature for user shipments.",
        position_id: 3
      },
      {
        id: 15,
        description:
          "Revamped an internal template for testing records. This streamlined code reviews and the QA process which saves everyone time.",
        position_id: 3
      },
      {
        id: 16,
        description:
          "Developed solutions tailored to customer success projects to present to stakeholders.",
        position_id: 3
      },
      {
        id: 17,
        description:
          "Worked on a team project to build a feature to help users track inventory.",
        position_id: 3
      }
    ],
    isRemote: true
  },
  {
    id: 4,
    company_name: "iDrive Fulfillment",
    position: "Software Engineer I",
    yearRange: "Aug 2019 - May 2021",
    position_details: [
      {
        id: 18,
        description:
          "Using AngularJS and .NET Core and .NET Framework to build and maintain pages in our application ecosystem.",
        position_id: 4
      },
      {
        id: 19,
        description:
          "Used SQL Server to create and maintain stored procedures.",
        position_id: 4
      },
      {
        id: 20,
        description:
          "Re-engineered a notification system so users can subscribe themselves. This freed us engineers from having to do a deployment with every request.",
        position_id: 4
      },
      {
        id: 21,
        description:
          "Built a feature that allowed the CTO to share product release notes with the business. This kept him from crafting and sending long emails to the company and it gave stakeholders a place to see all release notes in one place.",
        position_id: 4
      },
      {
        id: 22,
        description:
          "Integrated Swagger API to help clients easily integrate with our system.",
        position_id: 4
      },
      {
        id: 23,
        description:
          "Maintained an external API for clients who needed to access our data.",
        position_id: 4
      },
      {
        id: 24,
        description: "Integrated Order Bot to our system.",
        position_id: 4
      },
      {
        id: 25,
        description:
          "Worked with CTO to build a program for employees to track their performance. This facilitated friendly competition among the employee which boosted morale.",
        position_id: 4
      }
    ],
    isRemote: true
  },
  {
    id: 5,
    company_name: "Fayette County Public Schools",
    position: "Software Engineer I",
    yearRange: "Sept 2018 - Aug 2019",
    position_details: [
      {
        id: 26,
        description:
          "Developed two .NET Core web applications: one allowing users to log incoming phone calls for administrative assistants, while the other streamlined the management of incoming requests for the dev team.",
        position_id: 5
      },
      {
        id: 27,
        description:
          "Maintained two online forms utilizing a low-code framework and customized logic using C#.",
        position_id: 5
      }
    ],
    isRemote: false
  }
];

export default jobData;
