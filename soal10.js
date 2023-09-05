const data = require("./daily-task-js.json");

function belowThirtyAfter2018(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 30 && arr[i].registered > "2018") {
      result.push(arr[i]);
    }
  }

  return {
    resultUser: result,
    totalUser: result.length,
  };
}

console.log(belowThirtyAfter2018(data));
