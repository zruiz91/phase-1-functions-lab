// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(42 - someValue)
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264 ;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let distanceInBlocks = Math.abs(start - destination);
    return distanceInBlocks * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const feet = distanceTravelledInFeet(start, destination); 
    let farePrice;
    if (feet < 400) {
        return farePrice = 0
    }
    else if (feet >= 400 && feet <= 2000) {
        return farePrice = (feet - 400) * .02
    }
    else if (feet >= 2001 && feet <= 2500) {
        return farePrice = 25
    }
    else {
        return "cannot travel that far"
    }
    
  }