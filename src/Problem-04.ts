// Problem 04

// Define a union type Circle and Rectangle, where each type has a unique shape property. 
// Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
// 78.54;

// Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// Sample Output 2:
// 24;



// Solution


// Circle
type Circle = {
    shape: "circle";
    radius: number;
};


// Rectangle
type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

type shape = Circle | Rectangle;

function calculateShapeArea(shape: shape) {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    } else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }else{
        return 0;
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
// result - 78.53981633974483


const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

console.log(rectangleArea);
// result - 24
