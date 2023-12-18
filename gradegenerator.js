// Function to calculate and display a student's grade based on entered marks
function calculateGrade() {
    // Get user input for student marks
    const userInput = prompt("Enter student marks (between 0 and 100):");
    const marks = parseFloat(userInput);

    // Validate input: Check if the input is a number within the valid range
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Please enter a number between 0 and 100.");
        return;
    }

    // Determine the grade based on the entered marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the calculated grade to the user
    alert("The student's grade is: " + grade);
}

// Call the function to calculate and display the student's grade
calculateGrade();

