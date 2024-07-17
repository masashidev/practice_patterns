function loop(){
  requestAnimationFrame(loop);
}


if(timestamp - lastTime > itnerval){
}
if(timestamp - lastTime < duration){}

if(this.animation){
  this.update()
  this.draw()
  this.animation = false
}
if(this.animationStartTime + this.animationDuration < timestamp){
  this.animation = true
}
if(this.animationDuration < timestamp - this.animationStartTime){
  this.animation = false
}

this.animationStartInterval = 1000
this.animationDuration = 500
this.animationStartTime = 0
this.lastTimeAnimation = 0

this.currentPosition = {x:0, y:0}
this.nextPosition = {x:0, y:0}
this.movementDistance = nextPosition - currentPosition
this.movementTimeDuration = 1000
this.movementSpeed = movementDistance / movementTimeDuration
this.vx = Math.cos(angle) * speed
this.vy = Math.sin(angle) * speed


