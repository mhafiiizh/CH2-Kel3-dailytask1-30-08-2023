// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.

function solution(n) {
  let result;
  // tulis jawabanmu disini
  if (n <= 100 && n >= 91) {
    result = "A";
  } else if (n <= 90 && n >= 81) {
    result = "B";
  } else if (n <= 80 && n >= 71) {
    result = "C";
  } else if (n <= 70 && n >= 61) {
    result = "D";
  } else if (n <= 60) {
    result = "E";
  }

  return result;
}

console.log(solution(95)); // expected output A
console.log(solution(76)); // expected output C
