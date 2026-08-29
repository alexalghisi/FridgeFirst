import { Button } from "@/components/ui/button";
import { RECIPES, canCook, type Ingredient } from "@/lib/cook";
import { useFridgeStore } from "@/store/fridgeStore";

const ALL: Ingredient[] = [
  "eggs",
  "milk",
  "onion",
  "potato",
  "cheese",
  "bread",
  "tomato",
  "butter",
];

export function FridgePane() {
  const have = useFridgeStore((state) => state.have);
  const toggle = useFridgeStore((state) => state.toggle);

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[220px_1fr]">
      <aside className="flex flex-wrap content-start gap-2 border-b border-border bg-sidebar p-4 md:border-r md:border-b-0">
        {ALL.map((item) => (
          <Button
            key={item}
            variant={have.includes(item) ? "default" : "outline"}
            size="sm"
            className="h-8 rounded-full px-3 text-[12px]"
            data-testid={`ing-${item}`}
            onClick={() => toggle(item)}
          >
            {item}
          </Button>
        ))}
      </aside>
      <ul className="min-h-0 overflow-auto p-4">
        {RECIPES.map((recipe) => {
          const ready = canCook(have, recipe);
          return (
            <li
              key={recipe.id}
              data-testid={`recipe-${recipe.id}`}
              data-ready={ready ? "yes" : "no"}
              className={`mb-3 rounded-md border px-4 py-3 ${
                ready ? "border-primary/40 bg-accent" : "border-border opacity-60"
              }`}
            >
              <p className="text-[15px] font-medium">{recipe.name}</p>
              <p className="text-[12px] text-muted-foreground">{recipe.needs.join(" · ")}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
