// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.

function solution(str) {
  let result = "NO"; // Set default result to "NO"

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "b") {
      // Periksa jika karakter saat ini adalah 'a' atau 'b'
      for (let j = i + 4; j < str.length; j++) {
        if (
          (str[i] === "a" && str[j] === "b") ||
          (str[i] === "b" && str[j] === "a")
        ) {
          result = "YES";
          break; // Jika pasangan ditemukan, keluar dari loop inner
        }
      }
    }
  }

  return result;
}

console.log(solution("acdebae")); // expected output YES
console.log(solution("cdaecba")); // expected output NO
