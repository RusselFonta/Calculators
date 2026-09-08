# 🧮 Calculator App

> An interactive, responsive web-based calculator that allows users to perform basic and advanced arithmetic operations with a sleek, modern user interface.


---

## 📌 Problem Statement

Many digital calculators are either cluttered with unnecessary functions or lack a responsive, mobile-friendly design. This Calculator App solves this by providing a clean, distraction-free interface that focuses on speed, accuracy, and a seamless user experience for everyday mathematical calculations.


---


## 🎯 Project Goals

- Enable users to execute standard arithmetic operations (+, -, *, /) dynamically in real-time.
- Support advanced operations such as percentages, decimal inputs, and positive/negative toggles
- Deliver an ultra-fast browsing experience with zero lag using optimized event handling and pure JavaScript.


---

## 🛠️ Tech Stack

**Technologies Used:**
- **HTML5:** For semantic page structuring and rendering the calculator display and button layout.
- **CSS3:** For a modern, responsive grid design, custom color palettes, and smooth hover/active transitions
- **JavaScript:** For managing mathematical logic, handling button click events, capturing keyboard inputs, and executing DOM updates.


## 🖥 Features

- **Instant Calculations:**  Executes mathematical logic instantly without page reloads.
- **Keyboard Support:**  Allows users to use their physical keyboard numpad and operational keys for inputs.
- **Clear & Delete Operations**  Features AC (All Clear) to reset the state and a backspace/delete option for correcting mistakes.
- **Decimal Precision:**  Handles decimal operations seamlessly while preventing multiple consecutive decimal points.



---

## 📷 Screenshots

![calculator](asset/image/calculator.PNG)

---

## ⚙️ Installation & Setup

To clone and run this project locally, execute the following commands in your terminal:

~~~bash
# Clone the repository
git clone https://github.com/RusselFonta/Weather-App.git

# Navigate into the project directory
cd calculator

# Switch Branch to feature/Weather_App if your are on the main branch
git checkout feature/Calculator
~~~

---

## 🧠 Challenges Faced

- **Preventing Syntax Errors:** Implementing logic checks to prevent users from typing consecutive operators (e.g., ++ or */)
- **Floating-Point Precision:** Fixing standard JavaScript math bugs (like 0.1 + 0.2 = 0.30000000000000004) using precision formatting tools like .toFixed()
- **Handling UI Timing:** Ensuring long numbers dynamically scale down or scroll instead of breaking the CSS container layout.

---

## 📚 What I Learned

- **State Tracking:** Managing global variables to track the current input, previous input, and the active mathematical operator
- **Input Sanitization:** Using regular expressions and conditional statements instead of the insecure eval() function to calculate results safely.

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