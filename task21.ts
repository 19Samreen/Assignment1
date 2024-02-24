/*Q22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/

function shop(name: string, description: string, quantity: number)
{
    return{
        name, description,quantity
    };
}   

//create array of fruits

const shops = [
    shop("pencils", "dollar", 15),
    shop("colors", "coloroid", 45),
    shop("eraser", "dux", 25),
    shop("sharpner", "index", 20),
    shop("markers", "dollar", 24),
];

//access an invalid index

const invalidindex = 10;
console.log(`shop at index ${invalidindex}:`, shops[invalidindex]);

//print the shop
shops.forEach((shop) => {
    console.log(`Name: ${shop.name}, Color: ${shop.description}, Quantity: ${shop.quantity}`);
});
