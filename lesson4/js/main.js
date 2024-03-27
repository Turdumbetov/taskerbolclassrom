//!----------------Простые методы массива-------
//!----------------push/pop--------
const friends = ["Peter", "Harry", "Jhon", "Bob"];
//? Для добавления новых элементов в конец массива, существует специальный метод push.
// название_массива.push(новый элемент)
friends.push("Ivan");
const friends2 = ["Sonya", "Mark"];
friends.push(friends2);
friends.pop();
//!----------------unshift/shift------------
friends.shift();
friends.unshift("Misha");
console.log(friends);
//!-----------------join/split---------
//? С помощью метода join можно обьединить все элементы массива в одну строку. Метод join принимает любые объединители (тоесть +, -, пробел и так далее)
//? Метод join возвращает строку не меняя исходный массив
const fruits = ["Apple", "Orange", "Grape", "Banana"];
const fruits2 = friends.join(" ");
console.log(fruits2);
console.log(fruits);
//? Метод split разбирает элеменеты строки в массив по указанному разделителю. Разделит на массивы ТОЛЬКО по разделителю к примеру /
const date = "29/11/23/32/54/99";
const year = date.split(" / ");
console.log();
console.log(year);
//? метод reverse переворачивает и меняет порядок элементов в обратную сторону
const stringNumber = ["first", "second", "third", "fourth"];
const stringNumber2 = stringNumber.reverse();
console.log(stringNumber2);
console.log(stringNumber);



// TODO  Дан массив, напишите программу, которая будет спрашивать хотите ли вы удалить или добавить элемент в массив, если добавить, то запрашивать куда добавить (Начало или конец) и какой элемент добавить, если удалить, то запрашивать откуда (с начала или конца).
const arr4 = [1, 2, 3, 4, true];
const otvet = prompt("Вы хотите добавить или удалить элемент");
if (otvet === "добавить") {
  const otvet2 = prompt("Укажите куда вы хотите добавить элемент");
  const otvet3 = prompt("Введите элемент, который хотите отправить");
  if (otvet2 == "начало") {
    arr4.unshift(otvet3);
  } else if (otvet2 == "конец") {
    arr4.push(otvet3);
  } else {
    console.log("error");
  }
} else if (otvet === "удалить") {
  const otvet4 = prompt("Укажите откуда вы хотите удалить элемент");
  if (otvet4 == "начало") {
    arr4.shift();
  } else if (otvet4 == "конец") {
    arr4.pop();
  } else {
    console.log("error!");
  }
}
console.log(arr4);


// TODO  Написать прогамму которая принимает 2 значения у пользователя, имя и номер телефона, нужно динамично отправлять эти данные в виде обьекта в массив.
const name1 = prompt("Введите имя");
const phone = +prompt("Введите номер телефона");
const obj = {
  name: name1,
  phone: phone,
};
const arr5 = [obj];
console.log(arr5);

//!---------------------------sort()----------------------
const arr2 = [1, 343, 232, 32, 43, 2324, 32, 54, 324, 525, 2424];
const arr3 = arr2.sort((a, b) => a - b);
console.log(arr3);

const str = "apple,banana,orange,grape";
const arr6 = str.split(",");
console.log(arr6);
arr6.sort();
const str2 = arr6.join(" ");
console.log(str2);
