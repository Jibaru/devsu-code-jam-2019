const solve12 = (str: string) => {
  if (str == null) return 0;

  const characters = new Set(str.split(""));
  let len = str.length;

  const includeAllChars = (chars: string[]) => {
    return new Set(chars).size == characters.size;
  };

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      let chars = str.slice(i, j).split("");
      if (chars.length < len && includeAllChars(chars)) {
        len = chars.length;
      }
    }
  }

  return len;
};

console.log(solve12("gamer programming"));
