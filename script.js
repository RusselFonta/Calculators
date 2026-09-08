// Function to handle numeric input
function inputNumber (number) {
  const displayScreen = document.getElementById('display')

  if (displayScreen.textContent === '0' || displayScreen.textContent === 'Erreur') {
    displayScreen.textContent = number
  } else {
    displayScreen.textContent += number
  }
}

// Function to handle input clearing - reset back to "0"
function clearScreen () {
  const displayScreen = document.getElementById('display')
  displayScreen.textContent = '0'
}

// Function to handle last character removal
function backspace () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.textContent

  if (currentContent.length <= 1 || currentContent === 'Erreur') {
    displayScreen.textContent = '0'
  } else {
    displayScreen.textContent = currentContent.slice(0, -1)
  }
}

// Function to handle decimal entry per operand
function inputDecimal () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.textContent

  if (currentContent === 'Erreur') {
    displayScreen.textContent = '0.'
    return
  }

  const segments = currentContent.split(/[\+\-\*\/]/)
  const currentNumber = segments[segments.length - 1]

  if (!currentNumber.includes('.')) {
    displayScreen.textContent += '.'
  }
}

// Function to handle toggle between positive and negative values for current operand
function toggleSign () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.textContent

  if (currentContent === 'Erreur' || currentContent === '0') return

  try {
    const result = new Function(`return (${currentContent}) * -1`)()
    displayScreen.textContent = result
  } catch (error) {
    displayScreen.textContent = 'Erreur'
  }
}

// Function to handle percentage calculations on current value
function percentage () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.textContent

  if (currentContent === 'Erreur' || currentContent === '0') return

  try {
    const result = new Function(`return (${currentContent}) / 100`)()
    displayScreen.textContent = result
  } catch (error) {
    displayScreen.textContent = 'Erreur'
  }
}

// Function to handle operator entry
function inputOperator (operator) {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.textContent
  const lastChar = currentContent.slice(-1)

  if (currentContent === 'Erreur') {
    if (operator === '-') {
      displayScreen.textContent = '-'
    }
    return
  }

  if (currentContent === '' || currentContent === '0') {
    if (operator === '-') {
      displayScreen.textContent = operator
    }
    return
  }

  if (['+', '-', '*', '/'].includes(lastChar)) {
    displayScreen.textContent = currentContent.slice(0, -1) + operator
  } else {
    displayScreen.textContent += operator
  }
}

function calculator () {
  const displayScreen = document.getElementById('display')
  let currentContent = displayScreen.textContent.trim()

  if (currentContent === 'Erreur' || !currentContent) return

  if (['+', '-', '*', '/'].includes(currentContent.slice(-1))) {
    currentContent = currentContent.slice(0, -1)
  }

  try {
    const result = new Function(`return ${currentContent}`)()

    if (result === Infinity || isNaN(result) || result === -Infinity) {
      displayScreen.textContent = 'Erreur'
    } else {
      
      displayScreen.textContent = Number(result.toFixed(8))
    }
  } catch (error) {
    displayScreen.textContent = 'Erreur'
  }
}