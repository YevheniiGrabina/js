// ПЕРЕОПРЕДЕЛЕНИЕ ПЕРЕМЕННОЙ

let productName = "Droid";
let pricePerItem = 2000;
 productName = "Repair droid";
pricePerItem = 3500;
 

// ТИПЫ ПРЕМИТИВОВ

const topSpeed = 160;
const distance = 617.54;
const login ='mango935';
const isOnline = true; 
const isAdmin = false;

// Математические операции (умножение *, складывание + ,вычитние - ,деление /)

const pricePerItem = 3500;
const orderedQuantity = 4;


const totalPrice = (pricePerItem * orderedQuantity);
console.log(totalPrice);


// ШАБЛОННЫЕ СТРОКИ

const productName = "Droid";
const pricePerItem = 3500;
const message =`You picked ${productName}, price per item is ${pricePerItem} credits`;


function makeMessage (name, price) {
  
   const message = `You picked ${name}, price per item is ${price} credits` ;
    return message;
};

// ЗАКАЗ ПРОДУКТА

const orderedQuantity =6;
const pricePerDroid =800;
const deliveryFee =50;

const totalPrice = (orderedQuantity * pricePerDroid +deliveryFee);

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

console.log(message);


// ВЫЗОВ ФУНКЦИИ (ИМЯ ФУНКЦИИ -ЧТО ДЕЛАТЬ?)

// 1. Объявление функции multiply
function multiply() {
  // Тело функции
  console.log("multiply function invocation");
}

// 2. Вызовы функции multiply
multiply(); // multiply function invocation
multiply(); // multiply function invocation
multiply(); // multiply function invocation

function sayHi(){
    console.log("Hello, this is my first function!")

}
sayHi();


// ПАРАМЕТРЫ И АРГУМЕНТЫ

function add(a, b, c) {
  console.log(`Addition result equals result  ${a + b + c}`);
  }

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// ВОЗВРАТ ЗНАЧЕНИЯ RETURN

function multiply(x, y, z) {
  console.log("Код до return выполняется как обычно");

  // Возвращаем результат выражения умножения
  return x * y * z;

  console.log("Этот лог никогда не выполнится, он стоит после return");
}

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550


// ОПЕРАТОРЫ СРАВНЕНИЯ
> - больше
< - меньше
>= - больше или равно
  <= - меньше или равно

  const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false

function isAdult(age) {
  
  const passed = age>=18;

    return passed;
}

=== (строгое равенство) и !== (строгое неравенство)
// ✅ Хорошо, приведение типов не выполняется
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  
  const isMatch = SAVED_PASSWORD === password ;

    return isMatch;
}

// ВЕТВЛЕНИЯ IF...ELSE!!!!!!!!!!!!!!!!!!!!!!

if (условие) {
  // тело if
} else {
  // тело else
}

// 
let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100

function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;

  function checkStorage(available, ordered) {
  let message;
  
if (ordered > available){
  message = 'Not enough goods in stock!';
} else {
  message ='Order is processed, our manager will contact you.';
}
    return message;
  }
  
  // ELSE.........IF/1111111111

  function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
    }
    
    function checkStorage(available, ordered) {
  let message;
  
if (ordered === 0){
  message = 'There are no products in the order!';
} else if (ordered > available){
  message = 'Your order is too large, there are not enough items in stock!';
} else{
  message = 'The order is accepted, our manager will contact you';
}
    return message;
}

    // &&!!!!!!!!!!
    function isNumberInRange(start, end, number) {
  const isInRange = number > start && number < end ; // Change this line
console.log(number > start);
  return isInRange;
    }
    
    // || !!!!!!!!!!!!!!!!!!
    function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip" ; // Change this line

  return canAccessContent;
    }
    
    !//HE
      
      function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange ; // Change this line

  return isNotInRange;
      }
    
    // РАСЧЕТ СКИДКИ

    function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  
if (totalSpent >= 50000){
  discount = GOLD_DISCOUNT;
} else if (totalSpent >=20000){
  discount = SILVER_DISCOUNT;
}else if (totalSpent >=5000){
  discount = BRONZE_DISCOUNT;
}else{
  discount = BASE_DISCOUNT;
}
    return discount;
}

// ДЛИННА СТРОКИ
    
    const courseTopic = "JavaScript essentials";


const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length -1];

// slice
    
    function getSubstring(string, length) {
  const substring = (string.slice( 0, length)) ; // Change this line

  return substring;
    }
    
    // РЕГИСТРЫ

    function normalizeInput(input) {
  const normalizedInput = input.toLowerCase() ; // Change this line

  return normalizedInput;
    }
    
    // Includes

    function checkForName(fullName, name) {
 const result = fullName.includes(name) ; // Change this line
  return result;
}

    
// Ранний возврат
    function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}
// 11111111111111111111111111111111111111112222222222222222222222
    
    
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  



  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }

  return "Access denied, wrong password!";
  // Change code above this line
}


//
    
    function checkStorage(available, ordered) {
  

  if (ordered === 0) {
    return "Your order is empty!";
  }  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
    return "The order is accepted, our manager will contact you";
    }
    
    // Масивы
    const fruits = ["apple", "plum", "pear", "orange"] 
    
    // Переопредиление

    const fruits = ["apple", "plum", "pear", "orange"];
fruits[1]= "peach";
fruits[3] = "banana";

// Длинна масива
const fruits = ["apple", "peach", "pear", "banana"];
const fruitsArrayLength = fruits.length;

// Function
    
    
  function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  const price = (message.split(" ").length) * pricePerWord;
  return price;
   // Change code above this line
}

   // Change code above this line
}
    
  //  SPLIT

  
  function splitMessage(message, delimeter) {
  let words = (message.split(delimeter)) ;

  return words;
}
    // JOIN
  function makeStringFromArray(array, delimeter) {
  let string =  (array.join(delimeter));
 
  return string;
}
  
  // МЕТОД SLICE

  const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = (fruits.slice(0,2)) ;
const nonExtremeEls =(fruits.slice(1,4)) ;
  const lastThreeEls = (fruits.slice(-3));
  

  // method CANCAD
  const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

  const allClients = oldClients.concat(newClients); 
  


  // КОМПОЗИЦИЯ МАСИВОВ
  function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
return firstArray.concat(secondArray).slice(0,maxLength);


    // Change code above this line
  }
  




  // Цикл FOR

  for (Инициализация; Условие; Пост - выражение) {
  // Тело цикла
  }
  const start = 3;
const end = 7;

for (let i = start ; i <= end ; i += 1) { // Change this line
  console.log(i);
}


function calculateTotal(number) {
 // Change code below this line
let sum = 0;
for (let i = 1; i <= number; i += 1){
sum += i;
}
return sum;
  // Change code above this line
  }
  
  const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i< fruits.length; i+=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}



// for (let i = 1; i < 333; i -=3) {
//   console.log(i);
// }


//скрипт сумма четных чисел

// const min = 33;
// const max = 199;
// const total = 0;

// for (let i = min; i <= max; i += 3){
//   if (i % 2 !== 0) {
//     console.log('не четное:', i);
//     continue;
//   }
//   console.log('четное:', i);
  
  
// }
// console.log('total:', total);

//обработка покупок в магазине

// let balance = 5000;
// const payment = 1000;

// console.log()







