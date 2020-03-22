class Polygon {
    constructor(array){
        this.array = array;
    }
    get countSides() {
        return this.array.length
    }
    get perimeter() {
        return this.array.reduce((a,b) => a + b, 0)
    }
}

class Triangle extends Polygon{
    get isValid() {
        if (this.array.length != 3) {return};
        let a = this.array[0];
        let b = this.array[1];
        let c = this.array[2];
        return ((a + b > c) && (a + c > b) && (b + c > a));
    }
}

class Square extends Polygon{
    get isValid(){
        if (this.array.length != 4){return};
        return ((this.array[0] === this.array[1]) && (this.array[0] === this.array[2]) && (this.array[0] === this.array[3]));
    }
    get area() {
        return this.array[0] * this.array[0];
    }
}