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

// metto il tempo in cui i numeri appaiono in pagina
setTimeout(() => {
    screenNumber.innerHTML = []
}, 5000)

// Aggiungo un prompt che chiede all'utente quali fossero i 5 numeri a schermo

const userNumbers = []

setTimeout(() => {
    for (let i = 1; i <= numberOfRandomNumbers; i++) {
        const userNumber = prompt("Scrivi uno dei numeri apparsi a schermo!")
        userNumbers.push(parseInt(userNumber))
    }


    console.log('Utente: ' + userNumbers)

    // Funzione per confrontare gli array e capire quali numeri sono uguali
    const compareArrays = (array1, array2) => {
        const correctNumber = array1.filter(number => array2.includes(number));
        return correctNumber;
    };

    // Ottieni i numeri indovinati
    const correctNumbers = compareArrays(randomNumbers, userNumbers);

    console.log(`Hai indovinato ${correctNumbers.length} numero/i: ${correctNumbers.join(', ')}`);
    // Stampo i numeri che l'utente ha indovinao in pagina!
    screenNumber.innerHTML = (`Hai indovinato ${correctNumbers.length} numero/i: ${correctNumbers.join(', ')}`);

}, 6000);