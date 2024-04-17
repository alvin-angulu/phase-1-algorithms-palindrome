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
