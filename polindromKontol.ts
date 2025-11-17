function isPalindrome(word: string): boolean {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(isPalindrome("kayak"));   
console.log(isPalindrome("merhaba")); 
