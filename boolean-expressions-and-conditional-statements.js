/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasPresent = true;
const hasSword = false;
const hasArmor = true;
const hasShoes = false;
const hasBlanket = true;
const hasPortal = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice1 = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice1 === "mountains" && hasTorch) {
  console.log("Thanks to your handy torch, you safely navigate through the dark mountains.");
} else if (choice1 === "mountains" && !hasTorch) {
  console.log("You realize you've left your torch at home! It's too dark to proceed. You decide to turn back.");
} else if (choice1 === "village" || hasMap) {
  console.log("You find your way to the village using the map in your pocket.");
} else {
  console.log("You don't have anything to guide you. You get lost and wander aimlessly.");
}

console.log("As you walk, you notice a strange figure on the side of the road.");
const choice2 = readline.question("Do you approach the figure? 'yes' or 'no'");

if (choice2 === "yes" && hasPresent) {
  console.log("You introduce yourself and give the figure a gift.");
} else if (choice2 === "yes" && !hasPresent) {
  console.log("The figure disappears from sight before you reach them.");
} else if (choice2 === "no" || hasSword) {
  console.log("The figure turns, sees your sword, and casts a spell in your direction.");
} else {
  console.log("You keep wandering aimlessly, but in another direction.");
}

console.log("You notice a light, tingling sensation in your body.");
const choice3 = readline.question("Do you eat some 'berries' you see in a nearby bush or 'call out' for help?");

if (choice3 === "berries" && hasArmor) {
  console.log("Your armor starts to glow the color of the berries, and you feel the tingling feeling turn to one of power.");
} else if (choice3 === "berries" && !hasShoes) {
  console.log("The tingling sensation remains, but now you feel your bare feet being pulled down into the ground.");
} else if (choice3 === "call out" || hasShoes) {
  console.log("You run away, hoping there's another person nearby who can help you.");
} else {
  console.log("These berries are great. You keep moving at an unbothered pace.");
}

console.log("You suddenly notice it is eerily quiet and there are no living beings in sight.");
const choice4 = readline.question("Do you decide it's finally quiet enough for a 'nap' or do you 'reflect' on all the poor decisions you've made today?");

if (choice4 === "nap" && hasBlanket) {
  console.log("You pull out your blanket and settle in for a peaceful slumber.");
} else if (choice4 === "nap" && !hasBlanket) {
  console.log("You reach for your blanket, only to notice you dropped it somewhere along the way. No naps today.");
} else if (choice4 === "reflect" || hasPortal) {
  console.log("You realize this is not your day for adventure, so you pull out your portal and teleport yourself home. Time for a sandwich!");
} else {
  console.log("After a day of wandering aimlessly, you find yourself standing at your own front door.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/