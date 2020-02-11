<template>
    <div>
        <canvas id="canvas" v-bind:width='canvasWidth' v-bind:height='canvasHeight'></canvas>
    </div>
</template>

<script>
let canvas = null;
let ctx = null;

export default {
    mounted: function() {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');

        for (let i = 0; i < this.brickRowCount; i++) {
            this.bricks[i] = [];
            for (let j = 0; j < this.brickColumnCount; j++) {
                const x = i * (this.brickInfo.w + this.brickInfo.padding) + this.brickInfo.offsetX;
                const y = j * (this.brickInfo.h + this.brickInfo.padding) + this.brickInfo.offsetY;
                this.bricks[i][j] = { x, y, ...this.brickInfo };
            }
        }      
        
        this.update();

        document.addEventListener('keydown', this.keyDown);
        document.addEventListener('keyup', this.keyUp);
    },
    props: {

    },
    data() {
        let defaultCanvasHeight = 600;
        let defaultCanvasWidth = 800;
        return {
            canvasHeight: defaultCanvasHeight,
            canvasWidth: defaultCanvasWidth,
            brickRowCount: 9,
            brickColumnCount: 5,
            ball: {
                x: defaultCanvasWidth / 2,
                y: defaultCanvasHeight - 50,
                size: 10,
                speed: 4,
                dx: 4,
                dy: -4
            },
            paddle: {
                x: defaultCanvasWidth / 2 - 40,
                y: defaultCanvasHeight - 20,
                w: 80,
                h: 10,
                speed: 8,
                dx: 0
            },
            brickInfo: {
                w: 70,
                h: 20,
                padding: 10,
                offsetX: 45,
                offsetY: 60,
                visible: true
            },
            bricks: [],
            running: false
        }
    },
    methods: {
        drawBall: function() {
            ctx.beginPath();
            ctx.arc(this.ball.x, this.ball.y, this.ball.size, 0, Math.PI * 2);
            ctx.fillStyle = '#0095dd';
            ctx.fill();
            ctx.closePath();
        },
        drawPaddle: function() {
            ctx.beginPath();
            ctx.rect(this.paddle.x, this.paddle.y, this.paddle.w, this.paddle.h);
            ctx.fillStyle = '#0095dd';
            ctx.fill();
            ctx.closePath();
        },
        drawBricks: function() {
            this.bricks.forEach(column => {
                column.forEach(brick => {
                    ctx.beginPath();
                    ctx.rect(brick.x, brick.y, brick.w, brick.h);
                    ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
                    ctx.fill();
                    ctx.closePath();
                });
            });
        },
        moveBall: function() {
            if(!this.running) return;

            this.ball.x += this.ball.dx;
            this.ball.y += this.ball.dy;

            // Wall collision (right/left)
            if (this.ball.x + this.ball.size > canvas.width || this.ball.x - this.ball.size < 0) {
               this. ball.dx *= -1; // ball.dx = ball.dx * -1
            }

            // Wall collision (top/bottom)
            if (this.ball.y + this.ball.size > canvas.height || this.ball.y - this.ball.size < 0) {
                this.ball.dy *= -1;
            }

            // console.log(ball.x, ball.y);

            // Paddle collision
            if (
                this.ball.x - this.ball.size > this.paddle.x &&
                this.ball.x + this.ball.size < this.paddle.x + this.paddle.w &&
                this.ball.y + this.ball.size > this.paddle.y
            ) {
                this.ball.dy = -this.ball.speed;
            }

            // Brick collision
            this.bricks.forEach(column => {
                column.forEach(brick => {
                    if (brick.visible) {
                        if (
                        this.ball.x - this.ball.size > brick.x && // left brick side check
                        this.ball.x + this.ball.size < brick.x + brick.w && // right brick side check
                        this.ball.y + this.ball.size > brick.y && // top brick side check
                        this.ball.y - this.ball.size < brick.y + brick.h // bottom brick side check
                        ) {
                            this.ball.dy *= -1;
                            brick.visible = false;
                        }
                    }
                });
            });

            // Hit bottom wall - Lose
            if (this.ball.y + this.ball.size > canvas.height) {
                this.showAllBricks();
                this.resetBall();
                this.running = false;
            }
        },
        movePaddle: function() {
            this.paddle.x += this.paddle.dx;

            // Wall detection
            if (this.paddle.x + this.paddle.w > canvas.width) {
                this.paddle.x = canvas.width - this.paddle.w;
            }

            if (this.paddle.x < 0) {
                this.paddle.x = 0;
            }
        },
        showAllBricks: function() {
            this.bricks.forEach(column => {
                column.forEach(brick => (brick.visible = true));
            });

        },
        resetBall: function() {
            this.ball.y = this.canvasHeight - 50;
            this.ball.x = this.canvasWidth / 2;
        },
        draw: function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            this.drawBall();
            this.drawPaddle();
            this.drawBricks();
        },
        update: function() {
            this.movePaddle();
            this.moveBall();

            // Draw everything
            this.draw();

            requestAnimationFrame(this.update);
        },
        keyDown: function(e) {
            if (e.key === 'Right' || e.key === 'ArrowRight') {
                this.paddle.dx = this.paddle.speed;
            } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
                this.paddle.dx = -this.paddle.speed;
            } else if (e.key === ' ') {
                this.running = true;
            }
        },
        keyUp: function(e) {
            if (
                e.key === 'Right' ||
                e.key === 'ArrowRight' ||
                e.key === 'Left' ||
                e.key === 'ArrowLeft'
            ) {
                this.paddle.dx = 0;
            }
        }
    }
}
</script>

<style lang="scss">
canvas {
    background: #f0f0f0;
    display: block;
    border-radius: 5px;
}
</style>