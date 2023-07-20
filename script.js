const quotes = [
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.", 
]




const quoteContainer = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteContainer.textContent = quotes[randomIndex];
}
