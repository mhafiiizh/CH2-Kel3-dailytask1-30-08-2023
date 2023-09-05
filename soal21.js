// Buatlah sebuah function untuk melakukan format sorting array di dalam kode Javascript.
// Bisa diskusi dengan teman kelompokmu ya!

// Variable arr untuk menampung array
const arr = [2, 3, 1, 5, 8, 6, 4, 9, 7];

// Function untuk sorting array dari yang paling kecil
function bubbleSortAsc(arr) {
  // Looping pertama untuk kontrol berapa kali proses melewati array
  for (let i = 0; i < arr.length; i++) {
    // Looping kedua untuk mengecek elemen array satu persatu
    for (let j = 0; j < arr.length; j++) {
      // Conditional statement untuk perbandingan elemen array
      if (arr[j] > arr[j + 1]) {
        // Proses penukaran elemen sesuai conditional statement
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSortDesc(arr) {
  // Looping pertama untuk kontrol berapa kali proses melewati array
  for (let i = 0; i < arr.length; i++) {
    // Looping kedua untuk mengecek elemen array satu persatu
    for (let j = 0; j < arr.length; j++) {
      // Conditional statement untuk perbandingan elemen array
      if (arr[j] < arr[j + 1]) {
        // Proses penukaran elemen sesuai conditional statement
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(
  "Ini array yang diurutkan secara Ascending = " + bubbleSortAsc(arr)
);
console.log(
  "Ini array yang diurutkan secara Descending = " + bubbleSortDesc(arr)
);
