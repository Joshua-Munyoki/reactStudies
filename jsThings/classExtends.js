class Human {
    gender = null;

    age = 0;

    race = null;

    constructor(gender, age, race) {
        this.gender = gender;
        this.age = age;
        this.race = race;
    }

    getGender() {
        return this.gender
    }
}

class AfricanHuman extends Human {
    constructor(gender, age) {
        super(gender, age, 'black')
    }
}

class AsianHuman extends Human {
    constructor(gender, age) {
        super(gender, age, 'brown')
    }
}

class CaucasianHuman extends Human {
    constructor(gender, age) {
        super(gender, age, 'white')
    }
}

class AfricanFemale extends AfricanHuman {
    constructor(age) {
        super('female', age)
    }
}

class AsianFemale extends AsianHuman {
    constructor(age) {
        super('female', age)
    }
}

class CaucasianFemale extends CaucasianHuman {
    constructor(age) {
        super('female', age)
    }
}

class AfricanMale extends AfricanHuman {
    constructor(age) {
        super('male', age)
    }
}

class AsianMale extends AsianHuman {
    constructor(age) {
        super('male', age)
    }
}

class CaucasianMale extends CaucasianHuman {
    constructor(age) {
        super('male', age)
    }
}

const human1 = new Human('male', 90, 'black');

const human2 = new AfricanHuman('male', 90);

const human3 = new AsianHuman('female', 23);

const human4 = new CaucasianHuman('male', 6);

const human5 = new CaucasianFemale(6);

const human6 = new AsianFemale(36);

const human7 = new AfricanFemale(90);

const human8 = new CaucasianMale(6);

const human9 = new AsianMale(36);

const human10 = new AfricanMale(90);

console.log(human1)
console.log(human2)
console.log(human3)
console.log(human4)
console.log(human5)
console.log(human6)
console.log(human7)
console.log(human8)
console.log(human9)
console.log(human10)

console.log(
    'Method from parent component::::',
    human10.getGender()
)