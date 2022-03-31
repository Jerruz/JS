//////////////////////////////////////////////// 
// ЗАДАНИЕ №7.                                //
// Сравнить null и 0. Объяснить результат.    //
//////////////////////////////////////////////// 

console.log(null == 0)
console.log(null != 0)
console.log(null > 0)
console.log(null < 0)
console.log(null + 0) // при сложении, наверно, null был приведен к числовому типу
console.log(null / 0)
console.log(null * 0)
console.log(0 / null)

// null указывает на несуществующий объект — это просто специальное значение для понятия «ничто».
// 0 - это числовой тип
// Т.е. null и 0 - это разные типы данных