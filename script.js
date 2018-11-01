window.onload = function(){
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
	var cnv = document.querySelector("canvas");
	var ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "zezin2.png";
	var zezin = new sprite(spriteSheet);

	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);

	function keydownHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezin.mvRight = true;
				zezin.mvLeft = false;
				zezin.mvUp = false;
				zezin.mvDown = false;
				break;
			case LEFT:
				zezin.mvRight = false;
				zezin.mvLeft = true;
				zezin.mvUp = false;
				zezin.mvDown = false;
				break;
			case UP:
				zezin.mvRight = false;
				zezin.mvLeft = false;
				zezin.mvUp = true;
				zezin.mvDown = false;
				break;
			case DOWN:
				zezin.mvRight = false;
				zezin.mvLeft = false;
				zezin.mvUp = false;
				zezin.mvDown = true;
				break;
		}
	}

	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezin.mvRight = false;
				break;
			case LEFT:
				zezin.mvLeft = false;
				break;
			case UP:
				zezin.mvUp = false;
				break;
			case DOWN:
				zezin.mvDown = false;
				break;
		}
	}
	//Quando a imagem for carregada, vai executar essa função init:
	spriteSheet.onload = function(){
		init();
	}
	//O init vai disparar o loop de renderização:
	function init(){
		loop();
	}

	function update(){
		zezin.move();
		
	}

	function draw(){
		//Objeto.função do objeto(this do sprite.js)
		ctx.clearRect(0,0,cnv.width,cnv.height);
		zezin.draw(ctx);
	}

	function loop(){
		window.requestAnimationFrame(loop,cnv);
		update();
		draw();
	}
}