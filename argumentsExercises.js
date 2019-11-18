function sum1() {
  arr = Array.from(arguments);
  return arr.reduce((acc,num) => acc + num);
}

function sum2(...args) {
  return args.reduce((acc, num) => acc + num);
}

Function.prototype.myBind1 = function(cxt) {
  let that = this;
  let outerArgs = Array.from(arguments);
  return function() {
    let innerArgs = Array.from(arguments);
    that.apply(cxt, outerArgs.concat(innerArgs));
  };
};

//Q: why do we concat bindArgs with callArgs and how can the program tell when they're separated?
Function.prototype.myBind2 = function(cxt, ...bindArgs) {
  let that = this;
  return function(...callArgs) {
    that.apply(cxt, bindArgs.concat(callArgs));
  };
};

// Function.prototype.myBindShort = function (cxt, ...bindArgs) { (...callArgs) => this.apply(cxt, bindArgs.concat(callArgs))};

function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(newNum) {
    numbers.push(newNum);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el);
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry1 = function(numArgs) {
  let args = [];
  let that = this;
  return function _curriedFunc(newArg) {
    args.push(newArg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curriedFunc;
    }
  };
};

Function.prototype.curry2 = function (numArgs) {
  let args = [];
  let that = this;
  return function _curriedFunc(newArg) {
    args.push(newArg);
    if (args.length === numArgs) {
      return that.call(null, ...args);
    } else {
      return _curriedFunc;
    }
  };
};