// Is Truthy
// const array = ["string", false, null, undefined, 0, ""]

// function truthyFalsey(itemsToTest){
//     for(i = 0; i > itemsToTest.length; i++)
//         console.log(i)
//     if(itemsToTest[i] === true){
//         console.log(`${itemsToTest[i]} is true`)
//     } else {
//         console.log(`${itemsToTest[i]} is false`)
//     }
// }
// truthyFalsey(array)



// Number Line 
// const array = [(50 + 51), (99 + -2), (0 + 101), (500 + -500), (-1000 + 0), (-5 + 0)]

// function numLine(itemsToTest){
//     for(i = 0; i < itemsToTest.length; i++){
//     if(itemsToTest[i] < -1000){
//         console.log(`${itemsToTest[i]} is less than -1000`)
//     } else if(itemsToTest[i] === false){
//         console.log(`${itemsToTest[i]} is a negative number.`)
//     } else if(itemsToTest[i] === 0){
//         console.log(`${itemsToTest[i]} is equal to 0`)
//     } else if(itemsToTest[i] > 0){
//         console.log(`${itemsToTest[i]} is larger than 0`)
//     } else if(itemsToTest[i] > 100){
//         console.log(`${itemsToTest[i]} is greater than 100`)
//     }
//   }
// }

// numLine(array)



// Greater Than Or Equal To 5

// function compareNum(num1, num2){
//     if(num1 >= 5 && num2 >= 5){
//         console.log("True")
//     } else {
//         console.log("False")
//     } 
// }

// compareNum(5, 6)
// compareNum(10, 11)
// compareNum(0, 0)
// compareNum(1000, -1000)
// compareNum(6, 4)
// compareNum(5, 5)



// Pair and Compare

// function pairCompare(param1A, param1B, param2A, param2B){
//   if(param1A === param1B || param2A === param2B){
//     console.log("True")
//   } else {
//     console.log("False")
//   }
// }

// pairCompare("cat", "cat", 6, "6")
// pairCompare("five", 5, "dog", "dawg")
// pairCompare(0, false, "horse", "horse")
// pairCompare("eight", "eight", "ate", "ate")
// pairCompare(11, "eleven", "four", "for")
// pairCompare("cake", "cake", "pair", "pie")