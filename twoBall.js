const canvas = document.querySelector("#art-board");
const ctx = canvas.getContext("2d");
const w = canvas.width = "440";
const h = canvas.height = "440";

const ballLightGreen={
    x:200,
    y:100,
    v:200,
    r: 20,
    color:"lightgreen",
    draw:function(){
        circle(this.x,this.y,this.r,this.color);
    },
    update:function(){
        if(this.x >=w-this.r || this.x<=this.r){
            this.v *=-1
        }
        this.x +=this.v
    }

}
const ballLightCoral={
    x:300,
    y:100,
    v:-2,
    r:20,
    color:"lightcoral",
    draw:function(){
        circle(this.x,this.y,this.r,this.color);
    },
    update:function(){
        if(this.x>=w-this.r || this.x <=this.r){
            this.v *=-1
        }
        this.x +=this.v
    }

}

const circle = function (x, y, r, color = "royalblue") {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

const clear = function () {
    ctx.clearRect(0, 0, w, h);
}

const collisionCheck=function(x,y,distance){
    let d=Math.sqrt(x**2+y**2);
    return distance>=d;
}

const animation = function () {

    clear();
    let x=ballLightCoral.x-ballLightGreen.x;
    let y=ballLightCoral.y-ballLightGreen.y;
    let distance=ballLightGreen.r+  ballLightCoral.r
    if(collisionCheck(x,y,distance)){
        ballLightGreen.v *=-1;
        ballLightCoral.v *=-1;
    }
    ballLightGreen.draw();
    ballLightCoral.draw();
    ballLightGreen.update();
    ballLightCoral.update();
    requestAnimationFrame(animation);
   
}
animation();

