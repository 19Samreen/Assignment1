//Q13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favtransport: Array<[brand: string, transport: string]> = []

favtransport.push(["Bently", "Car"])
favtransport.push(["Orbea", "Bike"])
favtransport.push(["Trek", "Cycle"])

//to print a series of statements

favtransport.forEach(([brand, transport]) => 
{
    console.log(`I would like to own ${brand} ${transport}`)
})