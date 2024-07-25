class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Method to clone the car object
    cloneCar() {
        const clone = Object.create(Object.getPrototypeOf(this));
        clone._brand = this._brand;
        clone._motor = this._motor;
        clone._color = this._color;
        return clone;
    }
}

// Example usage:
const originalCar = new Car('Toyota', 'V8', 'Red');
const clonedCar = originalCar.cloneCar();

console.log(originalCar); // Output: Car { _brand: 'Toyota', _motor: 'V8', _color: 'Red' }
console.log(clonedCar);   // Output: Car { _brand: 'Toyota', _motor: 'V8', _color: 'Red' }
console.log(originalCar === clonedCar); // Output: false

