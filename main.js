const movieQuotes = ["May the Force be with you", "There's no place like home.", "I'm the king of the world! ", "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
"Elementary, my dear Watson.", "It's alive! It's alive!", "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
"I'll be back", "You're gonna need a bigger boat.", "Here's looking at you, kid.", "My precious.", "Houston, we have a problem",
"There's no crying in baseball"];


const author = ["Luke Skywalker", "Dorothy Gale", "Jack Dawson", 
"John Keating", "Sherlock Holmes", "Dr. Frankenstein", "Forrest Gump", 
"The Terminator", "Chief Martin Brody", "Rick Blaine", "Gollum", "Jim Lovell", 
"Jimmy Dugan"];

const randomNum = () => {
    return Math.floor(Math.random() * 13);
}

console.log(`${author[randomNum()]} once said: "${movieQuotes[randomNum()]}".`);
