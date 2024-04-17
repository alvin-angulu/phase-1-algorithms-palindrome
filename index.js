function isPalindrome(word) {
  // Write your algorithm here
 word = word.toLowerCase();
 let i = 0;
 let j  = word.length-1 ;

while(i<j){
  if(word[i] !== word[j]){
    return false
  }
  i++;
  j--;
}
return true


}

/* 
  Add your pseudocode here
  1. convert your string to a lowercase
  2. Have 2 pointers iterating through you string comparing letters in your string
  3. 1st pointer to be initialized to the 1st letter, whilst 2nd pointer to be initialized to the last letter
  4. use a while loop for the string iteration
  5. use an if statement to compare the letters
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
