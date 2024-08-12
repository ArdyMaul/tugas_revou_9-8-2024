document.getElementById('hitung-bmi').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const berat = parseFloat(document.getElementById('berat-badan').value);
    const tinggi = parseFloat(document.getElementById('tinggi-badan').value) / 100; // Convert cm to meters

    if (isNaN(berat) || isNaN(tinggi) || tinggi === 0) {
        alert('Masukkan berat dan tinggi badan yang valid!');
        return;
    }

    
    const bmi = berat / (tinggi * tinggi);
    let status = '';
    let description = '';
    let advice = '';

    
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
        description = 'Anda memiliki kekurangan berat badan.';
        advice = 'Disarankan untuk menambah berat badan hingga batas normal.';
        saran = 'Makan tidak teratur membuat tubuh tidak bisa mendapatkan nutrisi yang diperlukan. Masalah ini bisa berdampak pada malnutrisi. Gangguan ini ditandai dengan kekurangan zat gizi, seperti karbohidrat, lemak, vitamin, dan protein.';
    } else if (bmi < 24.9) {
        status = 'Berat badan normal';
        description = 'Anda memiliki berat badan yang normal.';
        saran = 'Diet yang baik adalah diet yang tidak membuat tubuh sakit. Selain itu, penting untuk diingat bahwa diet bukan berarti tidak makan sama sekali. Tubuh tetap membutuhkan asupan makanan untuk bahan bakar agar bisa menjalankan fungsinya dengan baik. Biar tidak mengalami kenaikan berat badan berlebih, penting untuk memilih jenis makanan yang dibutuhkan tubuh, yaitu makanan yang mengandung nutrisi lengkap, seperti karbohidrat, protein, lemak, mineral, vitamin, dan serat. ';
    } else if (bmi < 29.9) {
        status = 'Kelebihan berat badan';
        description = 'Anda memiliki berat badan berlebih.';
        advice = 'Disarankan untuk menurunkan berat badan hingga batas normal.';
        saran = 'Buat target pengurangan berat badan Anda. Buatlah target berat badan dalam benak Anda, atau sejumlah berat badan tertentu yang ingin Anda hilangkan setiap minggu. Anda bisa mencatatnya supaya ingat.';
    } else {
        status = 'Obesitas';
        description = 'Anda memiliki obesitas.';
        advice = 'Disarankan untuk menurunkan berat badan hingga batas normal.';
        saran = 'Pengelolaan obesitas pada prinsipnya adalah dengan mengatur keseimbangan energi. Energi yang masuk harus lebih rendah daripada energi yang dikeluarkan. Pengelolaan meliputi pengaturan dalam pola makan, pola aktivitas fisik, pola emosi makan (kebiasaan makan) dan pola tidur/istirahat.'
    }

   
    document.getElementById('bmi-status').textContent = status;
    document.getElementById('bmi-value').textContent = bmi.toFixed(1);
    document.getElementById('bmi-description').textContent = description;
    document.getElementById('bmi-range').textContent = `Hasil BMI diantara ${bmi >= 23 ? 23 : 18.5} dan ${bmi >= 23 ? 25 : 24.9}`;
    document.getElementById('bmi-advice').textContent = advice;
    document.getElementById('bmi-saran').textContent = saran;
    document.querySelector('.result-container').style.display = 'block';
});

document.getElementById('download-bmi').addEventListener('click', function() {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Hasil BMI</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, Helvetica, sans-serif; margin: 20px; }');
    printWindow.document.write('h1 { text-align: center; }');
    printWindow.document.write('p { font-size: 1em; margin: 10px 0; }');
    printWindow.document.write('#bmi-result { background-color: #f1f1f1; padding: 20px; border-radius: 8px; }');
    printWindow.document.write('#bmi-value { font-size: 45px; font-weight: bold; margin: 10px 0; }');
    printWindow.document.write('#bmi-status { font-size: 15px; font-weight: bold; }');
    printWindow.document.write('#bmi-description { font-size: 1em; margin: 10px 0; }');
    printWindow.document.write('#bmi-range { font-size: 1em; margin: 10px 0; }');
    printWindow.document.write('#bmi-advice { font-size: 1em; margin: 10px 0; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h1>Hasil BMI</h1>');
    printWindow.document.write('<div id="bmi-result">');
    printWindow.document.write('<p id="bmi-status"><strong>Status:</strong> ' + document.getElementById('bmi-status').textContent + '</p>');
    printWindow.document.write('<p id="bmi-value"><strong>Nilai BMI:</strong> ' + document.getElementById('bmi-value').textContent + '</p>');
    printWindow.document.write('<p id="bmi-description"><strong>Deskripsi:</strong> ' + document.getElementById('bmi-description').textContent + '</p>');
    printWindow.document.write('<p id="bmi-range"><strong>Range BMI:</strong> ' + document.getElementById('bmi-range').textContent + '</p>');
    printWindow.document.write('<p id="bmi-advice"><strong>Saran:</strong> ' + document.getElementById('bmi-advice').textContent + '</p>');
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close(); 
    printWindow.focus(); 
    printWindow.print(); 
});
