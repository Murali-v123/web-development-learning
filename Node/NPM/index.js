// const generatename=require("sillyname")

// import generatename from "sillyname"
// const sillyName=generatename()

// console.log(`my name is ${sillyName}`);

import {randomSuperhero} from "superheroes"

// const name=randomSuperhero()

// const superheroes = require("randomSuperhero ");

// const name = superheroes()

// console.log(`Hey Hero Your name is ${name} ryt`);

// const superheroes = require("superheroes");

// // Get a random name using the correct old method
// const name = superheroes.random();

// console.log(`Hey Hero Your name is ${name} ryt`);

// for v.4
async function start() {
    // 1. This safely loads the modern version in CommonJS
    const { randomSuperhero } = await import("superheroes");
    
    // 2. This calls the correct function name for version 4
    const name = randomSuperhero(); 
    
    console.log(`Hey Hero Your name is ${name} ryt`);
}

start();
