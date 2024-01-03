function CustomArray() {
    this.size = arguments.length;
  
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }
  
  CustomArray.prototype.push = function (element) {
    this[this.size++] = element;
  };
  
  CustomArray.prototype.pop = function () {
    if (this.size === 0) {
      console.log("Stack is empty. Cannot pop.");
      return;
    }
    const poppedElement = this[--this.size];
    delete this[this.size];
    return poppedElement;
  };
  
  CustomArray.prototype.top = function () {
    if (this.size === 0) {
      console.log("Stack is empty. No top element.");
      return;
    }
    return this[this.size - 1];
  };
  
  CustomArray.prototype.print = function () {
    const elements = [];
    for (let i = 0; i < this.size; i++) {
      elements.push(this[i]);
    }
    console.log(`[${elements.join(", ")}]`);
  };
  
  CustomArray.prototype.printReverse = function () {
    const elements = [];
    for (let i = this.size - 1; i >= 0; i--) {
      elements.push(this[i]);
    }
    console.log(`[${elements.join(", ")}]`);
  };
  
  const stack = new CustomArray(1, 2, 3, 4);
  
  stack.print(); 
  stack.push(5);
  stack.print(); 
  stack.pop();
  stack.print(); 
  
  console.log("Top element:", stack.top()); 
  
  stack.printReverse(); 
  