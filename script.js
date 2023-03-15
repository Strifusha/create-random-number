//Вывести в консоль рандомное число от 0 до 50

let getRandomNum = () =>{
    return Math.floor(Math.random() * (50 - 0));
}

let result = getRandomNum();
console.log(result);