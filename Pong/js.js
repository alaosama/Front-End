var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

var round = [5, 5, 3, 3, 2];
var colors = ['#1abc9c', '#2ecc71', '#2498db', '#8c52ff', '#9b59b6'];

//

var Ball = {
    new: function (incrementedSpped) {
        return {
            width: 18,
            height: 18,
            x: (this.canvas.width / 2) - 9,
            y: (this.canvas.height / 2) - 9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpped || 7
        };
    }
};

//

var Ai = {
    new: function (side) {
        return {
            width: 18,
            height: 180,
            x: side === 'left' ? 150 : this.canvas.width - 150,
            y: (this.canvas.height / 2) - 35,
            score: 0,
            move: DIRECTION.IDLE,
            speed: 8
        };
    }
};

var Game = {
    initialize: function () {
        this;canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = 1400;
        this.canvas.height = 1000;

        this.canvas.style.width = (this.canvas.width / 2) + 'px';
        this.canvas.style.height = (this.canvas.height / 2) + 'px';

        this.player = Ai.new.call(this, 'left');
        this.ai = Ai.new.call(this, 'right');
        this.ball = Ball.new.call(this);

        this.ai.speed = 5;
        this.running = this.over = false;
        this.turn = this.ai;
        this.timer = this.round = 0;
        this.color = '#8c52ff';

        Pong.menu();
        Pong.listen();
    },

    endGameMenu: function (text) {
        //
        Pong.context.font = '45px Courier New';
        Pong.context.fillStyle = this.color;

        //

        Pong.context.fillRect ( 
            Pong.canvas.width / 2 -350,
            Pong.canvas.height / 2 - 48,
            700,
            100
        );

        //
        Pong.context.fillStyle = '#ffffff';

        //
        Pong.context.fillText (text,
            Pong.canvas.width / 2,
            Pong.canvas.height / 2 + 15)
    
        };

    setTimeout (function () {
        Pong = Object.assign({}, Game);
        Pong.initialize();
    }, 3000);

    menu: function () {
        
        //
        Pong.draw();

        //
        this.context.font = '50px Coursier New';
        
    }
}