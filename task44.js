/*Q45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
function carInfo(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = Object.keys(option)[0]; // Extracting the key
        var value = option[key]; // Extracting the value
        car[key] = value; // Adding the key-value pair to the car object
    }
    return car;
}
// Call the function with required information and additional key-value pairs
var myCar = carInfo('Toyota', 'Camry', { color: 'blue' }, { year: 2022 });
// Print the Object returned to ensure all information was stored correctly
console.log(myCar);
