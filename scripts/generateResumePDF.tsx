import anthropicJobData from "@/data/anthropicJobData";
import jobData from "@/data/jobData";
import { JobProps } from "@/interfaces/JobProps";
import ResumePDF from "@/components/pdf/ResumePDF";
import { renderToFile } from "@react-pdf/renderer";
import path from "path";
import React from "react";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const datasets: Record<string, { jobs: JobProps[]; filename: string }> = {
  default:   { jobs: jobData,          filename: "Andre_Thomas_Resume.pdf" },
  anthropic: { jobs: anthropicJobData, filename: "Andre_Thomas_Anthropic_Resume.pdf" },
};

const dataArg = process.argv.find(a => a.startsWith("--data="));
const datasetKey = dataArg?.split("=")[1] ?? "default";
const { jobs, filename } = datasets[datasetKey] ?? datasets.default;

const outputArg = process.argv.slice(2).find(a => !a.startsWith("--"));
const outputPath = outputArg ?? path.join(process.env.HOME!, "Desktop", filename);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
renderToFile(React.createElement(ResumePDF, { jobs }) as any, outputPath)
  .then(() => {
    if (!outputArg) {
      console.log(`✓ Resume PDF written to ~/Desktop/${filename}`);
    }
  })
  .catch(err => {
    console.error("Error generating PDF:", err);
    process.exit(1);
  });
