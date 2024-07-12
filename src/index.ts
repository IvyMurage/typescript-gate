type SetRange = number | string | boolean;
const setRange = (
  range: SetRange[]
): {
  x: SetRange;
  y: SetRange;
} => {
  const x = range[0];
  const y = range[1];

  return { x, y };
};

setRange([true, "10"]);

interface ProcessRecipe {
  title: string;
  ingredients: {
    name: string;
    quantity: number | string;
    price?: number;
  }[];
  instructions: string;
}
const processRecipe = (recipe: ProcessRecipe) => {
  console.log(recipe.ingredients);
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: 4 },
    { name: "Sugar", quantity: "1 cup", price: 5 },
  ],
  instructions: "...",
});

type SetRange1 = boolean | { name: string; age: number };
const setRange1 = (
  range: SetRange1[]
): { x: SetRange1; y: SetRange1 } => {
  const x = range[0];
  const y = range[1];

  return { x, y: typeof y === "object" && y.age > 10 };
};

console.log(setRange1([true, { name: "Patrick", age: 3 }]));

export function concatenate(...strings: string[]): string {
  return strings.join("");
}

console.log(concatenate("Hello", "Hi", "Hola"));

function move(direction: "up" | "left", distance: number) {}

// TESTS

move("up", 10);
move("left", 5);

move(
  // @ts-expect-error - "up-right" is not a valid direction
  "up-right",
  10
);

move(
  // @ts-expect-error - "down-left" is not a valid direction
  "down-left",
  20
);

move(
  "up",
  // @ts-expect-error - "20" is not a valid distance
  "20"
);
