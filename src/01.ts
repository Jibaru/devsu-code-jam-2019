const solve01 = (key: string, message: string): string => {
  const VOWELS = ["a", "e", "i", "o", "u"];

  if (!message) return "";
  if (!key) key = "DCJ";
  let encryptedMessage = "";
  const letters = message.split("");
  for (const c of letters) {
    if (VOWELS.indexOf(c.toLowerCase()) != -1) {
      encryptedMessage += key;
    }
    encryptedMessage += c;
  }
  return encryptedMessage;
};

console.log(solve01("dcj", "I love prOgrAmming!"));
