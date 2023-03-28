const MAX_NUMBER = 20
const MIN_NUMBER = -20
STEP_AMOUNT = 5

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue

    // Enable add button
    if (add.disabled === true) {
        add.disabled = false
    }

    // Disable subtract button when number is smaller or equal to min value
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}

const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue

    // Enable subtract button
    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    // Disable add button when number is bigger or equal to max value
    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    }
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)