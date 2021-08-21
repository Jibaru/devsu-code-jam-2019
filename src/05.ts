const solve05 = (key: string, message: string): string => {
  const parts = message.split(key);
  let result = "";
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i + 1]) {
      if (vowels.indexOf(parts[i + 1][0].toLowerCase()) == -1) {
        // There is not vowel
        result += parts[i];
      } else {
        result += key + parts[i];
      }
    } else {
      result += parts[i];
    }
  }
  return result;
};

console.log(solve05("hi", "hhiighhiEr hiordhiEr fhiUncthiihions"));
