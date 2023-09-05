// Buat sebuah function yang bisa melakukan fungsi dari fibonacci number di dalam kode Javascript.
// Bisa diskusi dengan teman kelompokmu ya!

const fibonacciNumber = (num) => {
  // Variable deklarasi angka pertama dan kedua
  // Variable nextNum berfungsi untuk menampung hasil proses pertambahan.
  let firstNum = 0,
    secNum = 1,
    nextNum;
  // Array penampung hasil
  let result = [];
  // Looping untuk melakukan proses pertambahan
  // Jumlah looping tergantung dengan berapa angka yang dimasukkan pada parameter
  for (let i = 0; i < num; i++) {
    // Method push untuk menambahkan ke array result
    result.push(firstNum);
    // Proses pertambahan
    nextNum = firstNum + secNum;
    // Proses pertukaran
    firstNum = secNum;
    secNum = nextNum;
  }
  return result;
};

console.log(fibonacciNumber(10));
