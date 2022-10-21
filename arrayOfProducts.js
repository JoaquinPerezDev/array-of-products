// write a function that takes in a non-empty array of integers and returns an array
// the same length, where each element in the output array is equal to the product
// of every other number in the input array.

// Not that you're expected to solve this problem without using division.

// Sample input: array = [5, 1, 4, 2]
// Sample output: [8, 40, 10, 20]

//Naive approach: We can certainly use nested loops to accomplish the task but
//there is more efficient approaches to tackling this problem. The general idea
//here is to make two passes through the array. On the first pass,
//we create a new array which stores the product of every value to the left of array[i].
//On the second pass, we multiply the value in each bucket of our temporary
//array with the product of everything to the left of our index.

//O(n) time | O(n) space complexity
function arrayOfProducts(array) {
  // Write your code here.
  let output = [],
    leftProduct = 1,
    rightProduct = 1;

  if (array.length === 1) {
    return [0];
  }

  for (let i = 0; i < array.length; i++) {
    output.push(leftProduct);
    leftProduct = leftProduct * array[i];
  }
  for (let i = array.length - 1; i >= 0; i--) {
    output[i] = output[i] * rightProduct;
    rightProduct = rightProduct * array[i];
  }

  return output;
}

//Below is another variation on the above code.
//O(n) time | O(n) space complexity
// function arrayOfProducts(array) {
//   const arrayLength = array.length;
//   const left = [1];
//   const right = [1];
//   const result = [];

//   if(arrayLength === 1) {
//     return[0];
//   }

//     let leftProduct = 1;
//     for(let i = 0, j = arrayLength - 1; i < arrayLength - 1; i++, j--) {
//       leftProduct *= array[i];
//       left.push(leftProduct);
//     }

//     let rightProduct = 1;
//     for(let i = arrayLength - 1; i >= 0; i--) {
//       result[i] = left[i] * rightProduct;
//       rightProduct *= array[i];
//     }
//   return result;
//   }
