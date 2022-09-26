console.log('for loop')
for (let number = 0; number < 10; number ++) {
    if (number == 5) {
        continue
    }
    console.log(number)
}

console.log('while loop')
let number1 = 1;
while (number1 < 11) {
    console.log(number1)
    number1 ++
}

console.log('do-while loop')
let number2 = 11;
do {
    console.log(number2)
    number2 ++
} while (number2 < 10)