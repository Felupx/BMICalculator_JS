const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention')

    document.getElementById('info').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Underweight. Consider a healthy diet.'
    } else if (bmi < 25) {
        description = 'Healthy weight. Keep up the good work!'
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi < 30) {
        description = 'Overweight. Focus on a balanced diet.'
    } else if (bmi < 35) {
        description = 'Obesity (Grade 1). Take steps for better health.'
    } else if (bmi < 40) {
        description = 'Obesity (Grade 2). Consult a healthcare professional.'
    } else {
        description = 'Severe obesity. Seek immediate medical assistance.'
    }
    value.textContent = bmi;
    document.getElementById('description').textContent = description;
});