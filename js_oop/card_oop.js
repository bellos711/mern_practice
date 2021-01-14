class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power=power;
        this.res=res;
    }

    unitInfo(){
        console.log(`
        Name: ${this.name}\n
        Cost: ${this.cost}\n
        Power: ${this.power}\n
        Resilience: ${this.res}\n
        `);
    }

    attack(target){
        let damage = target.res - this.power;
        return damage;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    // modRes(target){
    //     return target.res + this.magnitude;
    // }

    // modPow(target){
    //     return target.power + this.magnitude;
    // }

    effectAction(target){
        this.stat.toLowerCase();
        if(this.stat == "resilience"){
            return target.res + this.magnitude;
        }
        else{
            return target.power + this.magnitude;
        }
        
    }
}

var redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
var blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)
var hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
var unhandledPromise = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2","resilience", -2)
var pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)

console.log(`Player 1 summons ${redBeltNinja.name}`)
redBeltNinja.unitInfo();
console.log(`Player 1 plays ${hardAlgorithm.name} on ${redBeltNinja.name}`)
redBeltNinja.res = hardAlgorithm.effectAction(redBeltNinja);
redBeltNinja.unitInfo();

console.log("\n\n--------------------------\n\n")

console.log(`Player 2 summons ${blackBeltNinja.name}`)
blackBeltNinja.unitInfo();
console.log(`Player 2 plays ${unhandledPromise.name} on ${redBeltNinja.name}`)
redBeltNinja.res = unhandledPromise.effectAction(redBeltNinja);
redBeltNinja.unitInfo();

console.log("\n\n--------------------------\n\n")

console.log(`Player 1 uses ${pairProgramming.name} on ${redBeltNinja.name}`)
redBeltNinja.power = pairProgramming.effectAction(redBeltNinja);
redBeltNinja.unitInfo();
console.log(`Player 1 has ${redBeltNinja.name} attack ${blackBeltNinja.name} for ${redBeltNinja.attack(blackBeltNinja)} damage!`)
blackBeltNinja.res = redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.unitInfo();

