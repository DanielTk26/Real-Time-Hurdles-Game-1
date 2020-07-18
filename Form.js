class Form {

  constructor() {
      this.input = createInput("Your Name");
      this.button = createButton('Play!!!');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
  }
  hide() {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
  }

  display() {
      this.title.html("Hurdless Runner");
      this.title.position(displayWidth / 2 -250, 0);
      this.title.style('font-size', '70px');
      this.title.style( 'color', 'yellow');
      this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
      this.input.style('width','200px');
      this.input.style('height','20px');
      this.input.style('background','white');
      this.button.position(displayWidth / 2 -40 , displayHeight / 2+120);
      this.button.style('width','200px');
      this.button.style('height','40px');
      this.button.style('background','green');
      this.reset.position(displayWidth-221, 25);
      this.reset.style('width','200px');
      this.reset.style('height','30px');
      this.reset.style('background','purple');

      this.button.mousePressed(() => {
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount += 1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello Runner " + player.name)
          this.greeting.position(displayWidth / 2 -200, displayHeight / 4);
          this.greeting.style( 'color', 'blue');
          this.greeting.style('font-size', '70px');
      });

      this.reset.mousePressed(() => {
          player.updateCount(0);
          game.update(0);
      });

  }
}