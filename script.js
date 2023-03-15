//Вывести в консоль рандомное число от 0 до 50

let getRandomNum = () =>{
    let min = Math.ceil(0);
    let max = Math.floor(50);
    return Math.floor(Math.random() * (max - min));
}

let result = getRandomNum();
console.log(result);