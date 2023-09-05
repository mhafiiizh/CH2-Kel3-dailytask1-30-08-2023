const data = require("./daily-task-js.json");

function companyStartsWithL(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const company = arr[i].company;
    if (company && company[1] === "L") {
      result.push(arr[i]);
    }
  }

  return {
    resultUser: result,
    totalUser: result.length,
  };
}

console.log(companyStartsWithL(data));
