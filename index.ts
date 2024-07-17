#! /usr/bin/env node
import inquirer from "inquirer";

console.log(`Welcome to my adventure quiz game!`);
console.log(`You need to gain at least 4 points to win.`);

let points = 0;

// Question 1
let question1 = await inquirer.prompt([
  {
    name: "one",
    type: "list",
    message: "TypeScript is a superset of:",
    choices: ["Python", "C++", "Java", "JavaScript"],
  },
]);
if (question1.one === "JavaScript") {
  console.log(`Your answer is correct!`);
  points++;
} else {
  console.log(`Incorrect answer.`);
}

// Question 2
let question2 = await inquirer.prompt([
  {
    name: "two",
    type: "list",
    message: "Who is the founder of Microsoft?",
    choices: ["Elon Musk", "Bill Gates", "Mark Zuckerberg"],
  },
]);
if (question2.two === "Bill Gates") {
  console.log(`Your answer is correct!`);
  points++;
} else {
  console.log(`Incorrect answer.`);
}

// Question 3
let question3 = await inquirer.prompt([
  {
    name: "three",
    type: "list",
    message: "What is the capital of Pakistan?",
    choices: ["Karachi", "Punjab", "Islamabad", "KPK"],
  },
]);
if (question3.three === "Islamabad") {
  console.log(`Your answer is correct!`);
  points++;
} else {
  console.log(`Incorrect answer.`);
}

// Question 4
let question4 = await inquirer.prompt([
  {
    name: "four",
    type: "list",
    message: "Who is the current governor of Sindh?",
    choices: ["Ali", "Bilal", "Wajahat", "Kamran Tessori"],
  },
]);
if (question4.four === "Kamran Tessori") {
  console.log(`Your answer is correct!`);
  points++;
} else {
  console.log(`Incorrect answer.`);
}

// Question 5
let question5 = await inquirer.prompt([
  {
    name: "five",
    type: "list",
    message: "How can you compile TypeScript code into JavaScript?",
    choices: [
      "tsc main.ts",
      "compile main.ts",
      "node main.ts",
      "typescript main.js",
    ],
  },
]);
if (question5.five === "tsc main.ts") {
  console.log(`Your answer is correct!`);
  points++;
} else {
  console.log(`Incorrect answer.`);
}

// Question 6
let question6 = await inquirer.prompt([
  {
    name: "six",
    type: "list",
    message: "Which language is used for web development?",
    choices: ["Python", "HTML", "Java", "C++"],
  },
]);
if (question6.six === "HTML") {
  console.log(`Your answer is correct!`);
  points++;
} else {
  console.log(`Incorrect answer.`);
}

// Question 7
let question7 = await inquirer.prompt([
  {
    name: "seven",
    type: "list",
    message: "Which company developed the React library?",
    choices: ["Google", "Microsoft", "Facebook", "Amazon"],
  },
]);
if (question7.seven === "Facebook") {
  console.log(`Your answer is correct!`);
  points++;
} else {
  console.log(`Incorrect answer.`);
}

// Final score and result
if (points >= 4) {
  console.log(`Congratulations!`);
  console.log(`Your points: ${points}`);
} else {
  console.log(`You lost. Try next time.`);
  console.log(`Your points: ${points}`);
}

console.log(`The end.`);
