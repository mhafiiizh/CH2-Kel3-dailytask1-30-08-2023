const data = require("./daily-task-js.json");

function changeDomainEmail(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Mengubah perusahaan (company) menjadi "binar"
    arr[i].company = "binar";

    // Mengubah domain email menjadi "@binar.org"
    let email = arr[i].email;
    // Variable untuk menampung index @
    let atIndex = email.indexOf("@");
    // Conditional statement untuk mengubah email
    if (atIndex !== -1) {
      // mengambil username dengan method substring dari index 0 sampe index sebelum @
      let username = email.substring(0, atIndex);
      //   Mengubah email
      arr[i].email = username + "@binar.org";
    }
  }
}

// Penggunaan fungsi
changeDomainEmail(data);

// Menampilkan data yang sudah diubah
console.log(data);
