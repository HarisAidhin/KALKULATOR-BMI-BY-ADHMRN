document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');
  const bmiForm = document.getElementById('bmi-form');
  const nameInput = document.getElementById('name');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  
  calculateBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const height = parseFloat(heightInput.value) / 100;
    const weight = parseFloat(weightInput.value);
    const gender = document.querySelector('input[name="gender"]:checked');
    
    if (!name || !height || !weight || !gender || height <= 0 || weight <= 0) {
      showErrorToast('Mohon masukkan semua data dengan benar.');
      return;
    }
    
    const bmi = (weight / (height * height)).toFixed(2);
    const category = getBMICategory(bmi, gender.value);
    const genderText = gender.value === 'male' ? 'Pria' : 'Wanita';
    
    displayResult(name, bmi, category, genderText);
    animateResult();
  });
  
  function getBMICategory(bmi, gender) {
    if (bmi < 18.5) return {
      text: 'Kurus (Underweight)',
      color: '#4cc9f0'
    };
    if (bmi >= 18.5 && bmi < 24.9) return {
      text: 'Normal (Healthy)',
      color: '#43aa8b'
    };
    if (bmi >= 25 && bmi < 29.9) return {
      text: 'Berat Badan Berlebih (Overweight)',
      color: '#f8961e'
    };
    return {
      text: 'Obesitas (Obesity)',
      color: '#f72585'
    };
  }
  
  function displayResult(name, bmi, category, genderText) {
    const resultElement = document.getElementById('bmi-result');
    const categoryElement = document.getElementById('bmi-category');
    
    resultElement.textContent = `Halo, ${name}! BMI Anda: ${bmi}`;
    resultElement.style.color = category.color;
    
    categoryElement.textContent = `Kategori: ${category.text} (${genderText})`;
    categoryElement.style.color = category.color;
  }
  
  function animateResult() {
    const resultContainer = document.querySelector('.result');
    resultContainer.style.animation = 'none';
    setTimeout(() => {
      resultContainer.style.animation = 'pulse 0.5s ease';
    }, 10);
  }
  
  function showErrorToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-error';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }
  
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
});
