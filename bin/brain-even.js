#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const evenCheck = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
console.log();
const start = greeting();
console.log(start);
const username = start.split(' ')[1];
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;
const counter = () => {
  while (count < 3) {
    const randNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (evenCheck(randNum) === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;( Correct was ${evenCheck(randNum)}.`);
      return `Let's try again, ${username}`;
    }
  }
  return `Congratulations, ${username}`;
};
console.log(counter());
