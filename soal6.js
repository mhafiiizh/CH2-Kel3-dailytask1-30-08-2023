const data = require("./daily-task-js.json");

function userFemaleEyeBrown(arr) {
  // Variable array untuk menampung hasil proses
  let result = [];
  //   Looping untuk pengecekan user
  for (let i = 0; i < arr.length; i++) {
    // Kondisi jika pengguna memiliki gender female atau eyeColor brown
    if (arr[i].gender == "female" || arr[i].eyeColor == "brown") {
      // Jika true di-push ke array
      result.push(arr[i]);
    }
  }

  return {
    resultUser: result,
    totalUser: result.length,
  };
}

console.log(userFemaleEyeBrown(data));
