const quotes = [
  {
    quote: "고난은 너를 강하게 만든다.",
    author: "sejong",
  },
  {
    quote: "진실만을 말하라.",
    author: "sejong",
  },
  {
    quote: "무슨일이 있어도 해야할 일을 하라.",
    author: "sejong",
  },
  {
    quote: "그리고 하고 싶은 일을 하라",
    author: "sejong",
  },
  {
    quote: "혐오와 비난에 뇌를 내어주지 말아라.",
    author: "sejong",
  },
  {
    quote: "편법과 요령으로 인생을 꾸려가지 말아라",
    author: "sejong",
  },
  {
    quote: "운동을 멈추지 말아라",
    author: "sejong",
  },
  {
    quote: "비난의 말을 하지 말아라",
    author: "sejong",
  },
  {
    quote: "얄팍한 인간이 되지 말자",
    author: "sejong",
  },
  {
    quote: "깊이를 갖자",
    author: "sejong",
  },
  {
    quote: "자식이 존경할 수 있는 사람이 돼라",
    author: "sejong",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `
author ${todaysQuote.author}`;
