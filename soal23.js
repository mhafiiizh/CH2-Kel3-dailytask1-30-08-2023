// Ada sebuah potongan array seperti di bawah.

// Buatlah perhitungan untuk menentukan dari nilai kelulusan dari siswa dengan aturan:
// Nilai di bawah 50 maka tidak lulus
// Nilai di atas 50 dan di bawah 70 maka remedial
// Nilai di atas 70 maka lulus

// Bisa diskusi dengan kelompokmu ya!

const students = [
  { name: "Peter", score: 30 },
  { name: "Parker", score: 50 },
  { name: "Harry", score: 70 },
  { name: "Eva", score: 79 },
  { name: "Justin", score: 60 },
  { name: "Bieber", score: 90 },
  { name: "Evan", score: 55 },
  { name: "Rowling", score: 90 },
];

function checkScore(arr) {
  // Variable result berupa array untuk menampung hasil eksekusi proses
  let result = [];
  // Loop untuk mengecek sebanyak panjang array yang dimasukkan ke parameter
  for (let i = 0; i < arr.length; i++) {
    // Variable isPassed untuk menampung hasil proses sementara
    let isPassed = "";
    // Conditional statement dengan score lebih dari 70
    if (arr[i].score > 70) {
      // Variable isPassed menampung hasil Lulus
      isPassed = arr[i].name + " Lulus";
      // Conditional statement dengan score kurang dari sama dengan 70 dan lebih dari sama dengan 50
    } else if (arr[i].score <= 70 && arr[i].score >= 50) {
      // Variable isPassed menampung hasil Remedial
      isPassed = arr[i].name + " Remedial";
      // Conditional statement dengan score kurang dari 50
    } else if (arr[i].score < 50) {
      // Variable isPassed menampung hasil tidak lulus
      isPassed = arr[i].name + " Tidak Lulus";
    }
    // Method push ke array result berdasarkan hasil dari variable isPassed
    result.push(isPassed);
  }
  // Mengembalikan nilai result
  return result;
}

console.log(checkScore(students));
