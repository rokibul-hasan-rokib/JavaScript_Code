class Car{
    constructor(type, model, color){
        this.type = type;
        this.model = model;
        this.color = color;
    }
    display(){
        console.log(this.type);
        console.log(this.model);
        console.log(this.color);
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
      }
}

let car1 = new Car("Fiat", "500", "white");
const myCar = new Car("Ford", 2014);
car1.display();
myCar.age();