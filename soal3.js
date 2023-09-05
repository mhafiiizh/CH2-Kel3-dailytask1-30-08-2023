const data = require("./daily-task-js.json");

function checkUserRegistered(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].registered >= "2014" && arr[i].registered <= "2018") {
      result.push(arr[i]);
    }
  }
  return {
    userRegistered: result,
    countUser: result.length,
  };
}

console.log(checkUserRegistered(data));
