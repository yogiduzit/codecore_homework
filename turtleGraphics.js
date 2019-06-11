const fs = require('fs');

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
  left() {
    switch (this.face) {
      case "right":
        this.face = "top";
        break;
      case "left":
        this.face = "bottom";
        break;
      case "top":
        this.face = "left";
        break;
      case "bottom":
        this.face = "right";
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
function stretch() {
  if (process.argv[3]) {
    var strings = process.argv[3].split("-");
    let newTurtle = new Turtle(parseInt(strings[0][1]), parseInt(strings[0][3]));
    for (let i = 1; i < strings.length; i++) {
      if (strings[i].startsWith("f")) {
        newTurtle.forward(parseInt(strings[i].slice(1)));
      } else if(strings[i] === 'r') {
          newTurtle.right();
      } else if (strings[i] === 'l') {
        newTurtle.left();
      }
    }
    let message = newTurtle.print();
    let path = process.argv[2].slice(9);
    fs.writeFile(path, message, (err) => {
      if (err) throw err;
      console.log("Drawing written to " + path);
    })
  }
  
}
stretch();



