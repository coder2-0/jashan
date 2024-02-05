// MY FULL NAME
const fullName = "Jashanpreet Kaur";
const myHeading = document.createElement("h1");

myHeading.textContent = fullName;
myHeading.style.textAlign = "center";
myHeading.style.color = "#A9A9A9";

// Append full name to the body
document.body.appendChild(myHeading);

const body = document.body;

const input1 = document.createElement("input");
const input2 = document.createElement("input");

const button = document.createElement("button");
button.textContent = "Sum";
button.addEventListener("click", calculateSum);
body.appendChild(input1);
body.appendChild(input2);
body.appendChild(button);

// Calculate sum
function calculateSum() {
    const num1 = parseFloat(input1.value) || 0;
    const num2 = parseFloat(input2.value) || 0;
    const total = num1 + num2;

    // Create a paragraph for displaying the sum
    const displaySum = document.createElement("p");
    displaySum.textContent = `Sum: ${total}`;

    // Append the paragraph to the body
    body.appendChild(displaySum);
}

// Validate input values using arrow function
const validateInput = () => {
    try {
        validateNumber(input1.value);
        validateNumber(input2.value);

        // Clear previous error messages and borders on successful validation
        clearErrors();
    } catch (error) {
        // Show error message and set red borders on validation error
        showError(error);
    }
};

// Validate a number using arrow function
const validateNumber = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
        throw "Input should be a number";
    }
    return parsedValue;
};

// Show error message using arrow function
const showError = (errorMessage) => {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = errorMessage;
    errorMsg.style.color = "red";

    // Append error message to the body
    body.appendChild(errorMsg);

    // Set red borders on input fields
    input1.style.border = "1px solid red";
    input2.style.border = "1px solid red";
};

// Clear previous error messages and borders using arrow function
const clearErrors = () => {
    const errorMessages = document.querySelectorAll("p[style='color: red;']");
    errorMessages.forEach((errorMsg) => errorMsg.remove());

    // Reset borders on input fields
    input1.style.border = "";
    input2.style.border = "";
};

// Add event listener to the button for input validation
button.addEventListener("click", validateInput);
