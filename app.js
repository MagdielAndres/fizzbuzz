const fs = require("fs");

// Part 1 Read json file ===========================
const rawdata = fs.readFileSync("explorers.json");
const explorers = JSON.parse(rawdata);
//console.log(explorers); //Me muestra todo el contenido del archivo explorers.json

// Part 2: Get the quantity of explorers names in node
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
//console.log(explorersInNode.length)//Aquí me trae la cantidad de explores que estan en la mission node

// Part4: Get the explorer's usernames in Node
const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
//console.log(usernamesInNode)//Muestra los nombres de los usuarios de GitHub  que estan en la mission node

// DEAD CODE: Part 5,6,7, please remove this and go to Part 8!

// Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.
// Score: 3, Trick: FIZZ.
// Score: 4, Trick: 4.
// Score: 5, Trick: 5.

const assignFizzTrick = function(explorer){
    if(explorer.score%3 === 0){
        explorer.trick = "FIZZ";
        return explorer;
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));
//console.log(explorersInNodeAndFizzTrick)

// Part 6: Get a new list of explorers in node if the score number is divisible by 5, we need to set a new property called trick and set the value BUZZ, if not this value should be just the score
//
const assignBuzzTrick = function(explorer){
    if(explorer.score%5 === 0){
        explorer.trick = "BUZZ";
        return explorer;
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => assignBuzzTrick(explorer));
//console.log(explorersInNodeAndBuzzTrick)
//Part7: Get a new list of explorers in Node, if the score number is divisible by 3 AND by 5 we need to set a new property called FIZZBUZZ, if not this value should be the same score value

const assignFizzBuzzTrick = function(explorer){
    if(explorer.score%5 === 0 && explorer.score%3 === 0){
        explorer.trick = "FIZZBUZZ";
        return explorer;
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));
//console.log(explorersInNodeAndFizzBuzzTrick)
// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO

const assignFizzBuzzaOrFizzOrBuzzTrick = function(explorer){
    if(explorer.score % 5 === 0 && explorer.score % 3 === 0){
        explorer.trick = "FIZZBUZZ";
        return explorer;
    }else if(explorer.score % 3 === 0){
        explorer.trick = "FIZZ";
        return explorer;
    }else if(explorer.score % 5 === 0){
        explorer.trick = "BUZZ";
        return explorer;
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndFizzBuzzOrFizzOrBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzaOrFizzOrBuzzTrick(explorer));
console.log(explorersInNodeAndFizzBuzzOrFizzOrBuzzTrick)
// for(i =1; i <= 100; i++){

//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i + ": FizzBuzz");
//     }else if(i % 3 == 0){
//        console.log(i + ": Fizz");   
//     }else if(i % 5 == 0){
//         console.log(i + ": Buzz")
//     }else{
//         console.log(i);
//     }
    
// }