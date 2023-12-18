function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPerIncrement = 5;
    const pointsThresholdForSuspension = 12;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerIncrement);
      
      if (demeritPoints > pointsThresholdForSuspension) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  const carSpeed = 80;
  checkSpeed(carSpeed);
  