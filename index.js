import Player from "./player.js";

/******************** CANVAS **********************/

// Select canvas element
const canvas = document.querySelector("canvas");

// Select canvas context: This provides a set of drawing methods for creating and manipulating graphics on a canvas element.
const context = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/****************** END CANVAS ********************/

/********************** PLAYER ************************/
const player = new Player(canvas);
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};

// This method gets called before player image is loaded
player.draw(context);

/******************** END PLAYER **********************/

// Create animation loop
const animate = function () {
  context.fillStyle = "rgb(76, 7, 133)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.updatePlayer(context);

  // Player ship velocity
  const playerShipSpeed = 15;

  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.x = -playerShipSpeed;
    player.rotation = -0.1;
  } else if (
    keys.d.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = playerShipSpeed;
  } else {
    player.velocity.x = 0;
  }

  // This method allows us to schedule a function to be executed before the next repaint of the browser window. It's more efficient than "setTimeout" or "setInterval"
  requestAnimationFrame(animate);
};

animate();

// Player ship movement: Using object destructuring
window.addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a":
      console.log("left");
      keys.a.pressed = true;
      break;
    case "d":
      console.log("right");
      keys.d.pressed = true;
      break;
    case " ":
      console.log("space");
      keys.space.pressed = true;
      break;
  }
});

// Stop Player ship movement
window.addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "a":
      keys.a.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    case " ":
      keys.space.pressed = false;
      break;
  }
});
