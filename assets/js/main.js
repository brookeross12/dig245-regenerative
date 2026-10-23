// COFFEE ROULETTE PSEUDOCODE

// Create a list of possible coffee orders
// Each coffee has a name, image, size, coffee type, milk, and flavor

// Create a function called generateCoffee

    // Randomly select one coffee from the list

    // Get the selected coffee's name

    // Get the selected coffee's image

    // Get the selected coffee's size

    // Get the selected coffee's coffee type

    // Get the selected coffee's milk

    // Get the selected coffee's flavor

    // Display all of the selected coffee information on the page

// When the user clicks the "GENERATE ANOTHER" button

    // Run generateCoffee again

    // Replace the current coffee with the new randomly selected coffee


    const coffees = [
    {
        name: "Iced Vanilla Latte",
        size: "Medium",
        type: "Iced Latte",
        milk: "Oat Milk",
        flavor: "Vanilla"
    },
    {
        name: "Iced Brown Sugar Oatmilk Shaken Espresso",
        size: "Grande",
        type: "Shaken Espresso",
        milk: "Oatmilk",
        flavor: "Brown Sugar"
    },
    {
        name: "Iced Matcha Latte",
        size: "Medium",
        type: "Matcha",
        milk: "Oat Milk",
        flavor: "Vanilla"
    },
    {
        name: "Caramel Cold Brew",
        size: "Large",
        type: "Cold Brew",
        milk: "Sweet Cream",
        flavor: "Caramel"
    },
    {
        name: "Iced Americano",
        size: "Medium",
        type: "Americano",
        milk: "None",
        flavor: "None"
    },
    {
        name: "Hot Cappuccino",
        size: "Small",
        type: "Cappuccino",
        milk: "Whole Milk",
        flavor: "None"
    }
];


function generateCoffee() {

    const randomNumber = Math.floor(Math.random() * coffees.length);

    const selectedCoffee = coffees[randomNumber];

    document.getElementById("coffee-name").textContent = selectedCoffee.name;
    document.getElementById("coffee-size").textContent = selectedCoffee.size;
    document.getElementById("coffee-type").textContent = selectedCoffee.type;
    document.getElementById("coffee-milk").textContent = selectedCoffee.milk;
    document.getElementById("coffee-flavor").textContent = selectedCoffee.flavor;
}

generateCoffee();
document.getElementById("generate-button").addEventListener("click", generateCoffee);