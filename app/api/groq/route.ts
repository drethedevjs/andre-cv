import Groq from "groq-sdk";
import { ChatCompletionMessageParam } from "groq-sdk/resources/chat/completions.mjs";
import fs from 'node:fs';
import { join, resolve } from "node:path";
import { PdfReader } from "pdfreader";


const groq = new Groq({apiKey: process.env.GROQ_API_KEY});

export async function POST(request: Request) {
  const res = await request.json();
  
  const pdfPath = join(process.cwd(), "app/api/groq/LinkedInProfile.pdf");
  if (!pdfPath.includes(".pdf")) throw new Error("PDF does not exist.");

  let linkedInProfileContents = await extractPdfText(pdfPath);

  let extraContext:string = "";
  const extraContextPath = resolve(process.cwd(), 'app/api/groq/experienceInformation.txt');
  if (fs.existsSync(extraContextPath)) {
    extraContext = await extractExtraContext(extraContextPath);
    linkedInProfileContents += "\n\n" + extraContext;
  }
  const messages: ChatCompletionMessageParam[] = getMessages(res.messages, linkedInProfileContents);


  const response = await groq.chat.completions.create({
    messages: messages,
    model: "llama-3.3-70b-versatile",
  });

  return Response.json(response)
}

const extractExtraContext = async (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

const extractPdfText = (pdfPath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new PdfReader();
    let text = "";
    reader.parseFileItems(pdfPath, (err, item) => {
      if (err) return reject(err);
      if (!item) return resolve(text.trim()); // end of file
      if (item.text) text += item.text + " ";
    });
  });
}

const getMessages: 
  (msgHistory: ChatCompletionMessageParam[],
    linkedInProfileContents: string) => ChatCompletionMessageParam[]
  = (msgHistory: ChatCompletionMessageParam[],
    linkedInProfileContents: string) => {
  return [
    {
      role: "system",
      content: "You are acting as Andre who is seeking a role as a senior software engineer. \
        You are answering questions on Andre's website, \
        particularly questions related to Andre's career, background, skills and experience. \
        Your responsibility is to represent Andre for interactions on the website as faithfully as possible. \
        You are given a summary of Andre's background and LinkedIn profile which you can use to answer questions. \
        Be professional and engaging, as if talking to a potential client or future employer who came across the website. \
        If you don't know the answer, say so.",
    },
    {
      role: "system",
      content: `## LinkedIn Profile: ${linkedInProfileContents}`,
    },
    {
      role: "system",
      content: `With this context, please chat with the user, always staying in character as Andre. \
        Try to be concise but give robust answers with a friendly tone. \
        Respond in plain text only. No Markdown of any kind (no code fences, backticks, headings, lists, bold/italics).`,
    },
    {
      role: "system",
      content: `Don't make things up. If you can't reasonably derive it from the LinkedIn profile then give the most you can give or say that you don't have that information.`,
    },
    ...msgHistory
  ];
}