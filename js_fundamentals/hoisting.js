
let example = "I'm the example!"; 
console.log(example);
//outputs error

console.log("*******************************");
console.log(hello);
var hello = 'world'; 
//outputs undefined
console.log("*******************************");
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//outputs super cool
console.log("*******************************");
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//chicken
//half gone
console.log("*******************************");

console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
mean();
//error unless mean is after var mean declaration
console.log("*******************************");
console.log(genre); //logs undefined
var genre = "disco"; 
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); //outputs rock
    var genre = "r&b";
    console.log(genre); //outputs rnb
}
console.log(genre);//outputs disco
console.log("*******************************");
dojo = "san jose";
console.log(dojo); //san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); //seattle
    var dojo = "burbank";
    console.log(dojo); //burbank
}
console.log(dojo); //san jose
console.log("*******************************");
console.log(makeDojo("Chicago", 65)); //dojo object dojo:name = chicago, dojo:students = 65, dojo:hiring = true
console.log(makeDojo("Berkeley", 0));//dojo object "closed for now"
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //errors out since dojo variable is const
    }
    return dojo;
}