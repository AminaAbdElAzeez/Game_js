function character(name,strength,health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.elements = new UIElements(this.name);
}
function UIElements(name){
    this.attackBtn = document.querySelector(`#${name}-attack`);
    this.healthBtn = document.querySelector(`#${name}-make-health`);
    this.alive = document.querySelector(`#${name}-alive`);
    this.progress = document.querySelector(`.${name}-health span`);

}
character.prototype.attack = function(opponent){
    if(opponent.health > 0){
        opponent.health -=this.strength;
        opponent.elements.progress.style.width = `${opponent.health}%`
    }else{
        opponent.elements.attackBtn.remove();
        opponent.elements.healthBtn.remove();
        opponent.elements.alive.innerHTML = `${opponent.name} is died, You can't hit him.`
    }
}
character.prototype.status = function(){
    console.log(`Name : ${this.name}`);
    console.log(`Strength : ${this.strength}`);
    console.log(`Health : ${this.health}`);
}
character.prototype.makeHealth = function(){
    if(this.health < 100){
        this.health +=10;
        this.elements.progress.style.width = `${this.health}%`

    }
    if(this.health > 100){
        this.health = 100;
    }
}
let nartoo = new character("nartoo" , 10 , 100);
let sasaki = new character("sasaki" , 5 ,100);
nartoo.elements.attackBtn.addEventListener("click" , function(){
    nartoo.attack(sasaki);
})
sasaki.elements.attackBtn.addEventListener("click" , function(){
    sasaki.attack(nartoo);
})
nartoo.elements.healthBtn.addEventListener("click", function(){
    nartoo.makeHealth();
})
sasaki.elements.healthBtn.addEventListener("click", function(){
    sasaki.makeHealth();
})