// tentukan user yang mempunyai nama kurang dari 10 karakter
// dan umur nya diatas 30 atau gender nya Male dan eyeColor nya brown

const data = require("./daily-task-js.json");

function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let lengthChar = arr[i].name.length;
    let userAge = arr[i].age;
    let userGender = arr[i].userGender;
    let userEyeColor = arr[i].eyeColor;
    if (
      (lengthChar < 10 && userAge > 30) ||
      (userGender === "male" && userEyeColor === "brown")
    ) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(solution(data));
