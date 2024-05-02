function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");

// explainParseInt("3.14");
// console.log("**********************************")
// console.log("Would not be able to parse because it can nly be able to parse the end of the integer value")
// explainParseInt("wdefs123dvfds")
// console.log("**********************************")

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
console.log("**********************************")
console.log("Would not be able to parse because it can only be able to parse the end of the integer value")
explainParseFloat("wdefs123dvfds")
console.log("**********************************")
