/* Js string methods

- methods are functions 
- string methods are pre- build by Javascript.


1. Make a function that will return any given string into all caps 
followed by the same string all lowercase.



2. Make a function that returns a number half the length and rounded down.
 You'll need to use Math.floor() (Links to an external site.).



3. Make a function that uses slice() (Links to an external site.)
 and the other functions you've written to return the first half of the string.



4. Make a function that takes a string and returns that string where the first half is capitalized,
 and the second half is lower cased. (If the string length is odd, 
    capitalize the shorter of the first half.)



Optional Code Challenge (This one is a step up in difficulty):
Make a function that takes any string and capitalizes any character that follows a space


Method	Description
charAt()	Returns the character at the specified index.
charCodeAt()	Returns the Unicode of the character at the specified index.
concat()	Joins two or more strings, and returns a new string.
endsWith()	Checks whether a string ends with a specified substring.
fromCharCode()	Converts Unicode values to characters.
includes()	Checks whether a string contains the specified substring.
indexOf()	Returns the index of the first occurrence of the specified value in a string.
lastIndexOf()	Returns the index of the last occurrence of the specified value in a string.
localeCompare()	Compares two strings in the current locale.
match()	Matches a string against a regular expression, and returns an array of all matches.
repeat()	Returns a new string which contains the specified number of copies of the original string.
replace()	Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
search()	Searches a string against a regular expression, and returns the index of the first match.
slice()	Extracts a portion of a string and returns it as a new string.
split()	Splits a string into an array of substrings.
startsWith()	Checks whether a string begins with a specified substring.
substr()	Extracts the part of a string between the start index and a number of characters after it.
substring()	Extracts the part of a string between the start and end indexes.
toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
toLowerCase()	Converts a string to lowercase letters.
toString()	Returns a string representing the specified object.
toUpperCase()	Converts a string to uppercase letters.
trim()	Removes whitespace from both ends of a string.
valueOf()	Returns the primitive value of a String object.








 
*/

 

function capitalizeAndLowerCase(pullMyString) {

   return pullMyString.toLocaleUpperCase() + pullMyString.toLocaleLowerCase();
}
console.log(capitalizeAndLowerCase("Hello"));

function findMiddleIndex(string2){
   
   return Math.floor(string2.length / 2);
}
      console.log(findMiddleIndex("Hello"))
      console.log(findMiddleIndex("Hello World"))

function returnFirstHalf(string3) {

   return string3.slice(0, string3.length / 2);
}
      console.log(returnFirstHalf("Hello"))
      console.log(returnFirstHalf("Hello World"))

function capitalizeAndLowerCase(string4) {

   return string4.slice(0, string4.length / 2).toLocaleUpperCase() + string4.slice(string4.length /2).toLowerCase();

}

      console.log(capitalizeAndLowerCase("Hello"));
      console.log(capitalizeAndLowerCase("Hello World"));