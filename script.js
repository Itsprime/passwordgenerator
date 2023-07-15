// const passwordBox = document.getElementsByName('password')
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercase = document.getElementById('uppercase')
const includeLowercase = document.getElementById('lowercase')
const includeNumber = document.getElementById('number')
const includeSymbol = document.getElementById('symbol')
const password = document.getElementsByClassName('password')
const form = document.getElementById('passwordGeneratorForm')

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)


function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

function generateCharCode(low, high){
    const arraylist = []
    for(let i = low; i < high; i++) {
        arraylist.push(i)
    }
    return arraylist
}






