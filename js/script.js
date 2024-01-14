// Prendo gli elementi in pagina

const screenNumber = document.getElementById('random-numbers')


// Creo una funzione per generare i numeri casuali da 1 a 100

const number = (min, max, numberOfRandomNumbers) => {
    const screenNumber = [];
    while (screenNumber.length < numberOfRandomNumbers) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!screenNumber.includes(randomNumber)) screenNumber.push(randomNumber);
    }
    return screenNumber
}


// Creo numero minimo, numero massimo e valore di numeri che devo far indovinare
const minNumber = 1;
const maxNumber = 100;
const numberOfRandomNumbers = 5;


// Sfrutto la funzione creata e scrivo gli elementi in pagina
const randomNumbers = number(minNumber, maxNumber, numberOfRandomNumbers);
console.log(randomNumbers);

screenNumber.innerHTML = randomNumbers