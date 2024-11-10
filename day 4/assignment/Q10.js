// Q10. Prototypical inheritance and constructor Function - I
// 1. Create Car constructor function
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  
  // 2. Create Customer constructor function
  function Customer(name) {
    this.name = name;
    this.rentedCars = [];
  }
  
  // 3. Add a method to the Customer prototype to rent a car
  Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(this.name + " rented a " + car.make + " " + car.model);
    } else {
      console.log("Sorry, the " + car.make + " " + car.model + " is already rented.");
    }
  };
  
  // 4. Create PremiumCustomer constructor function inheriting from Customer
  function PremiumCustomer(name, discountRate = 0.1) {
    Customer.call(this, name);
    this.discountRate = discountRate;
  }
  
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  // 5. Create a function to calculate rental prices
  function calculateRentalPrice(carType, days, isPremium) {
    const baseRate = 50; 
    let rate = baseRate;
  
    // Additional charges for different car types
    if (carType === "SUV") rate += 20;
    else if (carType === "Sedan") rate += 10;
  
    let total = rate * days;
  
    // Apply discount for premium customers
    if (isPremium) total *= 0.9; 
  
    return total;
  }
  
  // 6. Add a method to handle car returns
  Customer.prototype.returnCar = function(car) {
    const index = this.rentedCars.indexOf(car);
    if (index > -1) {
      this.rentedCars.splice(index, 1);
      car.isAvailable = true;
      console.log(this.name + " returned a " + car.make + " " + car.model);
    } else {
      console.log("This car was not rented by " + this.name + ".");
    }
  };
  
  // 7. Maintenance function
  function Maintenance(car, delay) {
    console.log("The " + car.make + " " + car.model + " is under maintenance.");
    setTimeout(() => {
      car.isAvailable = true;
      console.log("The " + car.make + " " + car.model + " is now available.");
    }, delay);
  }
  
  // 8. Demonstrate functionality
  
  // Create car objects
  const car1 = new Car("Toyota", "Corolla", 2020);
  const car2 = new Car("Honda", "Civic", 2021);
  const car3 = new Car("Ford", "Explorer", 2019);
  
  // Create customers
  const customer1 = new Customer("Alice");
  const premiumCustomer1 = new PremiumCustomer("Bob");
  
  // Rent and return cars
  customer1.rentCar(car1); 
  customer1.rentCar(car1); 
  customer1.returnCar(car1); 
  premiumCustomer1.rentCar(car2); 
  
  // Calculate rental price
  console.log("Rental price for SUV, 5 days, premium: " + calculateRentalPrice("SUV", 5, true));
  
  // Maintenance
  Maintenance(car3, 2000); 
  
  // Demonstrating call, apply, bind for educational purposes
  const rentCarBound = customer1.rentCar.bind(premiumCustomer1, car1);
  rentCarBound();