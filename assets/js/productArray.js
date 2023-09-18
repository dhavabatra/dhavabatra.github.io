const watch = ['Ini adalah produk 1', 'Ini adalah produk 2', 'Ini adalah produk 3', 'Ini adalah produk 4']
let cardContainer = document.getElementById("cardContainer");

// Melakukan perulangan melalui array dan membuat kartu untuk setiap elemen
watch.forEach(function (item) {
    let card = document.createElement("div");
    card.className = "card";

    card.textContent = item;

    cardContainer.appendChild(card);
});

// const jam = ['a','b','c','d']
// let cardContainer_2 = document.getElementById('cardContainer_2')
// jam.forEach(function (item) {
//     let card = document.createElement("div");
//     card.className = "card";

//     card.textContent = item;

//     cardContainer.appendChild(card);
// });

console.log(watch);