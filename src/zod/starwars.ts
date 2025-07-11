import { z } from "zod";

export const CharacterSchema = z.object({
  name: z.string(),
  height: z.string(),
  mass: z.string(),
});

export type Character = z.infer<typeof CharacterSchema>;

export async function fetchCharacter(id: number): Promise<Character> {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const json = await res.json();
  return CharacterSchema.parse(json);
}
