// Your code here
class Polygon {
    constructor(number) {
        this.number = number;
    }

    get countSides() {
        return this.number.length;
    }

    get perimeter() {
        return this.number.reduce((acc, curr) => acc + curr);
    }

    get isValid() {
        return this.number[0] === this.number[1] && this.number[1] === this.number[2];
    }

    get area() {
        return Math.pow(this.number[0], 2);
    }
}

class Triangle extends Polygon {


}

class Square extends Polygon {

}