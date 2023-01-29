// Note! The y-axis starts at the top of the window.
export default class Player {
  constructor(canvas) {
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.rotation = 0;

    const image = new Image();
    image.src = "./img/enterprise-100x200.png";
    image.onload = () => {
      const imageScale = 0.8;
      this.image = image;
      this.width = image.width * imageScale;
      this.height = image.height * imageScale;
      this.position = {
        x: canvas.width / 2 - image.width / 2,
        y: canvas.height - image.height - 50,
      };
    };
  }

  // Canvas context method "draw()" is used to render the current state of the canvas
  draw(context) {
    // context.fillStyle = "blue";
    // context.fillRect(this.position.x, this.position.y, this.width, this.height);

    if (this.image)
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
  }

  updatePlayer(context) {
    if (this.image) {
      this.draw(context);
      this.position.x += this.velocity.x;
    }
  }
}
