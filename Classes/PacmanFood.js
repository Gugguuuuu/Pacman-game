class PacmanFood{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.scale = 15
        this.removida = false
        
    }
    show(){
        fill('yellow')
        this.object = ellipse(this.x, this.y, this.scale , this.scale)
    }
    CheckColisation(pacman) {
        const d = dist(this.x, this.y, pacman.position.x, pacman.position.y);
        if (d < this.scale / 2 + pacman.width / 2) {
            this.removida = true;
            score += 1
            return true;
        }
        return false;
    }
}