function outer(){
    let sum = 0;

    return function inner(){
        sum++;
        console.log(sum);
    }
}

const counter = outer();

counter();
counter();
counter();
counter();