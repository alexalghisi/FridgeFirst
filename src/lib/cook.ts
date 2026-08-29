export type Ingredient =
  "eggs" | "milk" | "onion" | "potato" | "cheese" | "bread" | "tomato" | "butter";

export type Recipe = {
  id: string;
  name: string;
  needs: Ingredient[];
};

export const PANTRY: Ingredient[] = ["eggs", "onion", "potato", "bread", "butter", "cheese"];

export const RECIPES: Recipe[] = [
  { id: "omelette", name: "Onion omelette", needs: ["eggs", "onion", "butter"] },
  { id: "toast", name: "Cheese toast", needs: ["bread", "cheese", "butter"] },
  { id: "hash", name: "Potato hash", needs: ["potato", "onion", "eggs"] },
  { id: "caprese", name: "Caprese", needs: ["tomato", "cheese"] },
];

export function canCook(have: readonly Ingredient[], recipe: Recipe): boolean {
  return recipe.needs.every((item) => have.includes(item));
}

export function cookable(have: readonly Ingredient[], recipes: Recipe[]): Recipe[] {
  return recipes.filter((recipe) => canCook(have, recipe));
}

export function stranded(have: readonly Ingredient[], recipes: Recipe[]): Ingredient[] {
  const possible = cookable(have, recipes);
  const used = new Set(possible.flatMap((recipe) => recipe.needs));
  return have.filter((item) => !used.has(item));
}
