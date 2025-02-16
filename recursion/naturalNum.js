//print numbers from 1 to 6
let num = 1;
const printNumber = (num) => {
    if(num === 7) return;

    console.log(num);
    num++;
    printNumber(num);
}

printNumber(num);