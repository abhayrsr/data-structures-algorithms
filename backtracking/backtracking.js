// print from 1 to N using N as parameter

const printNumber = (num) => {
    if(num === 0) return;
    printNumber(num-1);
    console.log(num)
}

printNumber(7)