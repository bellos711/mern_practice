class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Hello, my name is ${this.name}`);
    }

    showStats(){
        console.log(`Stats:\n
        Name: ${this.name}\n
        Health: ${this.health}\n
        Speed: ${this.speed}\n
        Strength: ${this.strength}
        `)
    }

    drinkSake(){
        this.health += 10;
    }
}

export default Ninja;

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();