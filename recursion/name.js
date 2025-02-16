//print name 5 times

let count = 0;
function printName(param){
    if(count === 5) return;
    console.log("My name is ", param);
    count++;
    printName(param);
}

printName("Abhay");