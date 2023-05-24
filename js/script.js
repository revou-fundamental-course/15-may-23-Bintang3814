function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    var hasilLuas = sisiLuas * sisiLuas;

    document.getElementById("rumus-luas").innerHTML = ("L = S x S");
    document.getElementById("lsisi").innerHTML = ("L = " + sisiLuas + (" x ") + sisiLuas);
    document.getElementById("output_luas").innerHTML = ("L = " + hasilLuas);
    
    console.log(hasilLuas);
    // Fungsi javascript ini berfungsi untuk menghitung Luas Persegi dan memunculkan hasilnya beserta dengan proses perhitungannya
}

function hitungKeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    var hasilKeliling = 4 * sisiKeliling;

    document.getElementById("rumus-keliling").innerHTML = ("L = 4 x S");
    document.getElementById("ksisi").innerHTML = ("L = 4 x " + sisiKeliling);
    document.getElementById("output_keliling").innerHTML = ("L = " + hasilKeliling);
    
    console.log(hasilKeliling);
    // Fungsi javascript ini berfungsi untuk menghitung Keliling Persegi dan memunculkan hasilnya beserta dengan proses perhitungannya
}

function resetLuas() {
    document.getElementById("sisi-luas").value = '';
    document.getElementById("rumus-luas").innerHTML = '';
    document.getElementById("lsisi").innerHTML = '';
    document.getElementById("output_luas").innerHTML = '';
    // Fungsi javascript ini untuk me-reset result dan input
}

function resetKeliling() {
    document.getElementById("sisi-keliling").value = '';
    document.getElementById("rumus-keliling").innerHTML = '';
    document.getElementById("ksisi").innerHTML = '';
    document.getElementById("output_keliling").innerHTML = '';
    // Fungsi javascript ini untuk me-reset result dan input
}