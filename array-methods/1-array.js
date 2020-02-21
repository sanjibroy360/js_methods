// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers

let largestNum = arr => {
  return arr.reduce( (acc, cv) => {
    if(cv > acc) {
      acc = cv;
    }
    return acc;
  },0)
}

// Find longest string in strings

let longestString = str => {
  return str.reduce( (acc, cv) => {
    if(cv.length > acc.length) {
      acc = cv;
    }
    return acc;
  },"")
};

// Find all the even numbers

  let evenNums = nums => nums.filter(nums % 2 === 0)

// Find all the odd numbers

  let oddNums = nums => nums.filter(nums % 2 !== 0)

// Find all the words that contain 'is' use string method 'includes'

let isContain = str => str.reduce( (acc, cv) => {
  if(cv.includes("is")) {
    acc.push(cv);
  }
  return acc;
},[])

// Find all the words that contain 'is' use string method 'indexOf'

let isContain = str => str.reduce( (acc, cv) => {
  if(cv.indexOf("is") !== -1) {
    acc.push(cv);
  }
  return acc;
},[])


// Check if all the numbers in numbers array are divisible by three use array method (every)

let checkDivisiblity = nums => nums.every(el => el % 3 === 0)

//  Sort Array from smallest to largest

let sortArray = nums => nums( (a, b) => 1);

// Remove the last word in strings

let removeLastWord = str => str.pop();

// Add a new word in the array

let addNewWord = str => str.push("New Word");

// Remove the first word in the array

let removeFirstWord = str => str.shift()

// Place a new word at the start of the array use (upshift)

let addNewWord = str => str.unshift("New Word2");

// Make a subset of numbers array [18,9,7,11]

let subsetArr = nums => nums.slice(3,7); 

// Make a subset of strings array ['a','collection']

let subsetStrArr = str => str.slice(3,7); 

// Replace 12 & 18 with 1221 and 1881

let replaceNums = nums => {
  return nums.reduce( (acc, cv) => {
    switch(cv) {
      case 12 : acc.push(1221);
                return acc;
      case 18 : acc.push(1881);
                return acc;
      default : acc.push(cv);
    }
    return acc;
  },[] )
}

// Replace words with string in strings array

let wordsFromStringArr = str => str.replace("words","Hello");

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

let nameWithJ = objArr => {
  let ans = [];
  for(let item of  objArr) {
    if(item.firstname.startsWith("J")) {
      ans.push(item);
    }
  }
  return ans;
}

// Create new array with firstname and lastname

let fullName = objArr => objArr.map(el => `${el.firstname} ${el.lastname}`);


// Sort the array created above alphabetically


let sortedFullName = objArr => objArr.map(el => `${el.firstname} ${el.lastname}`).sort();