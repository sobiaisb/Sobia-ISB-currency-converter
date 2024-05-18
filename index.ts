import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to SobiaIsb - Currency Converter\n"));

// Define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1,    // Base Currency
    "EUR": 0.9,  // European currency (Euro)
    "JYP": 113,  // Japanese Currency  (Yen)
    "CAD": 1.3,  // Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 280   // Pakistani Rupees
    // Add more currencies and their exchange rates here
}

// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP",  "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP",  "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert"
    },
]);

// Perform currency conversion using formula
let from_rate = exchange_rate[user_answer.from_currency];
let to_rate = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

// Formula for conversion
let converted_amount = (amount / from_rate) * to_rate;

// Display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`); // Round to two decimal places









