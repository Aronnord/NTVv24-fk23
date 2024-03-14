// Runs after the entirety of the code has been initialized
window.onload = () => {
    //   console.log('window finished loading')
}

const container = document.querySelector('.container');

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.height = '100vh';

const incremntButton = document.querySelector('.bg-green-500');
const decrementButton = document.querySelector('.bg-red-500');

incremntButton.style.fontSize = '1.5em';
incremntButton.style.padding = '10px 20px';

decrementButton.style.fontSize = '1.5em';
decrementButton.style.padding = '10px 20px';

let number = 0

const numberTag = document.getElementById('number')
const boomTag = document.getElementById('boom');

const comparisonOne = 100 >= 10 // true
const comparisonTwo = 100 > 100 // false
const comparisonThree = 100 === 100 // true

const onIncrementClick = () => {
    number += 5;
    updateNumber();
}

const onDecrementClick = () => {
    number -= 5;
    updateNumber();
}

const updateNumber = () => {
    if (number > 35 || number < -35) {
        boomTag.textContent = "BOOM!!!";
        boomTag.style.backgroundColor = 'purple';
        boomTag.style.color = 'white';
        boomTag.style.textAlign = 'center';
        boomTag.style.lineHeight = '100px';
        boomTag.style.fontSize = '2em';
    }
    else {
        boomTag.textContent = "";
        boomTag.style.backgroundColor = '';
        boomTag.style.color = '';
        boomTag.style.textAlign = '';
        boomTag.style.lineHeight = '';
        boomTag.style.fontSize = '';
    }

    numberTag.textContent = number;

}

numberTag.style.fontSize = '3em';
numberTag.style.fontWeight = 'bold';