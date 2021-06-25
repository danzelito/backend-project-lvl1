import GamePlay from '../index.js';

const progressionGenerator = (a1, d) => {
  const progrLen = Math.floor(Math.random() * 10) + 5;
  let count = 1;
  let ElementsOfProgr = a1;
  const result = [];
  while (count <= progrLen) {
    result.push(ElementsOfProgr);
    ElementsOfProgr += d;
    count += 1;
  }
  return result;
};

const BrainProgressionGame = () => {
  const question = 'What number is missing in the progression?';
  const arrayForfuncResult = [];
  const arrayForQuestionRepr = [];
  for (let i = 0; i < 3; i += 1) {
    const randNumber1 = Math.floor(Math.random() * 18) + 2;
    const randNumber2 = Math.floor(Math.random() * 3) + 2;
    const funcResult = progressionGenerator(randNumber1, randNumber2);
    const randNumber3 = Math.floor(Math.random() * funcResult.length);
    arrayForfuncResult.push(funcResult[randNumber3]);
    arrayForQuestionRepr.push((funcResult.join(' ')).replace(String(funcResult[randNumber3]), '..'));
  }
  console.log(GamePlay(arrayForfuncResult, arrayForQuestionRepr, question));
};
export default BrainProgressionGame;
