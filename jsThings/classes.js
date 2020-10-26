class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.newYear=age;
    }

    welcomeMessage(){
            return `Hi ${this.firstname} ${this.lastname}, welcome to the App`;   
    }
    newAge(){
        this.newYear++;
        console.log(`${this.firstname} is now ${this.newYear} years old`)
        //returning this instance of the object allows for method chaining
        //this saves the incremented value no matter how many times the method is called on one value 
        return this;
    }
}

//the new keyword
//  -creates a new empty object {}
//  -sets value of this to be the new empty object
//  -calls the constructor method
const clayton = new User("Clayton", "Bigsby", 20);
const jack = new User("Jack", "Assigan", 46);

console.log(clayton.welcomeMessage())

//method chaining
//console.log(jack.newAge().newAge().newAge())

//-------------------------------------------------------------------------------------------------------------
//Class inheritance
//it extends and uses the constructor and methods of class User. new methods can be used in class Admin.
class Admin extends User {
    oversee(){
        if(60 - this.age <= 0){
            return `${this.firstname} should retire`;
        }else{
            return `${this.firstname} is still good to go`;
        }

    }
}
const m = new Admin("M", "k", 27);

console.log(m.oversee())