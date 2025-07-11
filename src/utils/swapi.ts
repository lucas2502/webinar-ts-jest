export async function getCharacter(id: number): Promise<{ name: string }> {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  return res.json();
}
