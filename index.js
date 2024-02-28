const number = document.getElementById("number");
const output = document.querySelector(".output p");
const convertBtn = document.getElementById("convert-btn");

const romToMath = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const romanConverter = (num) => {
  let convertedStr = "";
  romToMath.forEach((exp) => {
    while (num >= exp[1]) {
      convertedStr += exp[0];
      num -= exp[1];
    }
  });
  return convertedStr;
};

const convert = () => {
  let str = number.value;
  let outputStr;

  if (str === "") {
    outputStr = "Please enter a valid number";
  } else {
    const num = Number(str);
    if (!Number.isInteger(num)) {
      outputStr = "Please enter a whole number in range 0 to 3999 ";
    } else if (num < 0) {
      outputStr = "Please enter a number greater than or equal to 1";
    } else if (num > 3999) {
      //change
      outputStr = "Please enter a number less than or equal to 3999";
    } else {
      const result = romanConverter(num);
      outputStr = `Result : ${result}`;
    }
  }
  output.innerText = outputStr;
};

convertBtn.addEventListener("click", convert);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convert();
  }
});
