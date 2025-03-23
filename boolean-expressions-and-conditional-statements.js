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
let hasHat;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");

  let answer = readline.question("You find an oddly shaped hat. Do you \"keep\" it in your backpack or do you \"leave\" it where you found it?")
  

  if (answer === "keep"){
    hasHat = true;
  }

  else
    hasHat = false;

  const conversation = readline.question("You run into a man who wants to have a conversation with you. Do you have a \"good\" conversation or \"bad\" conversation?")

  console.log("while speaking to the man. You discover that he lost a hat. The exact hat that you saw while walking through the mountain.")

  if (conversation === "bad" && hasHat)
    console.log("The man thanks you for picking up his has and walks off")

  else if(conversation === "good" && hasHat)
    console.log("The man is very happy and takes you to the secret elevator where you go to the top of the mountain. Hooray!");

  else if(conversation === "good" && !hasHat)
    console.log("You tell the man where the hat is and he goes off to get it. You continue to walk around through the mountain.");

  else if(conversation=== "bad" && !hasHat)
    console.log("Before you can tell him where is hat is, he walks away.");


}

  else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");

} else if (choice === "village" || hasMap) {
  const objectOfChoice = readline.questionInt("While traveling through the forest, you find a cave with iridescent light coming out of it.\n You go in to see 3 shiny objects. Which one do you choose? \n1.\tSword of Excalibur\n2.\tMagic Spellbook\n3.\tA Very Long Stick\nPick a Number: ")

  console.log("You find your way to the village. A magical dragon is attacking it as you arrive");

  if(objectOfChoice === 1 || objectOfChoice === 2){
    console.log("You decide to help the village.")
    if(objectOfChoice === 1)
    {
      console.log("You unsheath your sword. You feel its surging power with every step. As the flaming breath of the dragon reach you, the sword slices it with ease.\nYou slay the dragon and become the hero of the village.")

    }
    if(objectOfChoice === 2){
      console.log("You open the book to find a \"Talk to Dragons\" spell that you cast on yourself. You manage to find high ground to talk to the dragon. Apparently the dragon was just hungry.\nThe town feeds the dragon and it becomes guardian of the village.\nYou become known as the Dragon Master.")
    }

  }

  else
  console.log("You leave the village immediately to avoid being hurt.")
}

else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/