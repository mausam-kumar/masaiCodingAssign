class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea(){
        console.log("Masuam");
        console.log(this.height * this.width);
    }
}

class Square extends Rectangle {
    constructor(height, width){
        super(height, width);
    }
}

var newObject = new Square(20,20);

newObject.calcArea()