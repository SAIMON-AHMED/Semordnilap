# `Semordnilap`

## Description

The `semordnilap` function identifies and returns pairs of semordnilap words from a given list of strings. A semordnilap (palindromes in reverse) is a word or phrase that forms another word when reversed. This function helps detect such pairs and returns them as an array of arrays.

## Function Signature

```javascript
function semordnilap(words) -> Array<Array<string>>
```

## Parameters

- **words** (`Array<string>`): An array of strings. Each string represents a word to be checked for semordnilap pairs.

## Returns

- **`Array<Array<string>>`**: An array of pairs, where each pair consists of two semordnilap words. If no semordnilap pairs are found, the function returns an empty array.

## Time and Space Complexity

- **Time Complexity**: `O(n * m)`, where `n` is the number of words and `m` is the average length of a word. Reversing a word takes `O(m)`, and processing all words takes `O(n)`.
- **Space Complexity**: `O(n * m)` because we store up to `n` reversed words in the `reversedWords` object, where `m` is the length of each word.

## Algorithm Explanation

1. **Edge Cases**:
   - If the `words` array is empty or has only one word, the function returns an empty array since semordnilap pairs cannot exist in such cases.

2. **Reversing Words**:
   - For each word in the array, the function reverses the word using `split('').reverse().join('')`.

3. **Checking and Storing**:
   - It uses an object, `reversedWords`, to store reversed words as keys.
   - If a reversed word matches a previously encountered word in the array, it indicates a semordnilap pair. This pair is added to the result.

4. **Output**:
   - Returns an array of semordnilap pairs.

## Examples

### Example 1
```javascript
semordnilap(["stressed", "desserts", "hello", "olleh", "world"]);
// Output: [["olleh", "hello"], ["desserts", "stressed"]]
```

### Example 2
```javascript
semordnilap(["abcd", "dcba", "a", "b"]);
// Output: [["dcba", "abcd"]]
```

### Example 3
```javascript
semordnilap(["abc", "def"]);
// Output: []
```

## Edge Cases

1. **Empty Array**: If `words` is empty, the function returns `[]`.
2. **Single Word**: If `words` contains only one word, the function returns `[]` since no pairs can exist.
3. **No Semordnilap Pairs**: If no semordnilap pairs are found, the function returns `[]`.

## License

This code is available under the MIT License.
