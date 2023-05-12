var num = parseInt(prompt("enter a number"));

var isprime;

for(var i=2; i<=num; i++){
    isprime = 1;
    for(var j=2; j<=i/2; j++){
        if(i%j == 0){
            isprime=0;
            break
        }
    }
    if(isprime == 1){
        console.log(i)
    }
}