const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('uppercase')
const includeLowercaseElement = document.getElementById('lowercase')
const includeNumberElement = document.getElementById('number')
const includeSymbolElement = document.getElementById('symbol')
const passwordElement = document.getElementById('password')
const form = document.getElementById('passwordGeneratorForm')

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}


form.addEventListener('submit', e => {
    e.preventDefault()
    const character_range = characterAmountNumber.value
    const includeLowercase = includeLowercaseElement.value
    const includeUppercase = includeUppercaseElement.value
    const includeNumbers = includeNumberElement.value
    const includeSymbols = includeSymbolElement.value
    const password = createPassword(includeLowercase, includeNumbers, includeSymbols, includeUppercase, character_range)
    passwordElement.innerText = password
})

const LOWERCASE_CHAR_CODE = generateCharCode(97, 122)
const UPPERCASE_CHAR_CODE = generateCharCode(65, 90)
const NUMBER_CHAR_CODE = generateCharCode(48, 57)
const SYMBOL_CHAR_CODE = generateCharCode(33, 47).concat(generateCharCode(58, 126))
console.log(SYMBOL_CHAR_CODE)

function generateCharCode(low, high) {
    const arraylist = []
    for (let i = low; i <= high; i++) {
        arraylist.push(i)
    }
    return arraylist
}

function createPassword(includeLowercase, includeNumber, includeSymbols, includeUppercase, character_range) {
    let passwordCreated = []
    if (includeLowercase) passwordCreated = passwordCreated.concat(LOWERCASE_CHAR_CODE)
    if (includeUppercase) passwordCreated = passwordCreated.concat(UPPERCASE_CHAR_CODE)
    if (includeNumber) passwordCreated = passwordCreated.concat(NUMBER_CHAR_CODE)
    if (includeSymbols) passwordCreated = passwordCreated.concat(SYMBOL_CHAR_CODE)
    console.log("working" + passwordCreated)
    const passwordCharacters = []
    for (let i = 0; i < character_range; i++) {
        const characterCode = passwordCreated[Math.floor(Math.random() * passwordCreated.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}