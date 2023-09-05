const data = require("./daily-task-js.json");

function reverseName(arr) {
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    // Variable penampung nama
    var name = arr[i].name;

    // Inisialisasi variable untuk menyimpan nama
    var resultReverse = "";

    // Mencari posisi spasi
    var spasiIndex = -1;
    // Looping untuk mencari spasi
    for (var j = 0; j < name.length; j++) {
      // Conditional statement untuk mencari spasi di string name
      if (name[j] === " ") {
        spasiIndex = j;
        break;
      }
    }

    // Jika ditemukan spasi, menukar nama belakang dan depan
    if (spasiIndex !== -1) {
      // Variable resultReverse menampung string terbaru
      // substring digunakan untuk mengambil string sesuai index
      resultReverse =
        name.substring(spasiIndex + 1) + " " + name.substring(0, spasiIndex);
    } else {
      // Jika tidak ditemukan spasi, mengembalikan nama asli
      resultReverse = name;
    }

    result.push(resultReverse);
  }

  return result;
}

// Contoh penggunaan fungsi
console.log(reverseName(data));
