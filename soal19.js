// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
  // tulis jawabanmu disini
  let sum = 0;
  while (n > 0) {
    // Proses untuk menamgbil angka digit terakhir
    const takeLastDigit = n % 10;
    // Variable penampung untuk proses penambahan tiap digit
    sum = sum + takeLastDigit;
    // Proses untuk menghilangkan digit terakhir
    // Math.floor hanya mengambil bilangan bulat
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(solution(2022)); // expected output 6
console.log(solution(1001)); // expected output 2
