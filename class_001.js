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
}

let car1 = new Car("Fiat", "500", "white");
car1.display();