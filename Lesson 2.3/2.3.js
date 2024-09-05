// // let x = 11
// // if (x > 10) {
// //     console.log('Perfect!');
// // } else {
// //     console.log('Nah');
// // }

// // let a = 5;
// // let b = '10'
// // let res = a + +b


// // console.log(a.toString())

// // console.log(res);


// // alert('Hello!')

// let age = prompt('Укажите ваш возраст')
// let a = 10
// let res = +age + a

// console.log(res)



// const titleProject = 'Оценка Стоимости'
// console.log(typeof titleProject)

// const screensValue = 'шаблонные, с уникальным дизайном, с анимациями'
// console.log(typeof screensValue)
// console.log(screensValue)

const screenPrice = 10500
console.log(screenPrice)

const percentage = 15
console.log(percentage)

// const fullPrice = 180000
// console.log(typeof fullPrice)

// const responsive = true
// console.log(typeof responsive)

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