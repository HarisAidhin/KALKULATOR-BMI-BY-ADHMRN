document.getElementById("calculate-btn").addEventListener("click", function () {
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById("weight").value);
    const gender = document.querySelector('input[name="gender"]:checked');
  
    // Validasi input
    if (!height || !weight || !gender || height <= 0 || weight <= 0) {
      alert("Mohon masukkan semua data dengan benar.");
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
  
    let category = "";
    if (bmi < 18.5) {
      category = "Kurus (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal (Healthy)";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Berat Badan Berlebih (Overweight)";
    } else {
      category = "Obesitas (Obesity)";
    }
  
    // Tambahkan keterangan berdasarkan jenis kelamin
    const genderText = gender.value === "male" ? "Pria" : "Wanita";
  
    document.getElementById("bmi-result").textContent = `BMI Anda: ${bmi}`;
    document.getElementById("bmi-category").textContent = `Kategori: ${category} (${genderText})`;

  });