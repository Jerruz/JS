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