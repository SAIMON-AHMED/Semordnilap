// Time -> O(n * m) | Space -> O(n * m) - where n is the length of words array and m is the avg. length of the words
function semordnilap(words) {
  
  //if (words.length === 0 || words.length === 1) return [];
  
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
