import Phaser from 'phaser';

import bird from '../public/bird.png';
import pipe from '../public/pipe.png';

class Floppy extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'GameScene',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { 
            y: 100 
          },
          debug: true
        }
      },
    });
  }

  preload() {
    this.textures.addBase64('bird', bird);
    this.textures.addBase64('pipe', pipe);
  }

  create() {
    // updating textures
    this.textures.on('onload', () => {
      this.bird.setTexture('bird');
    });

    // bird definition
    this.bird = this.physics.add.image(100, 445, 'bird')
    this.bird.body.gravity.y = 1000
    this.bird.body.setAllowGravity(false)

    // obstacles definition
    this.pipes = this.physics.add.staticGroup();
    // console.log(this.pipes)

    this.keys = {
      jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
    }

    this.timedEvent = this.time.addEvent({ 
      delay: 1500,
      callback: this.addPipeColumn,
      callbackScope: this,
      loop: true
    });

    this.addPipeColumn();
    this.physics.add.collider(this.bird, this.pipes, this.gameOver, null, this)
  }

  update() {
    if (this.bird.y < 0 || this.bird.y > 800) {
      this.gameOver();
    }

    if (this.keys.jump.isDown) {
      this.jump();
    }

    // this.physics.world.collide(this.bird, this.pipes, this.gameOver, null, this)
    // this.physics.add.collder(this.bird, this.pipes, this.gameOver, null, this)
  }

  gameOver() {
    console.log('end')
    this.scene.restart();
  }

  jump() {
    this.bird.body.velocity.y = -350;
  }

  addPipe(x, y) {
    const pipe = this.physics.add.image(x, y, 'pipe')
      
    pipe.body.velocity.x = -200;
    pipe.body.setAllowGravity(false)
    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;

    this.pipes.add(pipe);
  }

  addPipeColumn() {
    const hole = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < 10; i++) {
      if (i !== hole && i !== hole + 1) {
        this.addPipe(300, i * 60 + 10);
      }
    }
  }
}

export default Floppy