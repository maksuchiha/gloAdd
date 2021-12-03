"use strict"

function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}

const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const quest = (item, count) => {
    count = 10
    const repeat = (item) => {
        if (item === true) {
            count = 10
            func = quest(randomInteger(1, 100))
            func(+prompt('Угадай число от 1 до 100'))
        } else {
            alert('Игра окончена')
        }
    }
    return (data) => {
        if (!isNumber(data) || data > 100 || data < 0) {
            func(+prompt('Введи число от 1 до 100!'))
        } else {
            count--
            if (count > 0) {
                if (item < data) {
                    func(+prompt(`Загаданное число меньше, осталось попыток: ${count}`))
                } else if (item > data && data !== 0) {
                    func(+prompt(`Загаданное число больше, осталось попыток: ${count}`))
                } else if (item === data) {
                    repeat(confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'))
                } else if (data === 0) {
                    alert('Игра окончена')
                }
            } else {
                repeat(confirm('Попытки закончились, хотите сыграть еще?'))
            }
        }
    }
}

let func = quest(randomInteger(1, 100))
func(+prompt('Угадай число от 1 до 100'))


