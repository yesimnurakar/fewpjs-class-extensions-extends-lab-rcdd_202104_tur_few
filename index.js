
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
      return this.sides.length;
    }

    get perimeter() {
  let peri = 0;
    for (let length of this.sides) {
      peri += length;
    }
    return peri;
  }
}

    class Triangle extends Polygon {
  constructor(countSides, perimeter) {
    super(countSides);
      super(perimeter);
  }

get isValid() {
  if (this.count !== 3) return;
let side1 = this.sides[0];
let side2 = this.sides[1];
let side3 = this.sides[2];
return((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
 }

}
