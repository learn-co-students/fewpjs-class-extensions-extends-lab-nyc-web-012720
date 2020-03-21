// Your code here


class Polygon {
  constructor(sides) {
    this._sides = sides
  }
  get countSides() {
    return this._sides.length
  }
  get perimeter() {
    let sum = (total, nextSide) => total + nextSide;
    return this._sides.reduce(sum)
  }
}

class Triangle extends Polygon {

  get isValid() {
    let a = this._sides[0]
    let b = this._sides[1]
    let c = this._sides[2]
    if (a + b >= c && a + c >= b && b + c >= a) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {

  get isValid() {
    let a = this._sides[0]
    let b = this._sides[1]
    let c = this._sides[2]
    let d = this._sides[3]
    if (a === b && a === c && a === d) {
      return true
    } else {
      return false
    }
  }
  get area() {
    return this._sides[0] ** 2
  }
}