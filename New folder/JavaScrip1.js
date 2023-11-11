function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }

  const person = {
    name: "John Doe",
    age: 35,
    email: "johndoe@example.com"
  };
  
  function filterPeopleOver30(people) {
    return people.filter(person => person.age > 30);
  }
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "No elements in the stack";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
  }
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in the queue";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
  }
  
  function removeVowels(str) {
    return str.replace(/[aeiou]/gi, "");
  }
  
  function getUniqueElements(arr1, arr2) {
    const uniqueElements = new Set([...arr1, ...arr2]);
    return Array.from(uniqueElements);
  }