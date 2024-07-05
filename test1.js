// multi line comment out
/*

inputDOM.value
  window.event
    const input
      const array
        process variable
          output variable


*/

// beginning of process

const inputValue = document.getElementById("input").value;
const inputValue2 = document.getElementById("input2").value;
const inputValue3 = document.getElementById("input3").value;
const inputObj = {
  input1: inputValue,
  input2: inputValue2,
  input3: inputValue3,
};
document.addEventListener("keydown", function (event) {});
window.addEventListener("change", function (event) {});

// middle of process

function generateOptimalOutput(inputObj) {
  const output = {
    parameter1: generateParameter(inputObj.input1),
    parameter2: generateParameter(inputObj.input2),
    parameter3: generateParameter(inputObj.input3),
  };

  return output;
}

// end of process
const outputDisplay = document.getElementById("output");
outputDisplay.innerHTML = inputValue;




