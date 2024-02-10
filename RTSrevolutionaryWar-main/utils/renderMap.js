function renderMap() {
  let x = 0;
  let y = 0;
  let direction;
  for (let i = 0; i + 1 <= gameMap.values.length; i++) {
    //set terrain images
    switch (gameMap.values[i]) {
      case "gG": //green grass
        //ctx.fillStyle = "green";
        direction = getDirection();
        let plain = getRandomInt(0, 2500);
        if (plain > 19) {
          plain = 0;
        }
        layImg(plainArray[plain], x, y, direction);
        break;

      case "fG": // forest green
        ctx.fillStyle = "darkgreen";

        direction = getDirection();
        //layImg("sprites/forests/forest.png", x, y);
        break;

      case "hG": // hills gray
        ctx.fillStyle = "gray";

        direction = getDirection();
        //layImg("sprites/highground/moutain.png", x, y, direction);
        break;

      case "wB": //water blue
        //ctx.fillStyle = "blue";
        direction = getDirection();
        let water = getRandomInt(0, 4);
        layImg(waterArray[water], x, y, direction);
    }
    ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

    if (x <= CANVAS_WIDTH + TILE_SIZE) {
      x = x + TILE_SIZE;
    } else {
      x = 0;
      y = y + TILE_SIZE;
    }
  }
}

// function layImg(imageSrc, x, y) {
//   let img = new Image();
//   img.src = imageSrc;
//   img.onload = function () {
//     ctx.drawImage(img, x, y, TILE_SIZE, TILE_SIZE);
//   };
// }
let waterArray = [
  "sprites/water/1.png",
  "sprites/water/2.png",
  "sprites/water/3.png",
  "sprites/water/4.png",
  "sprites/water/5.png",
  "sprites/water/6.png",
  "sprites/water/7.png",
  "sprites/water/8.png",
  "sprites/water/9.png",
  "sprites/water/10.png",
  "sprites/water/11.png",
  "sprites/water/12.png",
  "sprites/water/13.png",
  "sprites/water/14.png",
];
let plainArray = [
  "sprites/plains/1.png",
  "sprites/plains/2.png",
  "sprites/plains/3.png",
  "sprites/plains/4.png",
  "sprites/plains/5.png",
  "sprites/plains/6.png",
  "sprites/plains/7.png",
  "sprites/plains/8.png",
  "sprites/plains/9.png",
  "sprites/plains/10.png",
  "sprites/plains/11.png",
  "sprites/plains/12.png",
  "sprites/plains/13.png",
  "sprites/plains/14.png",
  "sprites/plains/15.png",
  "sprites/plains/16.png",
  "sprites/plains/17.png",
  "sprites/plains/18.png",
  "sprites/plains/19.png",
];
let plainArraySticks = [];
let plainarrayRocks = [];
let plainArrayFlowers = [];

function layImg(imageSrc, x, y, direction) {
  let angle = 0;
  switch (direction) {
    case "N":
      angle = 0;
      break;
    case "E":
      angle = Math.PI / 2; // 90 degrees in radians
      break;
    case "S":
      angle = Math.PI; // 180 degrees in radians
      break;
    case "W":
      angle = -Math.PI / 2; // -90 degrees in radians
      break;
    default:
      console.error("Invalid direction. Please use 'N', 'E', 'S', or 'W'.");
      return; // Exit the function if direction is invalid
  }
  let img = new Image();
  img.src = imageSrc;
  img.onload = function () {
    ctx.save(); // Save the current canvas state
    ctx.translate(x + TILE_SIZE / 2, y + TILE_SIZE / 2); // Translate to the center of the image
    ctx.rotate(angle); // Rotate the canvas
    ctx.drawImage(img, -TILE_SIZE / 2, -TILE_SIZE / 2, TILE_SIZE, TILE_SIZE); // Draw the image
    ctx.restore(); // Restore the canvas state
  };
}

function getDirection(d) {
  d = getRandomInt(1, 5); // Generate a random direction
  if (d === 1) {
    d = "N";
  } else if (d === 2) {
    d = "E";
  } else if (d === 3) {
    d = "S";
  } else if (d === 4) {
    d = "W";
  }
  return d;
}

console.log(
  plainArray + plainArrayFlowers + plainArraySticks + plainarrayRocks
);
