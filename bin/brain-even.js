#!/usr/bin/env node
import GamePlay from '../src/index.js';

const evenCheck = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const arrayForfuncResult = [];
const arrayForQuestionRepr = [];
for (let i = 0; i < 3; i += 1) {
  const randNumber = Math.floor(Math.random() * 100);
  const funcResult = evenCheck(randNumber);
  const questionRepr = `${randNumber}`;
  arrayForfuncResult.push(funcResult);
  arrayForQuestionRepr.push(questionRepr);
}
console.log(arrayForfuncResult);
console.log(arrayForQuestionRepr);

console.log(GamePlay(arrayForfuncResult, arrayForQuestionRepr, question));
