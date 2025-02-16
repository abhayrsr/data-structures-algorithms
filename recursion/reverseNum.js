//print the reverse from 1 to N

const reverseNum = (nums) => {
    if(nums === 0) return;
    console.log(nums);
    nums--;
    reverseNum(nums);
}

reverseNum(7);