function updateDisplay(value) {
  const display = document.getElementById('display');
  const ConvertToString = String(value);
  display.value = ConvertToString;
  
  const length = ConvertToString.length;
  
  if (length > 12) {
    display.style.fontSize = '32px';
  } else if (length > 9) {
    display.style.fontSize = '40px';
  } else if (length > 6) {
    display.style.fontSize = '50px';
  } else {
    display.style.fontSize = '64px';
  }
  
  display.scrollLeft = display.scrollWidth;
}

// Function to handle numeric input
function inputNumber (number) {
  const displayScreen = document.getElementById('display')
  const currentValue = displayScreen.value

  if (currentValue === '0' || currentValue === 'Error') {
   updateDisplay(String(number))
  } else {
   updateDisplay(currentValue + String(number))
  }
}

// Function to handle input clearing - reset back to "0"
function clearScreen () {
  updateDisplay('0')
}

// Function to handle last character removal
function backspace () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value

  if (currentContent.length <= 1 || currentContent === 'Error') {
    updateDisplay('0')
  } else {
    updateDisplay(currentContent.slice(0, -1));
  }
}

// Function to handle decimal entry per operand
function inputDecimal () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value

  if (currentContent === 'Error') {
    updateDisplay('0.')
    return
  }

  const segments = currentContent.split(/[+\-*/]/)
  const currentNumber = segments[segments.length - 1]

  if (!currentNumber.includes('.')) {
    updateDisplay(currentContent + '.')
  }
}

// Function to handle toggle between positive and negative values
function toggleSign () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value

  if (currentContent === 'Error' || currentContent === '0' || !currentContent) return

  try {
    const result = new Function(`return (${currentContent}) * -1`)()
    updateDisplay(String(result))
  } catch (error) {
    updateDisplay('Error')
  }
}

// Function to handle percentage calculations
function percentage () {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value

  if (currentContent === 'Error' || currentContent === '0') return

  try {
    const result = new Function(`return (${currentContent}) / 100`)()
    updateDisplay(String(result))
  } catch (error) {
    updateDisplay('Error')
  }
}

// Function to handle operator entry
function inputOperator (operator) {
  const displayScreen = document.getElementById('display')
  const currentContent = displayScreen.value
  const lastChar = currentContent.slice(-1)

  if (currentContent === 'Error') {
    if (operator === '-') {
      updateDisplay('-')
    }
    return
  }

  if (currentContent === '') {
    if (operator === '-') {
      updateDisplay('-')
    }
    return
  }

  if (['+', '-', '*', '/'].includes(lastChar)) {
    displayScreen.value = currentContent.slice(0, -1) + operator
    return
  } 
    updateDisplay(currentContent + operator)
  
}

function calculate () {
  const displayScreen = document.getElementById('display')
  let currentContent = displayScreen.value.trim()

  if (currentContent === 'Error' || !currentContent) return

  if (['+', '-', '*', '/'].includes(currentContent.slice(-1))) {
    currentContent = currentContent.slice(0, -1)
  }

  try {
    const result = new Function(`return ${currentContent}`)()

    if (result === Infinity || isNaN(result) || result === -Infinity) {
      displayScreen.value = 'Error'
    } else {
      updateDisplay(Number((result.toFixed(8))))
    }
  } catch (error) {
    updateDisplay('Error')
  }
}
