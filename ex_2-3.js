/////////////////////////////////////////////////////////////////////////////
// ЗАДАНИЕ №2.                                                             //
// С этого урока начинаем работать с функционалом интернет-магазина.       //
// Предположим, есть сущность корзины. Нужно реализовать функционал        //
// подсчета стоимости корзины в зависимости от находящихся в ней товаров.  //
//                                                                         //
// ЗАДАНИЕ №3                                                              //
// Товары в корзине хранятся в массиве. Задачи:                            //
// a) Организовать такой массив для хранения товаров в корзине;            //
// b) Организовать функцию countBasketPrice,                               //
//    которая будет считать стоимость корзины.                             //
/////////////////////////////////////////////////////////////////////////////

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