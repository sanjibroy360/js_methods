// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];





// forEach





//1. Write all the elements along with its index value

let list = arr => arr.forEach((el, i) => console.log(`${i} : ${el}`))

//2. Display all the pizza name which contains more than one words.

let pizzaName = pizzaList => pizzaList.forEach(el => {
  if(el.split(" ").length > 1) {
    console.log(el);
  }
})

//3. Display all pizza name which contains two same vowels consicutivly

let pizzaNameWith2Vowel = pizzas => pizzas.forEach(name => {
  let vowels = "aaeeiioouu".split("");
  for(let i = 0; i < vowels.length; i++) {
    
    let twoVowel = (vowels[i] + vowels[i+1]);
    
    if(name.indexOf(twoVowel)!== -1) {
      console.log(name);
      break;
    }
  }
});

//4. Convert Pizza names into snake case.

let snakeCase = pizzaNames => pizzaNames.forEach(name => console.log(name.split(" ").join("_")) )

//5. Display all the palindrom numbers.

let checkPalindrom = nums => nums.forEach(num => {
  num = num + "";
  
  if( num.length > 1 && num === num.split("").reverse().join("") ) {
    console.log(+num);
  }
  
})

//6.Display all the perfect square numbers.

let perfectSquare = nums => nums.forEach(el => {
  let squareRoot = Math.sqrt(el);
  if(squareRoot - Math.floor( squareRoot ) == 0) {
    console.log(el);
  }
})

//7. Display all the prime numbers 

let primeNums = num => num.forEach(n => {
  let flag = 1;
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i == 0) {
      flag = 0;
      break;
    }
  }
  if(flag) {
    console.log(n);
  }
})

//8. Make convert each numbers into even number and display.

let makeEven = num => num.forEach(el => el + (el % 2));

//9. Display all the numbers whose sum of digits is even

let sumOfDigitIsEven = num => num.forEach(el => {
  el = (el + "").split("");
  let sum = 0;
  
  el.forEach(digit => {
      sum += +digit;
  })

  if(sum % 2 === 0) {
    console.log(+el.join(""));
  }

});

//10. Display number of alphabet in each cuts array element (Avoid spaces and symbols)

let countAlphabets = arr => arr.forEach(el => {
  let count = 0;
  el.split("").forEach(ch => {
    let ascii = ch.toUpperCase().charCodeAt();
    
    if(ascii >= 65 && ascii <= 90) {
      count++;
    }
  })
  console.log(`${el} : ${count}`);
  
})






// Map



//1. Add "Tasty" before each pizza name.

let addTasty = pizzaName => pizzaName.map(name => "Tasty" + " " + name) ;

//2. Make an array of string length 

let arrLen = arr => arr.map(el => el.length);

//3. Square each number 

let square = numbers => numbers.map(el => el ** 2);

//4. Make each number 50

let makeArrOf50 = numbers => numevenbers.map(el => el + (50 - el));

//5. Make each array element toUpperCase()

let toUpper = str => str.map(el => el.toUpperCase());

//6. Calculate the difference between each number and the number created after reversing the current number. (take absolute value)

let diffNum = nums => nums.map(el => Math.abs(el - +el.split("").reverse().join("") ))

//7. Add each number of the array with its index.

let add = nums => nums.map( (el, index) => el + index);

//8. Reverse each string of the array pizzas 

let reverseStr = str => str.map(el => el.split("").reverse().join("") )

//9. Convert each number into binary

let binaryConversion = num => num.map(el => el.toString(2));

//10. Return the ascii value of middle character of the string from the array of strings

let removeVowels = str => str.map(el => el[ Math.floor(el.length / 2) ].charCodeAt())







// Filter 



//1. Remove all the vowels from the string.

let removeVowels = str => str.map(el => el.split("").filter( x => !"aeiou".includes(x) ).join(""))

//2. Return all the string which contains any vowel.

let stringWithVowel = arr => arr.filter(el => el.toLowerCase().includes("a") || el.toLowerCase().includes("e") || el.toLowerCase().includes("i") || el.toLowerCase().includes("o")) || el.toLowerCase().includes("u");

//3. Return all string of length 7

let len5 = arr => arr.filter(el => el.length == 7)

//4. Return all neon numbers [ (9 * 9) = 81 , (8 + 1) = 9 ]

let neonNumbers = arr => arr.filter(num => {
  square = (num ** 2);
  square = (square + "").split("");
  let sum = 0;
  for(let i = 0; i < square.length; i++) {
    sum += +square[i];
  }

  return sum === num;

})

//5. Return all numbers divisible by 5

let divisibility = numbers => numbers.filter(el => el % 5 === 0)

//6. Return those strings which contains more than three vowels

let moreThanTwoVowel = arr => arr.filter(el => {
  return el.split("").filter( x => "aeiou".includes(x) ).length > 3 
})

//7. Return those numbers which contains same digit and their length is greater than 1.

let sameDigit = num => num.filter(el => {
  let num = el;
  let elementLength = el.toString().length;
  return Number( el.toString().split("")[0].repeat(elementLength) )  === num && (elementLength > 1);
})

//8. Return all even numbers.

let checkEven = numbers => numbers.filter(el => el % 2 === 0);

//9. Return all armstrong numbers. [ 153 = 1^3 + 5^3 + 3^3]

let armstrongNumbers = nums => nums.filter( el => {
  let currentNumber = el;
  let sumOfEachDigitsCubes = (el + "").split("").reduce( (acc, cv) => acc += (cv ** 3),0);

  return currentNumber === sumOfEachDigitsCubes;
});

//10. Return all string with even length.

let stringWithEvenLength = nums => nums.filter(el => el.length % 2 === 0);





// Reduce



//1. Sum the ascii values of each element string

let sumOfAscii = str =>  str.reduce( (acc, cv) => {
  acc.push( cv.split("").reduce( (acc, cv) => acc + cv.charCodeAt() ,0) );
  return acc;
}, [])

//2. Sum of all numbers in the array 

let sumElements = nums => nums.reduce( (acc, cv) => acc + cv, 0 )

//3. Remove duplicate numbers

let removeDuplicateNums = nums => nums.reduce( (acc, cv) => {
  if(!acc.includes(cv)) {
    acc.push(cv);
  }
  return acc;
} ,[])

//4. Sum of all even numbers 

let sumOfEvenNums = nums => nums.reduce( (acc, cv) => acc += (cv % 2 == 0) ? cv : 0 ,0 )

//5. Count Occurence of each vowel in each string element

let count = arr => arr.reduce( (acc, cv) => {

  acc.push( cv.split("").reduce( (acc2, cv2) => {
    let vowels = "aeiou".split("");
    let pos = vowels.indexOf(cv2);

    if(pos !== -1) {
      
      if( acc2[cv2] ) {
        acc2[cv2] += 1; 
      } else {
          acc2[cv2] = 1;
      }
    }

    return acc2;
  },{}) )
  return acc
} ,[])


//6. Add the even string length

let addEvenLength = arr => arr.reduce( (acc, cv) => acc += (cv.length % 2 === 0) ? cv.length : 0, 0)

//7. Return maximum number 

let maxNum = (nums) => num.reduce( (acc, cv) => {
  if(cv > acc) {
    acc = cv;
  } 
  return acc;
},0)

//8. Return shortest string

let shortestStr = arr => arr.reduce( (acc, cv) => {
  
  if(cv.length < acc.length) {
    acc = cv;
  } 
  
  return acc;
},)

//9. Sum of all odd numbers 

let sumOfEvenNums = nums => nums.reduce( (acc, cv) => acc += (cv % 2 !== 0) ? cv : 0 ,0 )

//10. Return longest string

let shortestStr = arr => arr.reduce( (acc, cv) => {
  
  if(cv.length < acc.length) {
    acc = cv;
  } 
  
  return acc;
},)





// Splice 



// 1. Remove element whose index is 2 

let remove2ndIndexElement = arr => {
  arr.splice(2,1);
  return arr;
}

// 2. Replace element whose index is 2 with "New Word" 

let replace2ndIndexElement = arr => {
  arr.splice(2,1,"New Word");
  return arr;
}

//3. Replace 3 element from the end.

let remove3ElementFromEnd = arr => {
  arr.splice(-3,3,"Hello");
  return arr;
}

//4. Remove midlle element.

let removeMidElement = arr => {
  arr.splice( Math.floor(arr.length / 2), 1);
  return arr;
}

//5. Remove first element 

let removeFirstElement = arr => {
  arr.splice(0,1);
  return arr;
}

//6. Remove element form any position

let removeFromDesiredPosition = (arr, pos) => {
  arr.splice(pos,1);
  return arr;
}

//7. Remove any number element from the desired postion.

let removeAnyFromAnywhere = (arr,pos,n) => {
  arr.splice(pos,n);
  return arr;
}

//8. Replace any number of elements from any where with any value.

let replaceDesired = (arr,pos,n,word) => {
  arr.splice(pos,n,word);
  return arr;
}

//9. Return subarray of the given array.

let cut = (arr, start, end) =>  {
  return arr.splice(start, (end - start));
}

//10. Push a value into a desired postion of a array 

let pushValue = (arr, pos, value) => {
  arr.splice(pos,0,value);
  return arr;
} 









