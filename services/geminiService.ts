import { GoogleGenAI, Type } from "@google/genai";
import type { Lesson, ChatMessage, AssessmentGrade } from '../types';

if (!process.env.API_KEY) {
    // In a real app, you might want to handle this more gracefully,
    // like disabling the chat feature and showing a message.
    console.warn("API_KEY environment variable not set. AI Tutor will not function.");
}

// Initialize with a check for the API key to avoid runtime errors if not set.
const ai = process.env.API_KEY ? new GoogleGenAI({ apiKey: process.env.API_KEY }) : null;

export const getAIResponse = async (chatHistory: ChatMessage[], currentLesson: Lesson | null): Promise<string> => {
  if (!ai) {
      return "I'm sorry, but the AI Tutor is currently unavailable. The API key is missing.";
  }

  const model = 'gemini-2.5-flash';
  
  const systemInstruction = `You are LogickTuts, an expert AI tutor for the "Computer Skills Launchpad" application. You possess a deep, academic-level understanding of computer science, from fundamental concepts to advanced topics. Your primary goal is to make complex subjects accessible and easy to understand for learners of all levels.

When a user asks a question:
1.  **Leverage Your Expertise**: Draw upon your extensive knowledge to provide accurate, insightful, and comprehensive answers.
2.  **Simplify and Structure**: Break down the information into clear, simple, step-by-step explanations. Use analogies and real-world examples to clarify difficult concepts.
3.  **Be Context-Aware**: The user is currently on the lesson: "${currentLesson?.title || 'General Topics'}". The objectives are: ${currentLesson?.objectives.join(', ') || 'Not available'}. Relate your answers to this context when relevant, but feel free to explore deeper if the user's query goes beyond the current scope.
4.  **Maintain Persona**: Be encouraging, patient, and clear. Avoid overly technical jargon without explaining it first. Your aim is to empower the user with knowledge, not overwhelm them.`;

  // Gemini API expects history with roles 'user' and 'model'.
  const contents = chatHistory.slice(-10) // Send the last 10 messages
    .filter(m => m.role !== 'system')
    .map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

  try {
    const response = await ai.models.generateContent({
        model,
        contents,
        config: {
            systemInstruction,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Failed to fetch AI response from Gemini:", error);
    return "I'm sorry, but I'm having trouble connecting right now. Please try again in a moment.";
  }
};

export const getAIAssessmentAndGrade = async (question: string, userAnswer: string): Promise<{ grade: AssessmentGrade; feedback: string; }> => {
    if (!ai) {
        return { grade: 'incorrect', feedback: "The AI feedback service is currently unavailable. The API key is missing." };
    }

    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are LogickTuts, an expert Computer Science tutor. A student is answering a review question. Your task is to grade their answer and provide constructive feedback.

    The user was asked the following question:
    "${question}"

    The user provided this answer:
    "${userAnswer}"

    Your response MUST be a JSON object that adheres to the provided schema.

    1.  **Grade the Answer**: Based on the correctness and completeness of the user's answer, classify it into one of three categories:
        - "correct": The answer is accurate and complete.
        - "partially_correct": The answer is on the right track but may have minor inaccuracies or is incomplete.
        - "incorrect": The answer is fundamentally wrong or misses the key points entirely.
    2.  **Provide Feedback**: Write encouraging and constructive feedback.
        - Acknowledge correct parts of the answer.
        - Gently correct any misunderstandings.
        - Briefly mention key points the user might have missed.
        - Guide the user toward the correct answer without simply giving it away.
        - Keep the feedback concise and helpful.`;
    
    const contents = [{
        role: 'user',
        parts: [{ text: `Please grade my answer and provide feedback.`}]
    }];

    const responseSchema = {
        type: Type.OBJECT,
        properties: {
            grade: { 
                type: Type.STRING,
                enum: ['correct', 'partially_correct', 'incorrect'],
                description: 'The grade for the user\'s answer.'
            },
            feedback: {
                type: Type.STRING,
                description: 'Constructive feedback for the user.'
            }
        },
        required: ['grade', 'feedback']
    };

    try {
        const response = await ai.models.generateContent({
            model,
            contents,
            config: {
                systemInstruction,
                responseMimeType: "application/json",
                responseSchema,
            }
        });

        const jsonResponse = JSON.parse(response.text);
        return jsonResponse;
    } catch (error) {
        console.error("Failed to fetch AI assessment from Gemini:", error);
        return { grade: 'incorrect', feedback: "I'm sorry, but I'm having trouble generating feedback right now. Please try again in a moment." };
    }
};
