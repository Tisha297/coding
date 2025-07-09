function primes(){
    let x=0;
    const a=parseInt(prompt('enter a number:'));
    for(let i=2;i<a;i++){
        if(a%i==0){
            x++;
        }
    }
    if(x==0){
        console.log("it is prime")
    }
    else{
        console.log("not a prime")
    }
}

function fibonacci(){
const number=parseInt(prompt('Enter the number of terms:'));
let n1=0,n2=1,nextTerm;

console.log('Fibonacci series');
for(let i=1;i<=number;i++){
    console.log(n1);
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}
}

function star(){
let a=5;
for(let i=1;i<=a;i++){
    let str="*";
   console.log(str.repeat(i)); 
}
}
 
function rev(){
const num=parseInt(prompt('Enter some numbers:'));
let n=num, reverse=0, remainder;
    while(n>0){
        remainder=n%10;
        reverse= reverse*10 + remainder;
        n= Math.floor(n/10);
    }
   console.log(reverse);
}
 
function factorial(){
    const number=parseInt(prompt('enter a positive number:'));
    if(number>=0){
        let fact=1;
        for( let i=1;i<=number;i++){
            fact *=i;
        }
       document.getElementById("output").innerHTML="result of factorial is:"+fact
    }
}


