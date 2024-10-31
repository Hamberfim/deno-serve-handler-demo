/** Zoo Data  - zooData.ts */
// species list
export enum Species {
  LION,
  TIGER,
  BEAR,
  POSSUM,
}

// animal gender
enum Gender {
  FEMALE,
  MALE,
}

// food stock -- NOT USED
export enum Stock {
  IN_STOCK,
  OUT_OF_STOCK,
}
// Animal type
export type Animal = {
  name: string;
  species: Species;
  gender: Gender;
  cageNumber: number;
};

// Zoo Animals
const lioness: Animal = {
  name: "Lioness",
  species: Species.LION,
  gender: Gender.FEMALE,
  cageNumber: 1,
};

const bearCub: Animal = {
  name: "Bear Cub",
  species: Species.BEAR,
  gender: Gender.MALE,
  cageNumber: 2,
};

const tigress: Animal = {
  name: "Tigress",
  species: Species.TIGER,
  gender: Gender.FEMALE,
  cageNumber: 3,
};

const opossum: Animal = {
  name: "Opossum",
  species: Species.POSSUM,
  gender: Gender.MALE,
  cageNumber: 4,
};

// array of zoo animals
export const zooAnimals: Animal[] = [lioness, bearCub, tigress, opossum];

// food type
export type Food = {
  name: string;
  fatContent: number;
  liveFood: boolean;
};

// species diet type
export type SuggestedAnimalDiets = {
  species: Species;
  foods: Food[];
}[];

// a food
export const foodDiet: Food[] = [
  {
    name: "mouse",
    fatContent: 0.12,
    liveFood: true,
  },
  {
    name: "apples",
    fatContent: 0.03,
    liveFood: false,
  },
  {
    name: "fortified grain",
    fatContent: 0.09,
    liveFood: false,
  },
  {
    name: "fish paste",
    fatContent: 0.5,
    liveFood: false,
  },
  {
    name: "beef cuts",
    fatContent: 4.5,
    liveFood: false,
  },
];

// suggested foods/diet
export const suggestedAnimalDiets: SuggestedAnimalDiets = [
  {
    species: Species.TIGER,
    foods: [foodDiet[0], foodDiet[3], foodDiet[4]],
  },
  {
    species: Species.BEAR,
    foods: [foodDiet[0], foodDiet[1], foodDiet[3], foodDiet[4]],
  },
  {
    species: Species.LION,
    foods: [foodDiet[0], foodDiet[3], foodDiet[4]],
  },
  {
    species: Species.POSSUM,
    foods: [foodDiet[1], foodDiet[2], foodDiet[3]],
  },
];
