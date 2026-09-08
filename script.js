// Function to handle numeric input
function inputNumber (number) {
  const displayScreen = document.getElementById('display')

  if (displayScreen.value === '0' || displayScreen.value === 'Erreur') {
    displayScreen.value = number
  } else {
    displayScreen.value += number
  }
}

// Function to handle input clearing - reset back to "0"
function clearScreen () {
  const displayScreen = document.getElementById('display')
  displayScreen.value = '0'
}

// Function to handle last character removal
function backspace () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value

  if (currentContent.length <= 1 || currentContent === 'Erreur') {
    displayScreen.value = '0'
  } else {
    displayScreen.value = currentContent.slice(0, -1)
  }
}

// Function to handle decimal entry per operand
function inputDecimal () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value

  if (currentContent === 'Erreur') {
    displayScreen.value = '0.'
    return
  }

  const segments = currentContent.split(/[\+\-\*\/]/)
  const currentNumber = segments[segments.length - 1]

  if (!currentNumber.includes('.')) {
    displayScreen.value += '.'
  }
}

// Function to handle toggle between positive and negative values for current operand
function toggleSign () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value

  if (currentContent === 'Erreur' || currentContent === '0') return

  try {
    const result = new Function(`return (${currentContent}) * -1`)()
    displayScreen.value = result
  } catch (error) {
    displayScreen.value = 'Erreur'
  }
}

// Function to handle percentage calculations on current value
function percentage () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value

  if (currentContent === 'Erreur' || currentContent === '0') return

  try {
    const result = new Function(`return (${currentContent}) / 100`)()
    displayScreen.value = result
  } catch (error) {
    displayScreen.value = 'Erreur'
  }
}

// Function to handle operator entry
function inputOperator (operator) {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value
  const lastChar = currentContent.slice(-1)

  if (currentContent === 'Erreur') {
    if (operator === '-') {
      displayScreen.value = '-'
    }
    return
  }

  if (currentContent === '' || currentContent === '0') {
    if (operator === '-') {
      displayScreen.value = operator
    }
    return
  }

  if (['+', '-', '*', '/'].includes(lastChar)) {
    displayScreen.value = currentContent.slice(0, -1) + operator
  } else {
    displayScreen.value += operator
  }
}

// Function to evaluate expression safely (renamed to match onclick="calculate()")
function calculate () {
  const displayScreen = document.getElementById('display')
  let currentContent = displayScreen.value.trim()

  if (currentContent === 'Erreur' || !currentContent) return

  if (['+', '-', '*', '/'].includes(currentContent.slice(-1))) {
    currentContent = currentContent.slice(0, -1)
  }

  try {
    const result = new Function(`return ${currentContent}`)()

    if (result === Infinity || isNaN(result) || result === -Infinity) {
      displayScreen.value = 'Erreur'
    } else {
      displayScreen.value = Number(result.toFixed(8))
    }
  } catch (error) {
    displayScreen.value = 'Erreur'
  }
}