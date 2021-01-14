const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;



class Company {
    constructor(){
    this.name = faker.company.companyName();
    this.price = faker.company.catchPhrase();
    this.department = faker.company.catchPhraseDescriptor();
    }
}

class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.jobTitle = faker.name.jobTitle();
        this.jobDescriptor = faker.name.jobDescriptor();

    }
}


app.listen( port, () => console.log(`Listening on port: ${port}`) );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api", (req, res) => {
  res.json({ message: "Hello Express Faker API" });
	});

app.get("/api/users/new", (req, res) => {
    res.json(new User());    
  	});

app.get("/api/companies/new", (req, res) => {
res.json(new Company());    

	});

app.get("/api/user/company", (req, res,) => {
res.json([ new User(), new Company()]);    
	});

app.get("/api/company/user", (req, res,) => {
res.json({Company: new Company(), User: new User() });    
	});



