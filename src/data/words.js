// Common English words for typing practice
const words = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "it",
  "for", "not", "on", "with", "he", "as", "you", "do", "at", "this",
  "but", "his", "by", "from", "they", "we", "say", "her", "she", "or",
  "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "when", "make", "can", "like", "time", "no", "just", "him", "know",
  "take", "people", "into", "year", "your", "good", "some", "could",
  "them", "see", "other", "than", "then", "now", "look", "only", "come",
  "its", "over", "think", "also", "back", "after", "use", "two", "how",
  "our", "work", "first", "well", "way", "even", "new", "want", "because",
  "any", "these", "give", "day", "most", "us", "great", "between", "need",
  "large", "under", "never", "city", "tree", "cross", "just", "form",
  "much", "turn", "here", "why", "ask", "went", "men", "read", "long",
  "very", "after", "thing", "name", "been", "call", "move", "still",
  "life", "hand", "high", "keep", "place", "small", "found", "live",
  "where", "home", "world", "house", "old", "run", "school", "should",
  "does", "each", "right", "program", "every", "help", "line", "while",
  "above", "plant", "point", "number", "part", "water", "sound", "page",
  "write", "letter", "start", "close", "four", "open", "seem", "next",
  "hard", "case", "both", "begin", "might", "story", "far", "left"
];

// Pick random words and join them into a string
export const getRandomWords = (count = 30) => {
  const picked = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    picked.push(words[randomIndex]);
  }
  return picked.join(" ");
};
