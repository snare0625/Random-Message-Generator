// This file constains function(s) to generate a random message from imprted data
import andrewTateQuotes from "./messages.mjs";

const randomGenerator = () => {
    const randomIndex = Math.floor(Math.random() * andrewTateQuotes.length);
    const randomQuote = andrewTateQuotes[randomIndex];
    return randomQuote;
}

console.log(randomGenerator());