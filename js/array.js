
a = [10,20,25,64,30,44,66,55,66,7,65]

// const square = (a)=>{
//     return a*a
// }

// k = a.map(square)
// console.log(k);

// a.map(ele=>{
//     console.log(ele);  
// })


// const checkEven = (a)=>{
//     if(a%2 ==0)
//     {
//         return a;
//     }
// }

// k = a.filter(checkEven)
// k = a.filter((a)=>a%2==0)
// k = a.map((a)=>a*a)
// console.log(k);

// k = a.map((a)=>Math.sqrt(a))
// l = a.filter((a)=>Number.isInteger(Math.sqrt(a)))
// console.log(l);

// a = 10.55

// function sum(x,y){
//     //console.log(x,y);  
//     return x+y
// }

// k = a.reduce(sum)
// console.log(k);

// 3+5=28
// 4+6=40
// 5+7=74

// k = a.reduce((x,y)=>x>y?x:y)
// console.log(k);


var max = 0
var smax = 0

a.map(ele=>{
    if(ele>max)
    {
        smax  = max
        max = ele
    }
    else if(ele>smax && ele !=max){
        smax = ele
    }
})

console.log(max);
console.log(smax);
