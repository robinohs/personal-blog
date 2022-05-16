/**
 * Creates a string with the given count of words. The words are randomly generated.
 *
 * @param wordCount the count of words to include in the resulting string.
 * @returns the string with the given count of words.
 */
const generateStringWithGivenCountOfWords = (wordCount: number): string => {
  if (wordCount < 1) return "";
  let text = generateRandomWord(3);
  for (let i = 0; i < wordCount - 1; i++) text += ` ${generateRandomWord(3)}`;
  return text;
};

/**
 * Generates a random word with the given length.
 *
 * @param length the length of the generated word.
 * @returns the generated word.
 */
const generateRandomWord = (length: number): string => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let text = "";
  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

export { generateStringWithGivenCountOfWords, generateRandomWord };
