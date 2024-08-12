// ini js
function hitungBMI() {
    const berat = parseFloat(document.getElementById('berat-badan').value);
    const tinggi = parseFloat(document.getElementById('tinggi-badan').value) / 100; // Convert cm to meters

    if (isNaN(berat) || isNaN(tinggi) || tinggi === 0) {
        alert('Masukkan berat dan tinggi badan yang valid!');
        return;
    }

    const bmi = berat / (tinggi * tinggi);
    let hasil = '';

    if (bmi < 18.5) {
        hasil = 'Kekurangan berat badan';
    } else if (bmi < 24.9) {
        hasil = 'Berat badan normal';
    } else if (bmi < 29.9) {
        hasil = 'Kelebihan berat badan';
    } else {
        hasil = 'Obesitas';
    }

    document.getElementById('hasil-bmi').innerHTML = `
        <h4>Hasil BMI Anda:</h4>
        <p>BMI: ${bmi.toFixed(2)} - ${hasil}</p>
    `;
}