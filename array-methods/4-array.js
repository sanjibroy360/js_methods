var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
// your code goes here

let countDogYear = animal => {
  let sum = 0;
  for(let i = 0; i < animal.length; i++) {
    if(animal[i].type === "dog") {
      sum += animal[i].age;
    }
  }
  return (sum * 7);
}

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog

let countDogYear = animal => {
  let sum = 0;
  animal = animal.filter( el => el.type === "dog");
  for(let i = 0; i < animal.length; i++) {
      sum += animal[i].age;
  }
  return (sum * 7);
}


// 2. map - to multiply human year to dog year

let countDogYear = animal => {
  let sum = 0;
  animal = animal.filter( el => el.type === "dog").map(x => x.age *= 7);
  for(let i = 0; i < animal.length; i++) {
    sum += animal[i];
  }
  return sum;
}


// 3. reduce - to accumulate total age.

let countDogYear = animal => {
  return animal.reduce( (acc, cv) => {
    if(cv.type === "dog") {
      acc += (cv.age * 7);
    }
    return acc;
  } ,0)
}


// Solution 105
