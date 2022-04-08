////////////////////////////////////////////////////////////////////////////////////
// Продолжить работу с интернет-магазином:                                        //
// a) В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими  //
// объектами можно заменить их элементы?                                          //
// b) Реализуйте такие объекты.                                                   //
// c) Перенести функционал подсчета корзины на объектно-ориентированную базу.     //
////////////////////////////////////////////////////////////////////////////////////


// Насколько я правильно понял, во втором ДЗ нужно было решать через массив. Я решил через объект.
// Поэтому, я просто скопировал решение из второго домашнего задания


// Организуем массив - корзина с товарами

var basket = [
    {name: 'яблоки', category: 'фрукты', price: 150},
    {name: 'груши', category: 'фрукты', price: 50},
    {name: 'апельсины', category: 'фрукты', price: 135},
    {name: 'картофель', category: 'овощи', price: 75},
    {name: 'морковь', category: 'овощи', price: 95},
]

// Организуем функцию countBasketPrice для подсчета стоимости корзины


totalPrice = 0;
basket.forEach(function(item) {
    totalPrice += item.price
});

console.log(totalPrice)

// Через стрелочную функцию немного короче получилось

totalPrice = 0;
basket.forEach(item => totalPrice += item.price);
console.log(totalPrice);

// Тоже самое через функцию countBasketPrice()

function countBasketPrice(arr){
    totalPrice = 0;
    arr.forEach(item => totalPrice += item.price);
    console.log(totalPrice);
}

countBasketPrice(basket)

//====================================================================


// создаем функцию конструктор для товара

function product2 (name2, category2, price2, discount2) {
    this.name2 = name2;
    this.category2 = category2;
    this.price2 = price2;
    this.discount2 = price2 - price2 * discount2 / 100
 }

const apple = new product2('яблоки', 'фрукты', 350, 10);
const peach = new product2('персики', 'фрукты', 735, 15)

console.log(apple)
console.log(peach)



