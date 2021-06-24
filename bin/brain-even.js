#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const evenCheck = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const arrayForfuncResult = [];
const randNumber1 = Math.floor(Math.random() * 100);