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
        console.log("drinkSake from Ninja");
        this.health += 10;
    }
}

//------------------------------------------------------------------------------
class Sensei extends Ninja{
    constructor(name, health){
        super(name, health);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    drinkSake(){
        this.health += 20;
        console.log(`drinkSake from Sensei\nHealth is now ${this.health}`);
        
    }
}


const superSensei = new Sensei("Master Splinter", 150);
superSensei.speakWisdom();
superSensei.showStats();
superSensei.drinkSake();