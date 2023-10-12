// JavaScript adalah bahasa pemrograman yang digunakan untuk mengendalikan perilaku dan
// interaksi di halaman web. Dengan JavaScript, kita dapat membuat fitur-fitur seperti validasi
// formulir, animasi, perubahan konten secara dinamis, dan banyak lagi.

// ## Variabel dan Tipe Data
// Variabel dalam JavaScript digunakan untuk menyimpan data dan nilai yang dapat digunakan
// dalam program. Kita dapat mendefinisikan variabel dalam JavaScript dengan menggunakan
// kata kunci `var`, `let`, atau `const`, tergantung pada cara kita ingin menggunakannya.

// ## Array
// Dalam JavaScript, sebuah array adalah struktur data yang memungkinkan kita untuk
// menyimpan dan memanipulasi kumpulan nilai. Array dapat berisi elemen-elemen dengan
// berbagai jenis data, termasuk angka, string, objek, dan bahkan array lainnya.

// Contoh sederhana Array
let pemain = ['ronaldo', 'messi', 'mbappe', 'neymar']
console.log(pemain[0])
console.log(pemain[3])
// Contoh manipulasi indeks array
pemain[2] = 'maradona'
console.log(pemain[2])

// ## Control Flow
// Dalam JavaScript mengacu pada cara pernyataan dan blok kode dieksekusi dalam program JavaScript kita. 
// Ada beberapa struktur control flow yang digunakan dalam JavaScript untuk mengatur urutan eksekusi kode.

// # Pernyataan `if` digunakan untuk menjalankan blok kode jika kondisi yang diberikan benar (true).
// # Pernyataan `else if` digunakan untuk mengecek beberapa kondisi berurutan. 
// # Pernyataan `switch` digunakan untuk memeriksa ekspresi terhadap berbagai kasus dan menjalankan kode yang sesuai dengan kasus yang cocok.
// # Pernyataan `for` digunakan untuk membuat perulangan yang dapat mengulangi kode sejumlah kali dengan kondisi yang ditentukan.
// # Pernyataan `while` digunakan untuk membuat perulangan yang akan terus berlanjut selama kondisi yang diberikan benar (true). 
// # Pernyataan `do...while` juga digunakan untuk membuat perulangan, tetapi akan selalu menjalankan blok kode setidaknya satu kali sebelum memeriksa kondisi. 
// # Pernyataan `for...in` digunakan untuk mengulang melalui properti objek, sementara `for...of`digunakan untuk mengulang melalui nilai iterable (seperti array). 

// Contoh if, else if
let usia = prompt("masukkan usia anda") // Prompt untuk input
usia = parseInt(usia)

if (usia < 18) {
  console.log ('anda masih di bawah umur')
} else if (usia >= 18 && usia <= 21) {
  console.log ('Selamat datang')
} else {
  console.log ('anda terlalu tua untuk mendaftar')
}

// Contoh switch case
let nomorHari = parseInt(prompt("Masukkan nomor hari"))

let namaHari;
switch (nomorHari) {
  case 1:
    namaHari = 'Senin';
    break;
  case 2:
    namaHari = 'Selasa';
    break;
  case 3:
    namaHari = 'Rabu';
    break;
  case 4:
    namaHari = 'Kamis';
    break;
  case 5:
    namaHari = 'Jumat';
    break;
  case 6:
    namaHari = 'Sabtu';
    break;
  case 7:
    namaHari = 'Minggu';
    break;
  default:
    namaHari = 'Nomor Hari tidak valid';
}

console.log('Hari ini hari ' + namaHari)

// Contoh perulangan for
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}  

// Contoh perulangan while
while (state) {
  console.log("Infinite loop until state false")
}

// Contoh do...while
do {
  console.log("Infinite loop until state false")
  } while (state) {
    console.log("Infinite loop until state false")
  }

// Contoh for..in dan do..for
for (const i in object) {
  console.log(i)
}
for (const i of object) {
  console.log(i)
}

// ## Fungsi
// Fungsi (function) adalah salah satu konsep yang sangat penting dalam JavaScript. Fungsi
// adalah blok kode yang dapat dipanggil secara berulang untuk menjalankan tugas tertentu.
// Dengan menggunakan fungsi, kita dapat mengorganisir kode kita dengan lebih baik,
// menghindari pengulangan kode, dan membuat kode kita lebih mudah dipahami dan dikelola.

// Contoh function dan juga return value
function rumusLuasLingkaran(jariJari) {
  const luas = Math.PI * jariJari * jariJari;
  return luas;
}

const jariJari = 90;
const luasLingkaran = rumusLuasLingkaran(jariJari)
console.log(luasLingkaran)

// Contoh anonymus function (mendefinisikan fungsi tanpa memberikannya nama (fungsi anonim) dan 
// menyimpannya dalam variabel atau menggunakan mereka langsung.)
let perkalian = function(x, y) {
  return x * y;
};

let hasilPerkalian = perkalian(4, 6); // hasilPerkalian sekarang berisi nilai 24