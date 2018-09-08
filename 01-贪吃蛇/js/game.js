(function(){
    var that;
    function Game() {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.start = function () {
        // 把蛇和食物对象，渲染到地图上面
        this.food.render(this.map);
        this.snake.render(this.map);
        // 测试move方法
        // this.snake.move();        
        // this.snake.render(this.map);
        // this.snake.move();        
        // this.snake.render(this.map);

        // 开始游戏的逻辑

        // 让蛇移动起来
        runSnake();
        // 通过键盘控制蛇的移动
        bindKey();
        // 遇到食物的处理
        // 遇到边界
    }
    

    function bindKey() {
        document.addEventListener('keydown',function(e) {
            // console.log(e.keyCode);
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = 'left';
                    break;
                case 38:
                    this.snake.direction = 'top';
                    break;
                case 39:
                    this.snake.direction = 'right';
                    break;
                case 40:
                    this.snake.direction = 'bottom';
                    break;
            }
        }.bind(that),false);
    }

    function runSnake() {
        var timerId = setInterval(function() {
            this.snake.move(this.food,this.map);
            this.snake.render(this.map);

            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX){
                alert("ganem over");
                clearInterval(timerId);
            }
            if (headY < 0 || headY >= maxY){
                alert("ganem over");
                clearInterval(timerId);
            }
        }.bind(that),150);
    }
    // 暴露构造函数
    window.Game = Game;
})();