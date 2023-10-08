console.log("Tugas Javascript \n Rizki Ramadhan \n\n");

// 1. Penggunaan if
console.log("---- IF ----");
let nilai = 85;

if (nilai >= 70) {
    console.log("Selamat, Anda lulus!");
}

// 2. Penggunaan else
console.log("\n ---- Else ----");

// let umur = 15;

if (nilai >= 70) {
    console.log("Anda Lulus!");
} else {
    console.log("Anda tidak lulus, Silahkan mengulang!");
}

// 3. Nested else
console.log("\n ---- Nested Else ----");

let hari = "Senin";
let cuacaBagus = true;

if (hari === "Minggu") {
    if (cuacaBagus) {
        console.log("Nikmati hari Minggu Anda!");
    } else {
        console.log("Cuaca sedang tidak bagus");
    }
} else {
    console.log("Ini bukan hari Minggu.");
}

// 4. Switch Case
console.log("\n ---- Switch Case ----");

let pilihan = "3";

switch (pilihan) {
    case "1":
        console.log("Anda memilih Bakso");
        break;
    case "2":
        console.log("Anda memilih Mie Ayam");
        break;
    case "3":
        console.log("Anda memilih Mie Ayam Bakso");
        break;
    default:
        console.log("Pilihan anda salah");
}

// 5. For statement
console.log("\n ---- For ----");

for (let i = 1; i <= 5; i++) {
    console.log("Ajarin dong puhh " + i);
}

// 6. Function
console.log("\n ---- Function ----");

function sum(a, b) {
    return a + b;
}

let hasilPenjumlahan = sum(5, 3);
console.log("Hasil penjumlahan: " + hasilPenjumlahan);