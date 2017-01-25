console.clear();
"use strict";


let randoInput = 0;

let randoNumber = Math.floor(Math.random() * 100) + 1;

let response = document.querySelector(".answer");

let i = 0;

let storedInput = [];

function lessNum() {
    if (randoInput < randoNumber) {
        response.innerHTML = `The number ${randoInput} is too low`;
    } else if (randoInput > randoNumber) {
        response.innerHTML = `The number ${randoInput} is too high`;
    } else if (randoInput == randoNumber) {
        response.innerHTML = `You are correct!!!`;
    } else if (randoInput == randoInput) {
        response.innerHTML = `same`;
    }
}

const guessOne = document.querySelector(".guess-one");
guessOne.addEventListener("submit", (event) => {
    event.preventDefault();
    randoInput = document.querySelector("#numOne").value;

    i++;

    if (i < 5) {} else {
        alert("Game Over!")
        location.reload();
    }

    storedInput.push(randoInput);

    console.log(storedInput);



    console.log(i);



    console.log(randoInput);
    console.log(randoNumber);
    lessNum();

    guessOne.reset();
});
