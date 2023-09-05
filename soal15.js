const data = require("./daily-task-js.json");

function changeAddress(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male") {
      arr[i].address = "gunung";
    } else if (arr[i].gender === "female") {
      arr[i].address = "laut";
    }
  }
  return arr;
}

console.log(changeAddress(data));
