import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGreen.italic("\t\t Welcome to my word counter"));
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.yellow("Enter your sentence to count the word:"),
    }
]);
const words = answers.Sentence.trim().split(" ");
// print the array of word to the console
console.log(words);
// print the word count to the sentence
console.log(chalk.bgRed.italic(`Your sentence words count is ${words.length}`));
// trim means space remover
// 
