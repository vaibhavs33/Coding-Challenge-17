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

//Task 2 - Created SalesRep Class
//This class represents a sales representative who handles customers
class SalesRep {
    constructor(name) {
        //Sales rep's name
        this.name = name;
        
        //List of customers assigned to this sales rep
        this.clients = [];
    }

    //Adds a customer to the sales rep's list
    addClient(customer) {
        this.clients.push(customer);
    }

    //Finds a client by name and shows how much they spent
    getClientTotal(name) {
        const client = this.clients.find(c => c.name === name);
        if (client) {
            console.log(`Total spent by ${client.name}: $${client.getTotalSpent()}`);  
        } else {
            console.log(`Client "${name}" not found.`)
        }
    }
}

//Test case for Task 2 - Creating another customer and assigning both customers to a sales rep
let cust2 = new Customer("David Warner", "dwarner25@yahoo.com");
cust2.addPurchase(630);
console.log(`${cust2.name} - Total Spent: $${cust2.getTotalSpent()}`);

let sRep = new SalesRep("John Gamble");
console.log("Sales Rep created:", sRep.name);
sRep.addClient(cust1); //Assigning first customer
sRep.getClientTotal("Hank Ford"); //Checking the total spent for Hank
sRep.addClient(cust2); //Assigning second customer
sRep.getClientTotal("David Warner"); //Checking the total spent for David
