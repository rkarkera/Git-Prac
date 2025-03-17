let arr = [-9,-7,-6,-5,0,5,3,2];
let op = [-5,5];

let si = 0;
let ei = arr.length-1;

while(si < ei) {
    let ans = arr[si] + arr[ei];
    if(ans == 0) {
        console.log([arr[si],arr[ei]])
    } else if(ans > 0) {
        ei++;
    } else {
        si--;
    }
}