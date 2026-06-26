function inputNumber(number){
    const DisplayScreen = document.getElementById('display');
    DisplayScreen.textContent += number;
}

// function to handle input clearing
function clearScreen(){
    const DisplayScreen = document.getElementById('display');
    DisplayScreen.textContent = "0";
}

// fuction to handle last number removal
function backspace(){
    const DisplayScreen = document.getElementById('display');
    const remove = DisplayScreen.textContent.slice(0 , -1)
    DisplayScreen.textContent = remove;
}

// fuction to handle decimal number
// i have some an error here
function inputDecimal(){
    const DisplayScreen = document.getElementById('display');
     if(!conversion.textContent.includes('.')){
        DisplayScreen.textContent += '.';
     }
}

//function to handle negative  numbers
function toggleSign(){
    const DisplayScreen = document.getElementById('display');
    const Negconversion = DisplayScreen.textContent * -1 ;
    DisplayScreen.textContent = Negconversion ;
}

// function to handle percentage usage
function percentage(){
    const DisplayScreen = document.getElementById('display');
    const Numconversion = parseFloat(DisplayScreen.textContent);
    const percent = Numconversion / 100 ;
    DisplayScreen.textContent = percent;
}

// function to handle operator
function inputOperator(operator){
    const DisplayScreen = document.getElementById('display');
    const currentContent = DisplayScreen.textContent;
    const lastChar = currentContent.slice(-1);

    //in case if the last character is an operator
    if (['+', '-', '*', '/'].includes(lastChar)) {
        DisplayScreen.textContent = currentContent.slice(0, -1) + operator;
    } else if (currentContent !== "0") {
        DisplayScreen.textContent += operator;
    }
}