Math.round
let temp = Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Цельсия: ${temp}\nФаренгейт: ${Math.round((9 / 5) * temp + 32)}`)