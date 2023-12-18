// Function to check the speed of a car and determine if any action is needed
function checkSpeed(speed) {
    // Define constants for speed limits and demerit points
    const speedLimit = 70;
    const demeritPointsPerIncrement = 5;
    const pointsThresholdForSuspension = 12;

    // Check if the speed is within the limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points based on the exceeded speed
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerIncrement);

        // Check if demerit points exceed the threshold for license suspension
        if (demeritPoints > pointsThresholdForSuspension) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

// Set the speed of the car and check its speed
const carSpeed = 80;
checkSpeed(carSpeed);
