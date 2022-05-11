const readingTimeCalculation = (text: string): number => {
  const wordCount = countWords(text);

  const num1 = wordCount / 200;
  const minutes = Math.floor(num1);
  const seconds = Number(((num1 - minutes) * 0.6).toFixed(2));

  return Math.max(1, Math.ceil(minutes + seconds));
};

const countWords = (text: string): number =>
  text.split(" ").filter((word) => word !== "").length;

export default readingTimeCalculation;
