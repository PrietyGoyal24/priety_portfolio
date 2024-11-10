// Problem statement
// 1. Base Product constructor
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Method to display basic product info
  Product.prototype.displayInfo = function() {
    console.log("Name: " + this.name + ", Price: " + this.price + ", Quantity: " + this.quantity);
  };
  
  // 2. Electronics constructor (inherits from Product)
  function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);
    this.brand = brand;
    this.model = model;
  }
  
  // Inherit Product prototype
  Electronics.prototype = Object.create(Product.prototype);
  Electronics.prototype.constructor = Electronics;
  
  // Methods specific to Electronics
  Electronics.prototype.powerOn = function() {
    console.log(this.name + " is now ON.");
  };
  
  Electronics.prototype.powerOff = function() {
    console.log(this.name + " is now OFF.");
  };
  
  // 3. Clothing constructor (inherits from Product)
  function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);
    this.size = size;
    this.material = material;
  }
  
  // Inherit Product prototype
  Clothing.prototype = Object.create(Product.prototype);
  Clothing.prototype.constructor = Clothing;
  
  // Methods specific to Clothing
  Clothing.prototype.wash = function() {
    console.log("Washing the " + this.name);
  };
  
  // 4. Books constructor (inherits from Product)
  function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
  }
  
  // Inherit Product prototype
  Books.prototype = Object.create(Product.prototype);
  Books.prototype.constructor = Books;
  
  // Methods specific to Books
  Books.prototype.read = function() {
    console.log("Reading " + this.name + " by " + this.author);
  };
  
  // 5. Demonstrate functionality
  
  // Create instances
  const laptop = new Electronics("Laptop", 1200, 10, "Apple", "MacBook Pro");
  const tshirt = new Clothing("T-shirt", 20, 50, "L", "Cotton");
  const novel = new Books("Novel", 15, 100, "J.K. Rowling", "Fantasy");
  
  // Display product info
  laptop.displayInfo();
  tshirt.displayInfo();
  novel.displayInfo();
  
  // Use category-specific methods
  laptop.powerOn();
  laptop.powerOff();
  
  tshirt.wash();
  
  novel.read();