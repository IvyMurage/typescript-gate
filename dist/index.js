"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenate = concatenate;
const setRange = (range) => {
    const x = range[0];
    const y = range[1];
    return { x, y };
};
setRange([true, "10"]);
const processRecipe = (recipe) => {
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
const setRange1 = (range) => {
    const x = range[0];
    const y = range[1];
    return { x, y: typeof y === "object" && y.age > 10 };
};
console.log(setRange1([true, { name: "Patrick", age: 3 }]));
function concatenate(...strings) {
    return strings.join("");
}
console.log(concatenate("Hello", "Hi", "Hola"));
function move(direction, distance) { }
// TESTS
move("up", 10);
move("left", 5);
move(
// @ts-expect-error - "up-right" is not a valid direction
"up-right", 10);
move(
// @ts-expect-error - "down-left" is not a valid direction
"down-left", 20);
move("up", 
// @ts-expect-error - "20" is not a valid distance
"20");
