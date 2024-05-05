class CarJs {
    constructor(brand, color) {
        this._brand = brand
        this._color = color
    }

    get brand() {
        return this._brand
    }
    set brand(brand) {
        this._brand = brand
    }

    get color() {
        return this._color
    }
    set color(color) {
        this._color = color
    }

    getInfo() {
        return `Brand: ${this._brand} Color:  ${this._color}`
    }
}

const carJs1 = new CarJs('Tesla', 'white')

console.log(carJs1.getInfo())
carJs1.color ='red'
console.log(carJs1.getInfo())

// // ******************The simple Way****************
// class CarJs {
//     constructor(brand, color) {
//         this._brand = brand
//         this._color = color
//     }

//     getBrand() {
//         return this._brand
//     }
//     setBrand(brand) {
//         this._brand = brand
//     }

//     getColor() {
//         return this._color
//     }
//     setColor(color) {
//         this._color = color
//     }

//     getInfo() {
//         return `Brand: ${this._brand} Color:  ${this._color}`
//     }
// }

// const carJs1 = new CarJs('Tesla', 'white')

// console.log(carJs1.getInfo())
// carJs1.setColor('red')
// console.log(carJs1.getInfo())