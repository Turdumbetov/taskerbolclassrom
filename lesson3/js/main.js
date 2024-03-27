//! --------------Логические операторы-------------------
// TODO && и - возвращает true если оба значения true
//?сли хотябы одна часть выражения ложна (т.е. имеет значение false), то все выражение будет возвращать false
//! Оператор && всегда ищет false
console.log(15 > 10);
// TODO ||(или) - если хоть одно условие true, то возвращает true
// Если же все части выражения возвращают false, общий результат будет false
//! Оператор || всегда ищет true
console.log(15 >= 15 || 15 > 20 || 16 > 20);
// TODO ! - НЕ, оператоор не, переворачивает булевое значение
console.log(!true);
//! ПРИОРИТЕТНОСТЬ ЛОГИЧЕСКИХ ОПЕРАТОРОВ
console.log((15 > 13 && 15 == 15) || 15 < 20 || !true);
// 1)! оператор не
// 2) оператор &&
// 3) оператор ||
console.log((!false && true) || (15 > 14 && 15 == 15));
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean({})); //true
console.log(Boolean("Hellow")); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean(234)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-123)); //true
//TODO -----------------ЛОЖНЫЕ----------
// 0
// null
// undefined
// ""
//false
console.log(false && true) ||
  (Boolean(null) && Boolean(23) && Boolean(43) && !true);
// ! ---------------УСЛОВНЫЕ ОПЕРАТОРЫ------------
// TODO if...else
const x = 18;
if (x > 18) {
  console.log("Вход разрешен");
} else if (x == 18) {
  console.log("Ну ладно, проходи");
} else {
  console.log("Ты еще маленький");
}

const age = 99;
if (age < 18) {
  console.log("Вы несовершенолетний(я)");
} else if (age >= 18 && age <= 65) {
  console.log("Вы взрослый(ая");
} else {
  console.log("Вы пожилой(ая)");
}

// TODO Если temperature меньше 0, программа должна вывести сообщение "На улице очень холодно. Не забудьте теплую куртку и шапку!"
// TODO Если temperature от 0 до 10 включительно, программа должна вывести сообщение "Холодно. Лучше надеть куртку и шапку."
// TODO Если temperature от 10 до 20 включительно, программа должна вывести сообщение "Прохладно. Рекомендуется надеть свитер."
// TODO Если temperature больше 20, программа должна вывести сообщение "Тепло. Можно надеть легкую одежду."
const temp = 10;
if (temp < 0) {
  console.log("На улице очень холодно. Не забудьте теплую куртку и шапку!");
} else if (temp >= 0 && temp <= 10) {
  console.log("Холодно. Лучше надеть куртку и шапку");
} else if (temp >= 10 && temp <= 20) {
  console.log("Прохладно. Рекомендуется надеть свитер");
} else {
  console.log("Тепло. Можно надеть легкую одежду");
}

//Создаются переменные red и yellow для красного и жёлтого сигналов светофора соответственно.
//В том случае, если переменным red или yellow присвоены значения "нет", горит зелёный сигнал светофора и выводиться сообщение, разрешающее переходить дорогу.
const red = "no";
const yellow = "no";
if (red == "no" && yellow == "no") {
  console.log("You can go");
} else {
  console.log("You can not go");
}

//! -----------Тернарный оператор-------------
//? Тернарный оператор удобно использовать когда нам нужно проверить только одно условие, и изменить поведение нашей программы в зависимости от того, соблюдено и указанное условие или нет
let sale = 20;
let buyMac;
if (sale > 15) {
  buyMac = true;
} else {
    buyMac = false
}


sale > 15 ? (buyMac = true) : (buyMac = false);
// Если первый вариант true то тогда первый вариант

// 2. Используя тернарный оператор выведите в консоли прогноз погоды. К примеру, если переменная temperature < 0, вывести "Температура воздуха опустится до ${temperature} градусов", в остальных случая вывести  "Температура воздуха поднимется до ${temperature} градусов"

let temperature = 25;
let weather;
temperature < 0 ? (weather = true) : (weather = false);
if ((weather = true)) {
  console.log("Температура воздуха опустится до ${temperature} градусов");
} else {
  ("Температура воздуха поднимется до ${temperature} градусов");
}
// const temperature1 = -5;
// temperaturel < 0
// console.log("Температура воздуха опустится до ${temperature1}
// градусов")
// : console. log(* Температура воздуха поднимется до ${temperature1)
// градусов');

//! ------------Switch Case------------
// Конструкцию switch заменяет собой сразу несколько else if. Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами. Switch  удобно использовать когда поведение нашей программы меняется от разных значений одной и той же переменной
//? Минус в том, что для сравнения берется только одно значение. Плюс - визуально выглядит все понятно
// const number = promt("Введите число");

switch (number) {
  case 100:
    console.log("Доход равен 100");
    break;
  case 200:
    console.log("Доход равен 200");
    break;
  case 300:
    сonsole.log("Доход равен 300");
    break;
  default:
    console.log("Доход не найден");
}

// TODO Используя условный оператор switch case определите тип данных переменной x Результат выведите в кносоли.
const x5 = promt("Введите переменную");

switch (x5) {
  case number:
    console.log("Ваша переменная - number");
    break;
  case string:
    console.log("Ваша переменная - string");
    break;
  default:
    console.log("Ваша переменная не найдена");
}
const x1 = 5;
switch (typeof x1) {
  case "number":
    console.log("Значение переменной x:number");
    break;
  case "string":
    console.log("Значение переменной x:string");
    break;
}

const day = 2;

switch (day) {
  case 1:
    console.log("Это понедельник");
    break;
  case 2:
    console.log("Это вторник");
    break;
  case 3:
    console.log("Это среда");
    break;
  case 4:
    console.log("Это четверг");
    break;
  case 5:
    console.log("Это пятница");
    break;
  case 6:
    сonsole.log("Это суббота");
    break;
  case 7:
    сonsole.log("Это воскресенье");
    break;
  default:
    console.log("День не найден");
}

const login = "admin";
const password = 12345;

const login2 = prompt("Введите login");
const password2 = +prompt("Введите password");
if (login2 == login && password2 == password) {
  console.log("Добро пожаловать");
} else {
  console.log("Login или Password неверный, попробуйте еще раз");
}

// const red = "no";
// const yellow = "no";
// if (red == "no" && yellow == "no") {
//   console.log("You can go");
// } else {
//   console.log("You can not go");
// }
