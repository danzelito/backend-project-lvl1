#!/usr/bin/env node
import GamePlay from '../src/index.js';

const sumCheck = (a, b) => a + b;
const diffCheck = (c, d) => c - d;
const mulCheck = (e, f) => e * f;


const question = 'What is the result of the expression?';
const arrayForfuncResult = [];
const arrayForQuestionRepr = [];
const OperatorsForReprArray = ['+', '-', '*'];
const funcCheckers = [sumCheck, diffCheck, mulCheck];
for (let i = 0; i < funcCheckers.length; i += 1) {
  const randNumber1 = Math.floor(Math.random() * 100);
  const randNumber2 = Math.floor(Math.random() * 100);
  const funcResult = funcCheckers[i](randNumber1, randNumber2);
  const questionRepr = `${randNumber1} ${OperatorsForReprArray[i]} ${randNumber2}`;
  arrayForfuncResult.push(funcResult);
  arrayForQuestionRepr.push(questionRepr);
}

console.log(GamePlay(arrayForfuncResult, arrayForQuestionRepr, question));
