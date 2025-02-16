// print from 1 to N using N as parameter

const printNumber = (num) => {
    if(num === 0) return;
    printNumber(num-1);
    console.log(num)
}

printNumber(7)

//print from N to 1 
let count = 1;
const reversePrint = (count, num) => {
    if(count > num) return;
    reversePrint(count + 1, num);
    console.log(count);

}
reversePrint(count, 3);