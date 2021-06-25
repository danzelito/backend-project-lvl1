import GamePlay from '../index.js';

const Dividers = (a, b) => {
  let reassignA = a;
  let reassignB = b;
  while (reassignB > 0) {
    const c = reassignA % reassignB;
    reassignA = reassignB;
    reassignB = c;
  }
  return reassignA;
};

const BrainGCDGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const arrayForfuncResult = [];
  const arrayForQuestionRepr = [];
  for (let i = 0; i < 3; i += 1) {
    const randNumber1 = Math.floor(Math.random() * 98) + 2;
    const randNumber2 = Math.floor(Math.random() * 98) + 2;
    const funcResult = Dividers(randNumber1, randNumber2);
    const questionRepr = `${randNumber1} ${randNumber2}`;
    arrayForfuncResult.push(funcResult);
    arrayForQuestionRepr.push(questionRepr);
  }
  console.log(GamePlay(arrayForfuncResult, arrayForQuestionRepr, question));
};
export default BrainGCDGame;
