const name = 'Copia'
const age = 41

if(age > 0 && age <= 12) {
    console.log(`${name} on laps`)
} else if (age > 12 && age < 18) {
    console.log(`${name} on nooruk`)
} else {
    console.log(`${name} on täiskasvanu`)
}

let id = 100

if(id === 100) {
    console.log('Ok')
} else {
    console.log('Not')
}

console.log(id === 100 ? 'Ok': 'Not')

const color = 'red'

switch (color) {
    case 'red':
        //if it's not red, then it doesn't dispay anything
        console.log("It's red!")
}

switch (color) {
    case 'red':
        console.log('Stop!')
        break;
    case 'yellow':
        console.log('Attention!')
        break;
    case 'green':
        console.log('Go!')
        break;
    default:
        console.log('Error!')
}