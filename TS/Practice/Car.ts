class Car {

    private _brand: string;
    private _color: string;

    constructor(brand: string, color: string) {
        this._brand = brand;
        this._color = color;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string){
        this._brand = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string){
        const allowedColors: string[] = ["blue", "red", 'grey'];
        if (allowedColors.indexOf(value.toLowerCase()) !== -1) {
            this._color = value;
        }
    }

    getInfo(): string {
        return `Brand: ${this._brand} Color: ${this._color}`;
    } 
}

const car1 = new Car('Tesla','black');

console.log(car1.getInfo());
car1.color = 'grey';
console.log(car1.getInfo());