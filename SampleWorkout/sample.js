let min = 10;
let max = 40;

if (min > max) {
    console.log("You did wrong 💥 Shutting_ down---");
} else {
    setInterval(() => { 
        const randomInt = Math.random() * (10 - 5) + 5;
        console.log(randomInt);
    }, 1000); // Log a random number every second
}
