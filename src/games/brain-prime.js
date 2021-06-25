import GamePlay from '../index.js';

const primeCheck = (num) => {
  let divider = 2;
  if (num === 1) {
    return 'no';
  }
  if (num === 2) {
    return 'yes';
  }
  while (divider < Math.floor(num / 2) + 1) {
    if (num % divider === 0) {
      return 'no';
    }
    divider += 1;
  }
  return 'yes';
};

const BrainPrimeGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrayForfuncResult = [];
  const arrayForQuestionRepr = [];
  for (let i = 0; i < 3; i += 1) {
    const randNumber = Math.floor(Math.random() * 100) + 1;
    const funcResult = primeCheck(randNumber);
    const questionRepr = `${randNumber}`;
    arrayForfuncResult.push(funcResult);
    arrayForQuestionRepr.push(questionRepr);
  }
  console.log(GamePlay(arrayForfuncResult, arrayForQuestionRepr, question));
};
export default BrainPrimeGame;
