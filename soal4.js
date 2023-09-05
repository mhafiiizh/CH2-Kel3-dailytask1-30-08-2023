const data = require("./daily-task-js.json");

function imamFriends(arr) {
  // Variable result sebagai penampung
  let result = [];
  // Looping pertama untuk mengecek setiap user dalam array
  for (let i = 0; i < arr.length; i++) {
    // Variable dgn tipe data bool sebagai syarat
    // Apakah user mempunyai teman bernama Imam atau tidak
    let hasImamFriend = false;
    // Loop melalui teman-teman pengguna
    for (let j = 0; j < arr[i].friends.length; j++) {
      // Conditional statement mempunyai teman bernama imam
      if (arr[i].friends[j] === "Imam") {
        // Variable hasImamFriend menjadi true
        hasImamFriend = true;
        break; // Keluar dari loop jika teman "Imam" ditemukan
      }
    }
    // Jika variable hasImamFriend true push ke array result
    if (hasImamFriend) {
      result.push(arr[i]);
    }
  }

  return {
    resultUser: result,
    totalUser: result.length,
  };
}

console.log(imamFriends(data));
