# 🧮 Calculator App

> A light, responsive web calculator built with Vanilla JavaScript, HTML, and CSS. Features dynamic font scaling, basic mathematical operations, expression chaining, decimal validation, and automatic layout adjustment.


---

## 📌 Problem Statement

Many digital calculators are either cluttered with unnecessary functions or lack a responsive, mobile-friendly design. This Calculator App solves this by providing a clean, distraction-free interface that focuses on speed, accuracy, and a seamless user experience for everyday mathematical calculations.


---


## 🎯 Project Goals

- Enable users to execute standard arithmetic operations (+, -, *, /) dynamically in real-time.
- Support advanced operations such as percentages, decimal inputs, and positive/negative toggles
- Deliver an ultra-fast browsing experience with zero lag using optimized  and pure JavaScript.


---

## 🛠️ Tech Stack

**Technologies Used:**
- **HTML5:** For semantic page structuring and rendering the calculator display and button layout.
- **CSS3:** For a modern responsive design similar to an Iphone calculator
- **JavaScript:** For managing mathematical logic, handling button click events and executing DOM update and error handling.


## 🖥 Features

- **Backspace & Clear :** Supports single-character deletion and full display resets.
- **Expression Chaining :** Allows continuous evaluation and toggle functions (+/-, %).
- **Error Handling:** Gracefully handles division by zero and invalid mathematical expressions.
- **Basic Operations:** Addition (+), Subtraction (-), Multiplication (*), and Division (/).
- **Dynamic Font Scaling:** Automatically resizes display text based on string length to prevent overflow.
- **Smart Decimal Input:** Prevents multiple decimal points within a single operand

---

## 📷 Screenshots

![calculator](asset/image/calculator.PNG)

---

## ⚙️ Installation & Setup

To clone and run this project locally, execute the following commands in your terminal:

~~~bash
# Clone the repository
git clone https://github.com/RusselFonta/Calculators.git

# Navigate into the project directory
cd calculators

# Switch Branch to feature/Calculator if your are on the main branch
git checkout feature/Calculator
~~~

---

## 🧠 Challenges Faced

- **Preventing Syntax Errors:** Implementing logic checks to prevent users from typing consecutive operators (e.g., ++ or */)
- **Floating-Point Precision:** Fixing standard JavaScript math bugs (like 0.1 + 0.2 = 0.30000000000000004) using precision formatting tools like .toFixed()
- **UI & Font Sizing:** Calculating character string lengths to lower font sizes progressively before forcing auto-scroll (scrollLeft = scrollWidth)
- **Divide-by-Zero Handling:** Catching Infinity and -Infinity evaluation results to cleanly transition the UI into an 'Error' state rather than crashing

---

## 📚 What I Learned

- **Regex Splitting:** Using regular expression splitters (/[+\-*/]/) to isolate individual operands from a continuous mathematical expression string.
- **Error handling:** Using isolated Function executions to evaluate mathematical string operations safely within try/catch blocks.
- **Handling UI Timing:** Managing system states (Error, 0, unclosed inputs) to ensure user clicks do not produce unhandled JS exceptions

---

## 🚀 Future Improvements

- **Calculation History:**  Add a sliding panel that saves a history of recent calculations using localStorage
- **Scientific Mode:**  Include a toggle to reveal advanced functions like square roots, exponents, and trigonometric functions (sin, cos, tan)
- **Dark/Light Mode:** Implement a theme switch using CSS variables and local state.

---

## 👨🏽‍💻 Author

**Russel Fonta Fadil**
*Junior Fullstack Developer*

- 📩 **Email:** fontawestbrook99@gmail.com
- 🌍 **Location:** Cameroon (Open to remote opportunities)
- 💼 **GitHub:** [RusselFonta](https://github.com/RusselFonta)