/*Q22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
function shop(name, description, quantity) {
    return {
        name: name,
        description: description,
        quantity: quantity
    };
}
//create array of fruits
var shops = [
    shop("pencils", "dollar", 15),
    shop("colors", "coloroid", 45),
    shop("eraser", "dux", 25),
    shop("sharpner", "index", 20),
    shop("markers", "dollar", 24),
];
//access an invalid index
var invalidindex = 10;
console.log("shop at index ".concat(invalidindex, ":"), shops[invalidindex]);
//print the shop
shops.forEach(function (shop) {
    console.log("Name: ".concat(shop.name, ", Color: ").concat(shop.description, ", Quantity: ").concat(shop.quantity));
});
