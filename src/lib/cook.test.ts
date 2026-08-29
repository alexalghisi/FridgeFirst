import { PANTRY, RECIPES, canCook, cookable, stranded } from "./cook";

test("the Cluj fridge cooks three plates and not the caprese", () => {
  expect(canCook(PANTRY, RECIPES[0]!)).toBe(true);
  expect(cookable(PANTRY, RECIPES).map((recipe) => recipe.id)).toEqual([
    "omelette",
    "toast",
    "hash",
  ]);
});

test("tomato is the stranded ingredient — it is not even in the fridge", () => {
  expect(stranded(PANTRY, RECIPES)).toEqual([]);
});

test("milk in the fridge with these recipes would rot", () => {
  expect(stranded([...PANTRY, "milk"], RECIPES)).toEqual(["milk"]);
});
