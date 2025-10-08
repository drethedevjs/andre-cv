import { GoogleGenAI, Type } from "@google/genai";

const gem = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

export async function POST(request: Request) {
  const res = await request.json();

  const response = await gem.models.generateContent({
    model: "gemini-2.5-flash",
    contents: res.message,
    config: {
      systemInstruction: `You are filtering questions and responses by a user (potential employer) that is asking an \
        AI chatbot that is mimicking a software engineer on the engineer's website. Questions and responses \
        should be related to interviewing that chatbot to see if the person it is mimicking is good for a role \
        that the user has available. If the question/responses are not relevant then provide a reason and offer \
        suggestions on how to improve their question or response. Be kind when responding and speak in the first person as if you're responding as the engineer.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          isRelevant: {
            type: Type.BOOLEAN,
          },
          reason: {
            type: Type.STRING,
          },
          suggestions: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING
            },
          }
        },
      },
    },
  });

  return Response.json(response.text)
}