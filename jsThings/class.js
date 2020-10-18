const object1 = {
    propertyValueA: 3,

    propertyValueB: 4,

    methodNameAddition: () => {
        console.log('Addition of a + b =', object1.propertyValueA + object1.propertyValueB)
    }
}

class MyObject {
    propertyValueB = 30

    propertyValueB = 42

    methodNameAddition() {
        console.log('Addition of a + b =', this.propertyValueB + this.propertyValueB)
    }
}

const object2 = new MyObject();

console.log(
    object1.propertyValueA,
    object2.propertyValueA,
)
object1.methodNameAddition()
object2.methodNameAddition()