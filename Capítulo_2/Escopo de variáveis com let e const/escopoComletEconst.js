let movie = "Lord of the Rings";
// var movie = "Batman vs Superman0"; // erro, movie já foi declarada

function starWarsFan() {
    const movie = "Star Wars";
    return movie;
}

function marvelFan() {
    movie = "The Avengers";
    return movie;
}

function blizzardFan() {
    const isFan = true;
    let phrase = "Warcraft";
    console.log("Before if: " + phrase);
    if (isFan) {
        let phrase = "initial text";
        phrase = "For the Horde!";
        console.log("Inside if: " + phrase);
    }
    phrase = "For the Alliance!";
    console.log("After if: " + phrase);
}

console.log(movie); // Lord of the Rings
console.log(starWarsFan()); // Star Wars
console.log(marvelFan()); // The Avengers
console.log(movie); // The Avengers
blizzardFan(); // Before if: Warcraft
               // Inside if: For the Horde!
               // After if: For the Alliance!