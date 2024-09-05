// // function foo() {
// //     console.log('Hello, world!')
// // }

// // foo()

// 'use strict'

// // let name = 'Nikita'

// // function foo () {
// //     let age = 27
// //     console.log('Привет', name)
// //     console.log('Мне', age)
// // }

// // foo()

// // age = 28
// // console.log(age)

// let name = 'Nikita'

// function foo() {
//     name = 'Arsen'
//     console.log('Hi', name)
// }

// console.log('Hi', name)
// foo()


const screenPrice = 10500
console.log(screenPrice)

const percentage = 15
console.log(percentage)

let titleProject = prompt('Название проекта?')
console.log(titleProject)

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue)

let responsive = confirm('Нужен респонсивный сайт?')
if (responsive = true) {
    console.log('Нужна респонсивность')
} else {
    console.log('Респонсивность не нужна')
}

let service1 = prompt('Какой сервис нужен?')
console.log(service1)

let servicePrice1 = prompt('Сколько это будет стоить?')
console.log(servicePrice1)

let service2 = prompt('Какой еще сервис нужен?')
console.log(service2)

let servicePrice2 = prompt('Cколько будет стоить этот второй сервис?')
console.log(servicePrice2)

let fullPrice = (+screenPrice + +servicePrice1 + +servicePrice2)
console.log(fullPrice)

let servicePercentPrice = ~~((fullPrice * percentage) / 100)
console.log(servicePercentPrice)

if (fullPrice >= 50000) {
    console.log('Вам скидка 10%'); 
} else if (50000 > fullPrice > 20000) {
    console.log('Вам скидка 5%');
} else { (20000 >= fullPrice > 0)
    console.log('Скидка не предусмотрена')
}



let getAllServicePrices = function() {
    allServicePrices = (screenPrice + +servicePrice1 + +servicePrice2);
    return allServicePrices;
}
getAllServicePrices()
console.log('Стоимость всех услуг', allServicePrices)



function getFullPrice() {
    fullPrice = (allServicePrices + screenPrice);
    return fullPrice;
}
getFullPrice()
console.log('Полная стоимость проекта', fullPrice)


function getTitle() {
    formattedTitle = titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
    return formattedTitle;
}
getTitle()
console.log('Название проекта', formattedTitle)

function getServicePercentPrices() {
    servicePercentPrice = fullPrice - servicePercentPrice
    return servicePercentPrice
}
getServicePercentPrices()
console.log('Стоимость за вычетом процента', servicePercentPrice)