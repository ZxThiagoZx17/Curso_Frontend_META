// // Given variables
// const dishData = [
//     {
//         name: "Italian pasta",
//         price: 9.55
//     },
//     {
//         name: "Rice with veggies",
//         price: 8.65
//     },
//     {
//         name: "Chicken with potatoes",
//         price: 15.55
//     },
//     {
//         name: "Vegetarian Pizza",
//         price: 6.45
//     },
// ]
// const tax = 1.20;

// // Implement getPrices()
// function getPrices() {
    
// }

// // Implement getDiscount()
// function getDiscount() {
    
// }

// // Call getDiscount()
// Dishes data
// Dishes data
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
];
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let dish of dishData) {
        let finalPrice;

        if (taxBoolean === true) {
            finalPrice = dish.price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dish.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        // Remove commas and adjust the format
        console.log(`Dish: ${dish.name} Price: $${finalPrice.toFixed(2)}`);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    // Call getPrices to display the dish prices
    getPrices(taxBoolean);

    // Defensive check for the guests parameter
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;

        if (guests < 5) {
            discount = 5; // Set discount to $5 for less than 5 guests
        } else if (guests >= 5) {
            discount = 10; // Set discount to $10 for 5 or more guests
        }

        // Adjusting the format for discount output
        console.log(`Discount is: $${discount}`);
    } else {
        console.log("The second argument must be a number between 0 and 30");
    }
}

// Call getDiscount()
getDiscount(true, 2);  // Example 1: with tax, 2 guests
getDiscount(false, 10); // Example 2: no tax, 10 guests
getDiscount(true, 0);   // Invalid guests count
getDiscount('string', 5); // Invalid tax type
