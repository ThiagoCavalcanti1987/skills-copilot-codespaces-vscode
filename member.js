function skillsMember() {
    const { calculateNumbers } = require('./skills');
    const result = calculateNumbers(5, 10);
    console.log("The result is:", result);
}
skillsMember();