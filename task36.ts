/*Q37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`You ordered a ${size} shirt with the following message: "${message}".`);
}

// Call the function to make a large shirt with the default message
make_shirt();

// Call the function to make a medium shirt with the default message
make_shirt('medium');

// Call the function to make a shirt of any size with a different message
make_shirt('small', 'Hello, World!');