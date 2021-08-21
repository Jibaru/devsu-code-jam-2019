const solve03 = (n: number, str: string): string => {
  let characters = str.split("");
  for (let i = n - 1; i < str.length; i += n) {
    if (characters[i] == characters[i].toLowerCase())
      characters[i] = characters[i].toUpperCase();
    else characters[i] = characters[i].toLowerCase();
  }
  return characters.join("");
};

console.log(solve03(3, "Greetings, this is AN EXAMPLE!"));
