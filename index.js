class Polygon {
    constructor(array){
        this.sides = array
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a,b) => a + b, 0)
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]

        if (this.countSides === 3) {
        return (a + b > c && a + c > b && b + c > a) 
        } else { false }
    }
}

class Square extends Polygon {
     
     get isValid() {
        const a = this.sides[0]
         return this.countSides === (this.perimeter / a)
     }

     get area() {
         const a = this.sides[0]
         return (a * a)
     }
}
