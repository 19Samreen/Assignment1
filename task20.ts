/*Q21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

// Define types for the items
type Item = {
    name: string;
    description: string;
    quantity: number;
};

// Create objects containing different items
const object1: { [key: string]: Item } = {
    item1: { name: "Book", description: "A novel by Jane Austen", quantity: 5 },
    item2: { name: "Pen", description: "Blue ballpoint pen", quantity: 10 },
    item3: { name: "Notebook", description: "College-ruled notebook", quantity: 3 }
};

const object2: { [key: string]: Item } = {
    item4: { name: "Laptop", description: "15-inch MacBook Pro", quantity: 2 },
    item5: { name: "Coffee Mug", description: "Ceramic coffee mug", quantity: 6 },
    item6: { name: "Headphones", description: "Wireless Bluetooth headphones", quantity: 8 }
};

// Print out the objects
console.log("Object 1:", object1);
console.log("Object 2:", object2);