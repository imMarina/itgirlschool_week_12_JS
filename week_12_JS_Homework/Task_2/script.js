// Задание: Вы разрабатываете программу для калькулятора индекса массы тела (ИМТ). Вам нужно реализовать функцию `calculateBMI`, которая будет вычислять ИМТ на основе введенных пользователем значений веса и роста.
    
// 1. Напишите функцию с именем `calculateBMI`, которая принимает два числовых параметра: вес в килограммах и рост в метрах.

function calculateBMI() {
    // Create Variables
    let height = document.querySelector( "#height" ).value;
    let weight = document.querySelector( "#weight" ).value;
    let result = document.querySelector("#result");

    // Checking the user providing a proper value or not
    if (height === "" || isNaN(height)) 
    result.innerHTML = "Укажите действительный рост!";
    
    else if (weight === "" || isNaN(weight))
    result.innerHTML = "Укажите действительный вес!";

    // If both input is valid, calculate the bmi
    else {
    const resultBMI = Math.round(weight / (Math.pow(height, 2)));
    console.log(resultBMI);

    // Dividing as per the bmi conditions
    if (resultBMI < 18.5) 
    result.textContent = 'ИМТ менее 18.5: Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.';
    
    else if (resultBMI >= 18.6 && resultBMI < 24.9)
    result.textContent = 'ИМТ от 18.5 до 24.9: Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.';

    else if (resultBMI >= 25.0 && resultBMI < 29.9)
    result.textContent = 'ИМТ от 25.0 до 29.9: Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.';

    else if (resultBMI >= 30.0 && resultBMI < 34.9)
    result.textContent = 'ИМТ от 30.0 до 34.9: Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.';

    else if (resultBMI >= 35.0 && resultBMI < 39.9)
    result.textContent = 'ИМТ от 35.0 до 39.9: Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.';

    else result.textContent ='ИМТ 40 и выше: Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.';
    }
}

document.querySelector('#btn').addEventListener('click', calculateBMI);
