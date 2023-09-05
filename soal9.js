const data = require("./daily-task-js.json");

function companyEndsWithE(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const company = arr[i].company;
    if (company && company[company.length - 1] === "E") {
      result.push(arr[i]);
    }
  }

  return {
    resultUser: result,
    totalUser: result.length,
  };
}

console.log(companyEndsWithE(data));
