function sprite(img) {
	//Atributos: 120 larg, 130 altura
	this.mvRight = this.mvLeft = this.mvUp = this.mvDown =  false;
	this.contx = 0;
	this.srcX = this.srcY = 0;
	this.width = 70;
	this.height = 75.8;
	this.posX = this.posY = 0;
	this.img = img;
	this.speed = 1;
	this.count = 0;
	//Metodos
	this.draw = function(ctx){
		ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
		this.animation();
		
	}

	//Move
	this.move = function(){
		if(this.mvRight) {
			this.posX += this.speed;
			this.srcY = this.height * 7;
			this.contx = 1;
		} else if(this.mvLeft) {
			this.posX -= this.speed;
			this.srcY = this.height * 5;
			this.contx = 2;
		} else if(this.mvUp) {
			this.posY -= this.speed;
			this.srcY = this.height * 6;
			this.contx = 3;
		} else if(this.mvDown) {
			this.posY += this.speed;
			this.srcY = this.height * 4;
			this.contx = 4;
		} else {
			if(this.contx == 1) {
				this.srcX = this.width * 0;
				this.srcY = this.height * 3;
			} else if (this.contx == 2) {
				this.srcX = this.width * 0;
				this.srcY = this.height * 1;
			} else if(this.contx == 3) {
				this.srcX = this.width * 0;
				this.srcY = this.height * 2;
			} else {
				this.srcX = this.width * 0;
				this.srcY = this.height * 0;
			}
		}
	}
	
	//Animar:
	this.animation = function(){
		if(this.mvLeft || this.mvDown || this.mvUp || this.mvRight){
			this.count++;
			if(this.count >= 40){
				this.count = 0;
			}
			this.srcX = Math.floor(this.count / 5) * this.width;
		}
	}
}
