// 1
console.log("////1////");

let sumOfPositive = 0;

function calcSumOfPositive(numArray) {
  if (numArray.length > 0) {
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] > 0) {
        sumOfPositive += numArray[i];
      }
    }
    return sumOfPositive;
  } else {
    console.log("not an array");
  }
}

console.log(calcSumOfPositive([2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]));

// 2
console.log("////2////");

let sumAll = 0;

function calcSumAll(num1) {
  if (num1.length > 0) {
    for (let i = 0; i < num1.length; i++) {
      sumAll += num1[i];
    }
    return sumAll;
  } else {
    console.log("not an array");
  }
}

console.log(calcSumAll([10, 50, 6, 7, 8, 11, 6, 3, 9]));

// 3
console.log("////3////");

let user = {
  firstname: "tom",
  lastname: "tobias",
  age: 32,
  isloggedin: true,
};

function isLoggedIn(user) {
  if (user.isloggedin == true) {
    return user.firstname + " " + user.lastname;
  } else if (user.isloggedin === "false") {
    return false;
  }
}

console.log(isLoggedIn(user));

// 4
console.log("////4////");

let printMaxVar;

function printMax(numMax) {
  if (numMax.length > 0) {
    printMaxVar = numMax[0];
    for (let i = 1; i < numMax.length; i++) {
      console.log(
        "printMaxVar: " + printMaxVar + " " + "numMax[i]: " + numMax[i]
      );
      if (numMax[i] > printMaxVar) {
        printMaxVar = numMax[[i]];
      }
    }
    return printMaxVar;
  }
  return "not an array";
}

console.log(printMax([10, 50, 6, 7, 8, 11, 6, 3, 9]));

// 5
console.log("////5///");

function oddOrEven(num2) {
  if (num2 % 2 === 0) {
    return "this number is even";
  } else {
    return "this number is odd";
  }
}

console.log(oddOrEven(3));

// 6
console.log("////6///");

let array = ["html", "css", "python", "javascript", "bootstrap"];

for (i = 0; i < array.length; i++) {
  if (array[i].length > 4) {
    console.log(array[i]);
  }
}

// 7
console.log("////7///");

let array2_2 = [];

let array2 = [1, 2, 3, 4, 5];

for (let i = array2.length - 1; i >= 0; i--) {
  array2_2.push(array2[i]);
}

console.log(array2_2);

// 8
console.log("////8///");

let user2 = {
  firstname: "tom",
  lastname: "tobias",
  age: 32,
  isloggedin: true,
};

isAdult = () => {
  if (user2.age > 18) {
    return "სრულწლოვანი";
  } else {
    return "არასწრულწლოვანი";
  }
};

console.log(isAdult());

// 9
console.log("////9///");

function compare(num1, num2) {
  if (num1 > num2) {
    return "num1 is the largest";
  } else if (num2 > num1) {
    return "num2 is the lasrgest";
  } else {
    return "error";
  }
}

console.log(compare(2, 2));
