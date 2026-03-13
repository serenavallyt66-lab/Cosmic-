'use server';
/**
 * @fileOverview A Genkit flow for generating diverse creative content based on a text prompt.
 *
 * - generateCreativeContentFromPrompt - A function that generates creative content.
 * - GenerateCreativeContentFromPromptInput - The input type for the generateCreativeContentFromPrompt function.
 * - GenerateCreativeContentFromPromptOutput - The return type for the generateCreativeContentFromPrompt function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateCreativeContentFromPromptInputSchema = z.object({
  prompt: z.string().describe('The user\'s creative prompt for content generation.'),
});
export type GenerateCreativeContentFromPromptInput = z.infer<typeof GenerateCreativeContentFromPromptInputSchema>;

const GenerateCreativeContentFromPromptOutputSchema = z.object({
  content: z.string().describe('The AI-generated creative content, project idea, or draft.'),
});
export type GenerateCreativeContentFromPromptOutput = z.infer<typeof GenerateCreativeContentFromPromptOutputSchema>;

export async function generateCreativeContentFromPrompt(input: GenerateCreativeContentFromPromptInput): Promise<GenerateCreativeContentFromPromptOutput> {
  return generateCreativeContentFromPromptFlow(input);
}

const creativeContentPrompt = ai.definePrompt({
  name: 'creativeContentPrompt',
  input: { schema: GenerateCreativeContentFromPromptInputSchema },
  output: { schema: GenerateCreativeContentFromPromptOutputSchema },
  prompt: `You are a creative AI assistant named 'Lovable'. Your task is to generate diverse creative content, project ideas, or initial drafts based on the user's input.

Be imaginative, detailed, and helpful. Consider different formats like a short story, a marketing slogan, a product idea, a script outline, or even a poem, depending on what feels most appropriate for the prompt.

User's prompt: {{{prompt}}}`,
});

const generateCreativeContentFromPromptFlow = ai.defineFlow(
  {
    name: 'generateCreativeContentFromPromptFlow',
    inputSchema: GenerateCreativeContentFromPromptInputSchema,
    outputSchema: GenerateCreativeContentFromPromptOutputSchema,
  },
  async (input) => {
    const { output } = await creativeContentPrompt(input);
    return output!;
  }
);
