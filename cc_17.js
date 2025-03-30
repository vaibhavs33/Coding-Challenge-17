//Task 1 - Created Customer Class

//This class represents a regular customer
class Customer {
    
    constructor(name, email) {
        //Customer's name
        this.name = name;
        
        //Customer's email
        this.email = email;
        
        //Stores all purchase amounts
        this.purchaseHistory = [];
    }

    //Adds a new purchase to the customer's history
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }

    //Calculates and returns the total money spent by the customer
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amt) => total + amt, 0);
    }
}

//Test case for Task 1 - Creating a customer and adding purchases
let cust1 = new Customer("Hank Ford", "hford43@gmail.com");
cust1.addPurchase(30);
cust1.addPurchase(320);
console.log(`Customer created: ${cust1.name}, Email: ${cust1.email}`);
console.log(`${cust1.name} - Total Spent: $${cust1.getTotalSpent()}`);