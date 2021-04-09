const form = document.querySelector('form'),
    minNumber = document.querySelector('.min-number'),
    maxNumber = document.querySelector('.max-number'),
    generatedNumber = document.querySelector('.generated-number')


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    // console.log(number);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const minNumberValue = Number(minNumber.value),
        maxNumberValue = Number(maxNumber.value);

    generatedNumber.textContent = generateRandomNumber(
        minNumberValue,
        maxNumberValue
    );

    console.log(minNumberValue, maxNumberValue);
})

generateRandomNumber(0, 6)