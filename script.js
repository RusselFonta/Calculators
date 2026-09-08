// Function to handle numeric input
function inputNumber (number) {
  const displayScreen = document.getElementById('display')

  if (displayScreen.textContent === '0') {
    displayScreen.textContent = number
  } else {
    displayScreen.textContent += number
  }
}

// Function to handle input clearing
function clearScreen () {
  const displayScreen = document.getElementById('display')
  displayScreen.textContent = ''
}

// Function to handle last character removal
function backspace () {
  const displayScreen = document.getElementById('display')
  displayScreen.textContent = displayScreen.textContent.slice(0, -1)
}

// Function to handle decimal entry per operand
function inputDecimal () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.textContent

  const segments = currentContent.split(/[\+\-\*\/]/)
  const currentNumber = segments[segments.length - 1]

  if (!currentNumber.includes('.')) {
    displayScreen.textContent += '.'
  }
}

// Function to handle toggle between positive and negative values
function toggleSign () {
  const displayScreen = document.getElementById('display')
  const negConversion = displayScreen.textContent * -1
  displayScreen.textContent = negConversion
}

// Function to handle percentage calculations
function percentage () {
  const displayScreen = document.getElementById('display')
  const numConversion = parseFloat(displayScreen.textContent)
  const percent = numConversion / 100
  displayScreen.textContent = percent
}

// Function to handle operator entry
function inputOperator (operator) {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.textContent
  const lastChar = currentContent.slice(-1)

  // Prevent starting with non-minus operators if screen is empty
  if (currentContent === '' || currentContent === '0') {
    if (operator === '-') {
      displayScreen.textContent = operator
    }
    return
  }

  // Replace operator if last character is already an operator
  if (['+', '-', '*', '/'].includes(lastChar)) {
    displayScreen.textContent = currentContent.slice(0, -1) + operator
  } else {
    displayScreen.textContent += operator
  }
}

// Function to evaluate expression safely
function calculator () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.textContent

  try {
    const result = new Function(`return ${currentContent}`)()

    if (result === Infinity || isNaN(result)) {
      displayScreen.textContent = 'Erreur'
    } else {
      displayScreen.textContent = result
    }
  } catch (error) {
    displayScreen.textContent = 'Erreur'
  }
}
