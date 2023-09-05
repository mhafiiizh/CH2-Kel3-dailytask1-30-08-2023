const data = require("./daily-task-js.json");

function femaleUser(arr) {
  let result = [];
  let countFemale;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "female") {
      result.push(arr[i]);
    }
  }

  return {
    resultFemale: result,
    totalFemale: result.length,
  };
}

console.log(femaleUser(data));
