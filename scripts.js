// Time -> O(n) | Space -> O(n) - where n is the length of words
function semordnilap(words) {
  
  if (words.length === 0) return [];
  else if (words.length === 1) return [];
  
  let reversedWords = {};
  let result = [];
  for (let word of words) {
    if (!reversedWords.hasOwnProperty(word)) {
      word = word.split('').reverse().join('');
      reversedWords[word] = true;
    } else {
      result.push([word, word.split('').reverse().join('')]);
    }
  }
  return result;
}
