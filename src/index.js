import readlineSync from 'readline-sync';

const GamePlay = (funcresult, questionrepr, question) => {
  console.log();
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName[0].toUpperCase()}${userName.slice(1)}!`);
  console.log(question);
  let count = 0;
  while (count < 3) {
    console.log(`Question: ${questionrepr[count]}`);
    const userguess = readlineSync.question('Your answer: ');
    if (String(funcresult[count]) === userguess) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userguess}' is wrong answer ;(. Correct answer was '${funcresult[count]}'.`);
      return `Let's try again, ${userName[0].toUpperCase()}${userName.slice(1)}!`;
    }
  }
  return `Congratulations, ${userName[0].toUpperCase()}${userName.slice(1)}!`;
};

export default GamePlay;
