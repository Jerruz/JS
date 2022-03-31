//////////////////////////////////////////////////////////////////////////////////////////////
// ЗАДАНИЕ №6.                                                                              // 
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),  //
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. В         //
// зависимости от переданного значения выполнить одну из арифметических операций            //
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).     // 
//////////////////////////////////////////////////////////////////////////////////////////////


function mySum(a, b){
    return a + b
}

function myDivide(a, b){
    return a / b
}

function mySub(a, b){
    return a - b
}

function myProduct(a, b){
    return a * b
}

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "sum":
            console.log(mySum(arg1, arg2));
            break
        case "div":
            console.log(myDivide(arg1, arg2));
            break
        case "sub":
            console.log(mySub(arg1, arg2))
            break
        case "product":
            console.log(myProduct(arg1, arg2))
            break
    }
}

mathOperation(7, 3, 'sum')