// Contoh URL API dengan parameter
const apiUrl = 'https://pokeapi.co/api/v2/machine/{id}/';
// const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';


// Jumlah permintaan API yang ingin Anda buat
const jumlahPermintaan = 5;

// Membuat perulangan untuk mengambil data dari API
for (let i = 1; i <= {id}; i++) {
  const url = apiUrl + i;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Terjadi kesalahan saat mengambil data dari API (page ${id})`);
      }
      return response.json();
    })
    .then(data => {
      // Data dari API tersedia di sini
      console.log(`Data dari API (page ${id}):`, data);
    })
    .catch(error => {
      // Tangani kesalahan jika terjadi
      console.error(`Kesalahan saat mengambil data dari API (page ${i}):`, error);
    });
}




// let a = 100
// const acak = Math.floor(Math.random() * 100) + 1

// console.log('Tebakanmu = ' + a);

// if (a == acak) {
//     b = "Bilangan Tepat";
// }
// else if (a < acak) {
//     b = "Terlalu Kecil"
// }
// else if (a > acak) {
//     b = "Terlalu Besar"
// }

// console.log(b);
// console.log('Angka tersembunyi = ' + acak);