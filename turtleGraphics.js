class Turtle {
  constructor(x, y) {
    this.y = y;
    this.x = x;
    this.points = [[this.x, this.y]];
    this.face = "right";
    this.max_X = x;
    this.max_Y = y; 
  }
  forward(n) {
    switch(this.face) {
      case "right":
        for (let i = 1; i <= n; i++) {
          this.points.push([this.y, this.x + i]);
        }
        this.x += n;
        this.max_X += n;
        break;
      case "left":
        for (let i = 1; i <= n; i++) {
          this.points.push([this.y, this.x - i]);
        }
        this.x -= n;
        break;
      case "top":
        
        for (let i = 1; i <= n; i++) {
          this.points.push([this.y - i, this.x]);
        }
        this.y -= n;
        break;
      case "bottom":
        
        for (let i = 1; i <= n; i++) {
          this.points.push([this.y + i, this.x]);
        }
        this.y += n;
        this.max_Y += n;
        break;
    }
    return this;
  }
  right() {
    switch (this.face) {
      case "right":
        this.face = "bottom";
        break;
      case "left":
        this.face = "top";
        break;
      case "top":
        this.face = "right";
        break;
      case "bottom":
        this.face = "left";
        break;
    }
    return this;
  }
  allPoints() {
    return this.points;
  }
  includes(point) {
    let contains = false;
    for (let element of this.points) {
      if (typeof element === typeof point) {
        if (element.length === point.length) {
          let count = 0;
          for (let i = 0; i < element.length; i++) {
            if (element[i] !== point[i]) {
              count += 1;
              
            }
          }
          if (count === 0) {
            return true;
          }
        }
      }
    }
    return contains;
  }
  print() {
    let str = "";
    for (let i = 0; i <= this.max_Y; i++) {
      for (let j = 0; j <= this.max_X; j++) {
        if (this.includes([i, j])) {
          str += "\u2022"
        } else {
          str += " "
        }
      }
      str += "\n"
    }
    return str;
  }
 }

let turtle = new Turtle(0, 0);
turtle.forward(4).right().forward(10).right().forward(4).right().forward(4).right().forward(24);
console.log(turtle.print());

