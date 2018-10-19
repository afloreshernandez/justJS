let ans;
ans = calculator(23,"*",55);
console.log("ans = " +ans);


let divide =calculator(3,"/", 39);
console.log("ans = " +divide);

let power  =calculator(3,"^", 3);
console.log("ans = " +power);

let ans3 = calculator(3,"%", 11);
console.log("ans = " +ans);

ans = calculator(3,"-", 11);
console.log("ans = " +ans);

ans = calculator(3,"t", 11);
console.log("ans = " +ans);



function calculator(num1, op, num2) {
let ans;
    switch(op)

    {
        case "*":
            ans = num1 * num2;
            break;
        case "/":
            ans = num1 / num2;
            break;
        case "^":
            ans = Math.pow(num1,num2)
            break;
        case "%":
            ans = num1 % num2;
            break;
        case "-":
            ans = num1 - num2;
            break;
        case "t":
            ans =1/2* num1*num2;
            break;
    }
    return ans;

}