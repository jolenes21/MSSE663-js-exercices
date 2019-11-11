/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

 let monkey = {
   type: "mammal",
   diet: "fruit",
   age: "20",
   behaviorEats: function() {
      return "This monkey eats " + this.diet + ".";
   },
   behaviorAge: function() {
      return "This monkey is " + this.age + "years old.";
   }
 };
 
 console.log(monkey.behaviorEats()
 );

class monkeys {
   constructor(type, diet, age) {
      this.type = type;
      this.diet = diet;
      this.age = age;
   }
   behaviorEats() {
      return "This monkey eats " + this.diet + ".";
   }
   behaviorAge() {
      return "This monkey is " + this.age + " years old.";
   }
}

console.log(new monkeys("mammal","fruit", 20).behaviorAge());

