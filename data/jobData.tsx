import { JobProps } from "@/interfaces/JobProps";

let jobData: Array<JobProps> = [
  {
    id: 6,
    company_name: "Booz Allen Hamilton",
    position: "Software Engineer III",
    yearRange: "April 2026 - Present",
    position_details: [
      {
        id: 101,
        description:
          "Diagnosed and remediated an XSS-exploitable authentication vulnerability in PHLIP by moving JWT storage from client-side sessionStorage to an HTTP-only cookie, with all token management handled server-side.",
        position_id: 6,
        addToResume: true
      },
      {
        id: 102,
        description:
          "Led a two-version React upgrade (v16 to v18) for PHLIP as the sole engineer on the project.",
        position_id: 6,
        addToResume: true
      },
      {
        id: 103,
        description:
          "Partnered with another engineer to resolve a recurring production crash in the National Firefighter Registry (Mendix app on Azure Container Apps); investigated via Azure log analysis to pinpoint the failure to an unbounded database query, then brainstormed the fix together, capping the query and increasing Azure Container App memory allocation.",
        position_id: 6,
        addToResume: true
      },
      {
        id: 104,
        description:
          "Contributed supporting CSS fixes for the National Firefighter Registry (NFR) web app and communicated technical findings and solutions to PM/BA stakeholders via standups and ad hoc calls, translating technical issues into actionable, non-technical terms.",
        position_id: 6,
        addToResume: true
      },
      {
        id: 105,
        description:
          "Architected and built Prompt Buddy, a full-stack tool (Next.js, .NET Azure Function App, SQL Server) for centralizing reusable AI prompts, skills, and agent configuration files for the engineering team; directed a second engineer added to the project.",
        position_id: 6,
        addToResume: true
      },
      {
        id: 106,
        description:
          "Scoped a prepopulation strategy for Prompt Buddy ahead of deployment, sourcing content from the target team's existing prompt/skill library to accelerate initial adoption.",
        position_id: 6,
        addToResume: true
      },
      {
        id: 107,
        description:
          "Remediated ~40 application security findings on PHLIP, reducing all critical, high, and medium severity findings to zero within two weeks, including documented false-positive justifications for the formal remediation record.",
        position_id: 6,
        addToResume: true
      },
      {
        id: 108,
        description:
          "Established continuous application security scanning on PHLIP and NFR using OpenText Fortify Audit Workbench (SAST) and OpenText Application Security CE 25.4 (DAST) on every code change to prevent regression.",
        position_id: 6,
        addToResume: true
      },
      {
        id: 109,
        description:
          "Remediated ~50 Section 508 (federal accessibility) findings across two CDC applications (EASI, Navigator) — covering ARIA labeling, keyboard navigation, color contrast, DOM ordering, and modal focus management — using Axe automated testing, achieving formal compliance sign-off with fixes deployed to production.",
        position_id: 6,
        addToResume: true
      }
    ],
    isRemote: true
  },
  {
    id: 1,
    company_name: "Booz Allen Hamilton",
    position: "Software Engineer II",
    yearRange: "October 2024 - April 2026",
    position_details: [
      {
        id: 1,
        description:
          "Used Vue.js and .NET Framework to build out a new screen during system migration.",
        position_id: 1,
        addToResume: true
      },
      {
        id: 2,
        description:
          "Used .NET 8 to create a new API aforementioned screen in keeping with microservices architecture.",
        position_id: 2,
        addToResume: true
      },
      {
        id: 3,
        description:
          "Used Entity Framework Core to perform operations on the data in a SQL Server database.",
        position_id: 3,
        addToResume: true
      },
      {
        id: 4,
        description:
          "Migrating old APIs to use newer .NET 8 and Entity Framework Core features.",
        position_id: 4,
        addToResume: true
      },
      {
        id: 5,
        description:
          "Migrating React, Express.js, Node, Mongo (MERN), and .NET app from two virtual machines to three Azure App Services.",
        position_id: 5,
        addToResume: true
      },
      {
        id: 6,
        description:
          "Building features and squashing bugs in Vuejs 2 and .NET Framework 4.7.2 system.",
        position_id: 6,
        addToResume: true
      },
      {
        id: 7,
        description: "Managing tickets and deployments in Azure DevOps.",
        position_id: 7,
        addToResume: true
      },
      {
        id: 8,
        description:
          "Supporting the lift-and-shift migration of the National Firefighter's Registry for Cancer application by serving as a technical liaison to non-technical team members and fielding their engineering questions.",
        position_id: 1,
        addToResume: true
      },
      {
        id: 9,
        description:
          "Running DAST and SAST scans on the deployed containerized application and codebase to identify security vulnerabilities, and collaborating with the lead developer to remediate discovered issues.",
        position_id: 1,
        addToResume: true
      },
      {
        id: 10,
        description:
          "Independently building a full rewrite of the National Firefighter's Registry application using Next.js and the U.S. Web Design System (USWDS) CSS library, using AI-assisted development with deliberate step-by-step code review to ensure accuracy and quality.",
        position_id: 1,
        addToResume: true
      },
      {
        id: 11,
        description:
          "Leading AI adoption efforts on the team by researching and sharing findings and hands-on experiences with engineers who are newer to AI-assisted development workflows.",
        position_id: 1,
        addToResume: true
      },
      {
        id: 12,
        description:
          "Created and maintained a shared repository of reusable AI skills and automations for the engineering team, driving early-stage adoption across the group.",
        position_id: 1,
        addToResume: true
      },
      {
        id: 13,
        description:
          "Remediated ~40 application security findings on PHLIP using OpenText Fortify Audit Workbench (SAST) and OpenText Application Security web app CE 25.4 (DAST), reducing critical, high, and medium severity findings to zero within a two-week window; authored false-positive justification documentation for formal remediation records.",
        position_id: 1,
        addToResume: true
      },
      {
        id: 14,
        description:
          "Led Section 508 accessibility remediation across two CDC applications (EASI, Navigator) using the Axe browser extension, fixing ~50 issues spanning ARIA labeling, keyboard navigation, color contrast, DOM element ordering, and modal rendering/focus management; achieved formal Section 508 compliance sign-off.",
        position_id: 1,
        addToResume: true
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
        position_id: 2,
        addToResume: true
      },
      {
        id: 3,
        description:
          "Used Telerik Kendo UI components to update and create web pages.",
        position_id: 2,
        addToResume: true
      },
      {
        id: 4,
        description:
          "Using SQL Server to create stored procedures for new and existing projects.",
        position_id: 2,
        addToResume: true
      },
      {
        id: 5,
        description:
          "Using Azure DevOps to deploy changes to dev and production.",
        position_id: 2,
        addToResume: true
      },
      {
        id: 6,
        description:
          "Used ElasticSearch to query data and add new data to already built data pulls.",
        position_id: 2,
        addToResume: true
      },
      {
        id: 7,
        description:
          "Streamlined publications management process, reducing it from three screens to a single interface. Internal users can now create and manage publications much more efficiently saving time and money.",
        position_id: 2,
        addToResume: true
      },
      {
        id: 8,
        description:
          "Migrated business application features from legacy systems to our new web application. This migration allowed users to conduct research efficiently and to have a more cohesive user experience.",
        position_id: 2,
        addToResume: true
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
        position_id: 3,
        addToResume: true
      },
      {
        id: 10,
        description:
          "Used SQL Server to create stored procedures for new and existing projects and wrote T-SQLT to test them.",
        position_id: 3,
        addToResume: true
      },
      {
        id: 11,
        description:
          "Using Azure DevOps to create pull requests and perform code reviews.",
        position_id: 3,
        addToResume: true
      },
      {
        id: 12,
        description:
          "Used Jira to manage tickets and Confluence to read and contribute to business knowledge.",
        position_id: 3,
        addToResume: true
      },
      {
        id: 13,
        description: "Used xUnit to build unit tests.",
        position_id: 3,
        addToResume: true
      },
      {
        id: 14,
        description: "Created a tracking number feature for user shipments.",
        position_id: 3,
        addToResume: true
      },
      {
        id: 15,
        description:
          "Revamped an internal template for testing records. This streamlined code reviews and the QA process which saves everyone time.",
        position_id: 3,
        addToResume: true
      },
      {
        id: 16,
        description:
          "Developed solutions tailored to customer success projects to present to stakeholders.",
        position_id: 3,
        addToResume: true
      },
      {
        id: 17,
        description:
          "Worked on a team project to build a feature to help users track inventory.",
        position_id: 3,
        addToResume: false
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
        position_id: 4,
        addToResume: true
      },
      {
        id: 19,
        description:
          "Used SQL Server to create and maintain stored procedures.",
        position_id: 4,
        addToResume: true
      },
      {
        id: 20,
        description:
          "Re-engineered a notification system so users can subscribe themselves. This freed us engineers from having to do a deployment with every request.",
        position_id: 4,
        addToResume: true
      },
      {
        id: 21,
        description:
          "Built a feature that allowed the CTO to share product release notes with the business. This kept him from crafting and sending long emails to the company and it gave stakeholders a place to see all release notes in one place.",
        position_id: 4,
        addToResume: true
      },
      {
        id: 22,
        description:
          "Integrated Swagger API to help clients easily integrate with our system.",
        position_id: 4,
        addToResume: true
      },
      {
        id: 23,
        description:
          "Maintained an external API for clients who needed to access our data.",
        position_id: 4,
        addToResume: true
      },
      {
        id: 24,
        description: "Integrated Order Bot to our system.",
        position_id: 4,
        addToResume: true
      },
      {
        id: 25,
        description:
          "Worked with CTO to build a program for employees to track their performance. This facilitated friendly competition among the employee which boosted morale.",
        position_id: 4,
        addToResume: true
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
        position_id: 5,
        addToResume: true
      },
      {
        id: 27,
        description:
          "Maintained two online forms utilizing a low-code framework and customized logic using C#.",
        position_id: 5,
        addToResume: true
      }
    ],
    isRemote: false
  }
];

export default jobData;
