// for (let i = 1; i < 333; i -=3) {
//   console.log(i);
// }


//скрипт сумма четных чисел

const min = 33;
const max = 199;
const total = 0;

for (let i = min; i <= max; i += 3){
  if (i % 2 !== 0) {
    console.log('не четное:', i);
    continue;
  }
  console.log('четное:', i);
  
  
}
console.log('total:', total);

//обработка покупок в магазине

let balance = 5000;
const payment = 1000;

console.log()