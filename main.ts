/** consume data - main.ts */
import { suggestedAnimalDiets, Food, zooAnimals, Animal } from "./zooData.ts";

// lookup table using reduce()
export const animalDiets: Record<string, { animal: Animal[]; foods: Food[] }> = zooAnimals.reduce((previous, current) => {
  const species = current.species;
  if (!previous[species]) {
    previous[species] = {
      animal: [],
      foods: suggestedAnimalDiets.find((diet) => diet.species === species)?.foods || [],
    };
  }
  previous[species].animal.push(current);
  return previous;
}, {} as Record<string, { animal: Animal[]; foods: Food[] }>);
console.log(animalDiets);
