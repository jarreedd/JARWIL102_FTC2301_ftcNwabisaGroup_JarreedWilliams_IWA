firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  Hobby();
  Hobby();
}

const Hobby = () => {
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

logTwice()