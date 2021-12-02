"use strict"

const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const quest = (item) => {
    return (data) => {
        if (item < data) {
            func(+prompt('Загаданное число меньше'))
        } else if (item > data && data !== 0) {
            func(+prompt('Загаданное число больше'))
        } else if (item === data) {
            alert('Поздравляю, Вы угадали!!!')
        } else if (data === 0) {
            alert('Игра окончена')
        } else if (!isNumber(data)) {
            func(+prompt('Введи число'))
        }
    }
}

const func = quest(37)

func(+prompt('Угадай число от 1 до 100'))

