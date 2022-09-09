// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

describe("my_Coder", () => {
    
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {

        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"

     expect(my_Coder(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
     expect(my_Coder(secretCodeWord2)).toEqual("G0bbl3dyg00k");
     expect(my_Coder(secretCodeWord3)).toEqual("3cc3ntr1c");

    });
  });

//  FAIL  ./code-challenges.test.js
//   my_Coder
//   ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)

// ● my_Coder › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//   ReferenceError: my_Coder is not defined



// b) Create the function that makes the test pass.

// PSEUDOCODE:
// Create a function named my_Coder.
// Inputs are string of characters to locate.
// Outputs will replace letter characters 'a', 'e', 'i', 'o' with numbers 4,3,1,0 respectively. 
// Use conditional if/else with built in method .replace to commit the changes.

 const my_Coder = (str) => {
    
    let letterA = str.split('')

    for (let  i=0; i < letterA.length; i++){
      
    if (str[i].includes("a", "e", "i", "o")){
      return str.replace("a","4")}
    else if (str.includes("e")) {
      return str.replace("e","3")}
    else if (str.includes("i")) { 
      return str.replace("1")}
    else if (str.includes("o")){
      return str.replace("o","0")}
    } 
 }

  
// BLOCKER. NOT ITERATING 
//   expect(received).toEqual(expected) // deep equality

Expected: "L4ck4d41s1c4l"
Received: "L4ckadaisical"




// // --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// // a) Create a test with expects statement using the variable provided.

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

// describe("noFruit", () => {
    
//     it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {

//         const letterA = "a"
//         // Expected output: ["Mango", "Apricot", "Peach"]
//         const letterE = "e"
//         // Expected output: ["Cherry", "Blueberry", "Peach"] 

//      expect(noFruit(letterA)).toEqual(["Mango", "Apricot", "Peach"]);
//      expect(noFruit(letterE)).toEqual(["Cherry", "Blueberry", "Peach"] );

//     });
//   });
  
//  FAIL  ./code-challenges.test.js
//   noFruit
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)

// ● noFruit › takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//   ReferenceError: noFruit is not defined


// // b) Create the function that makes the test pass.


// PSEUDOCODE:
// Create a function named noFruit.
// Inputs are array of words.
// Outputs returns an array of all the words containing a particular letter.
// Use built in method .filter and .includes to iterate though each words in array.

    //  const noFruit = (array, str) => {
        
    //    return array.filter((item) => item.toLowerCase.includes(str))
    //  }

//    TypeError: array.filter is not a function

// 130 |      const noFruit = (array, str) => {
//     131 |         
//   > 132 |        return array.filter((item) => item.toLowerCase.includes(str))



//  --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false
// const hand4 = [7, 2, 7, 2, 7]
// // Expected output: true

// describe("myPocker", () => {
    
//     it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {

//         const hand1 = [5, 5, 5, 3, 3]
//         // Expected output: true
//         const hand2 = [5, 5, 3, 3, 4]
//         // Expected output: false
//         const hand3 = [5, 5, 5, 5, 4]
//         // Expected output: false
//         const hand4 = [7, 2, 7, 2, 7]
//         // Expected output: true
        

//      expect(myPocker(hand1)).toEqual("True");
//      expect(myPocker(hand2)).toEqual("False");
//      expect(myPocker(hand3)).toEqual("False");
//      expect(myPocker(hand4)).toEqual("True");

//     });
//   });

//  FAIL  ./code-challenges.test.js
//   myPocker
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// ● myPocker › takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//   ReferenceError: myPocker is not defined


// // b) Create the function that makes the test pass.


// PSEUDOCODE:
// Create a function named myPocker.
// Inputs are array of numbers.
// Outputs should show determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
// Use conditional if/else to iterate through array to set each true/false value.

    const myPocker = (array) => {
       for (let i=0; i < array.length; i++)
       
     if ((array[0] === arr[1]) && (array[1] === array[2]) &&
       (array[3] === arr[4])) {
        return true
       }
       else {
        return false
       }
    }

