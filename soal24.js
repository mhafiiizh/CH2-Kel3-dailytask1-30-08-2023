// buat looping sehingga membuat angka 1 sampai dengan 100
// tapi setiap modulu 3, 5 dan 3 DAN 5 ada spesial nya spt penjelasan dibawah ini =

// Ada sebuah mantra yang mengeluarkan mantra Fizz Buzz dengan rule:

// Mantra “Fizz” akan keluar dengan nilai modulo 3
// Mantra “Buzz” akan keluar dengan nilai modulo 5
// Mantra akan “Fizz Buzz” akan keluar dengan nilai modulo 3 dan 5

// Bisa diskusi dengan teman kelompokmu ya!

// expected output :
// 1
// 2
// Fizz
// 3
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// dan seterus nya sampai dengan 100

function spellFizzBuzz() {
  let printSpell = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      printSpell = "Fizz Buzz";
    } else if (i % 3 === 0) {
      printSpell = "Fizz";
    } else if (i % 5 === 0) {
      printSpell = "Buzz";
    } else {
      printSpell = i;
    }
    console.log(printSpell);
  }
}

spellFizzBuzz();
