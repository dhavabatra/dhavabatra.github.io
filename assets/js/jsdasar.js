let nilaiAngka = "";

function tampilkan(value) {
    console.log(value);
    nilaiAngka += value;
    document.getElementById("angka").value = nilaiAngka;
}

function hapus() {
    nilaiAngka = "";
    document.getElementById("angka").value = nilaiAngka;
}

function hasil() {
    try {
        nilaiAngka = eval(nilaiAngka);
        document.getElementById("angka").value = nilaiAngka;
    } catch (error) {
        document.getElementById("angka").value = "Error";
    }
}
