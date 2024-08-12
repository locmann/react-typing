export const useScore = (userInput: string[], text: string) => {
  let errors = 0;
  let wordCounter = 0;
  userInput.forEach((char, index) => {
    if (char !== text[index]) {
      errors++;
    } else {
      if (char === ' ' || char === '.') {
        wordCounter++;
      }
    }
  });

  return { errors, wordCounter };
};
