// console.log('ini adalah salah');

const obj = {
    nama: 'Hadi',
    Alamat: 'Bandung',
    Umur: 34
}

console.log(obj);

if (obj.Umur < 30) {
    console.log('Anak Anak');
} else if (obj.Umur > 30) {
    console.log('Dewasa');
}

function perhitungan(noOne, noTwo) {
    return noOne * noTwo;
}

const hasil = perhitungan(30, 5);
hasil;