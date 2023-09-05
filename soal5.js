const data = require("./daily-task-js.json");

function userEyeColor(arr) {
  // Variable array untuk menampung hasil proses
  let result = [];
  //   Looping untuk pengecekan user
  for (let i = 0; i < arr.length; i++) {
    // Kondisi jika pengguna memiliki eyeColor blue
    if (arr[i].eyeColor == "blue") {
      // Jika true di-push ke array
      result.push(arr[i]);
    }
  }

  return {
    resultUser: result,
    totalUser: result.length,
  };
}

console.log(userEyeColor(data));
