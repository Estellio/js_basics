function greeting(name) {
    return `Hello, ${name}`
}
let greet = greeting('Pirko')
console.log(greet)

const square = function(number) {
    return number * number
}
let result = square(3)
console.log(result)

(function () {
    console.log('function is running')
})();

(function (string) {
    console.log(`Hello ${string}`)
})(`Pirko`);

const todo = {
    function () {
        console.log('add todo')
    }
}