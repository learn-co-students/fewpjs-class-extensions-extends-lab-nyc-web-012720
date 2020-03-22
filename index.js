class Polygon
{
    constructor(arr)
    { this.arr = arr }

    get countSides(){ 
        return this.arr.length 
    }

    get perimeter (){
        let p = 0
        for (let i=0; i<this.arr.length; i+=1)
        { p += this.arr[i] }
        return p
    }
}

class Triangle extends Polygon {
    get isValid(){
       
            if ((this.arr[0]+this.arr[1])< this.arr[2])
            { return false
            }
            else if ((this.arr[0]+this.arr[2])< this.arr[1])
            { return false
            }
            else if ((this.arr[1]+this.arr[2])< this.arr[0])
            { return false
            }else {
              return true
            }
    }

}

class Square extends Polygon {

    get isValid() {
        if (this.arr[0]===this.arr[1]&&this.arr[2]&&this.arr[3]){
            return true 
        }else {
            return false
        }
    }

    get area(){
        return (this.arr[0]* this.arr[0])
    }

}
