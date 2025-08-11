class Car{
    constructor(x_cord, y_cord, height, width){
        this.x_cord = x_cord;
        this.y_cord = y_cord;
        this.height = height;
        this.width = width;
    }

    draw(ctx){
        ctx.beginPath()

        ctx.rect(
            this.x_cord - this.width/2,
            this.y_cord - this.height/2,
            this.width,
            this.height
        );

        ctx.fill();
    }
}