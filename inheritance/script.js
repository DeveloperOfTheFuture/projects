class Vehicle {
    constructor(doors, wndw, seat) {
        this.doors = doors;
        this.wndw = wndw;
        this.seat = seat;
        this.showInfo = () => {
           return console.log(`Дверей в транспортном средстве: ${this.doors}; Кол-во окон: ${this.wndw}; Кол-во мест: ${this.seat}`);
        }
    }
    
    
}
class Car extends Vehicle {
    constructor(...args) {
        super(...args);
        this.changeDoors = (count) => {
            this.doors = count;
        };
    }
}

class Airplane extends Vehicle {
    constructor(...args) {
        super(...args);
        this.showInfo = () => {
            return console.log(`Запасных выходов: ${this.doors}; Кол-во иллюминаторов: ${this.wndw}; Кол-во мест: ${this.seat}`);
        };
    }
}

class Ship extends Vehicle {
    constructor(...args) {
        super(...args);
        this.getNewCountWndw = () => {
            console.log("Это подводная лодка, никаких окон");
            this.wndw = 0;
        };
    }
}

const test = new Vehicle(5, 10, 40);
const testCar = new Car(4, 6, 5);
const testAirplane = new Airplane(10, 60, 50);
const testShip = new Ship(7, 30, 10);

console.log("Родительский класс");
test.showInfo();
console.log("Дочерний класс Car");
testCar.showInfo();
testCar.changeDoors(3);
console.log("Дочерний класс Car после метода, меняющего количество дверей");
testCar.showInfo();
console.log("Дочерний класс Airplane с переопределенным методом родительского класса вывода информации");
testAirplane.showInfo();
console.log("Дочерний класс Ship");
testShip.showInfo();
console.log("После вызова метода getNewCountWndw");
testShip.getNewCountWndw();
testShip.showInfo();