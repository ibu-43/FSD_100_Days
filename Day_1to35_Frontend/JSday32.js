// ================= FUNCTIONS =================

// 1. Reverse
function reverse(n){
    let r=0;
    while(n>0){
        r = (r*10) + (n%10);
        n = Math.floor(n/10);
    }
    return r;
}

// 2. Factorial
function factorial(n){
    let f=1;
    for(let i=1;i<=n;i++) f*=i;
    return f;
}

// 3. Strong Number
function strongNumber(n){
    let x=n,s=0;
    while(x>0){
        s += factorial(x%10);
        x = Math.floor(x/10);
    }
    return s==n;
}

// 4. Atomic (Prime logic)
function atomicNumber(n){
    if(n<=1) return false;
    for(let i=2;i<=n/2;i++){
        if(n%i==0) return false;
    }
    return true;
}

// 5. Automorphic
function automorphic(n){
    let sq = n*n;
    while(n>0){
        if(n%10 != sq%10) return false;
        n = Math.floor(n/10);
        sq = Math.floor(sq/10);
    }
    return true;
}

// 6. Autobiographic
function autobiographic(n){
    let str = n.toString();
    for(let i=0;i<str.length;i++){
        let count=0;
        for(let j=0;j<str.length;j++){
            if(Number(str[j])==i) count++;
        }
        if(count != Number(str[i])) return false;
    }
    return true;
}

// 7. HCF
function hcf(a,b){
    while(b!=0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 8. LCM
function lcm(a,b){
    return (a*b)/hcf(a,b);
}

// 9. Factors
function factors(n){
    for(let i=1;i<=n;i++){
        if(n%i==0) console.log(i);
    }
}

// 10. Least Factor
function leastFactor(n){
    for(let i=2;i<=n;i++){
        if(n%i==0) return i;
    }
}

// 11. Count Factors
function countFactor(n){
    let c=0;
    for(let i=1;i<=n;i++){
        if(n%i==0) c++;
    }
    return c;
}

// 12. Sum of Factors
function sumFactor(n){
    let s=0;
    for(let i=1;i<=n;i++){
        if(n%i==0) s+=i;
    }
    return s;
}

// 13. Perfect Number
function perfectNumber(n){
    let s=0;
    for(let i=1;i<n;i++){
        if(n%i==0) s+=i;
    }
    return s==n;
}

// 14. Sunny Number
function sunnyNumber(n){
    let x = Math.sqrt(n+1);
    return x == Math.floor(x);
}

// 15. Perfect Square & Cube
function isSquare(n){
    let x = Math.sqrt(n);
    return x == Math.floor(x);
}

function isCube(n){
    let x = Math.cbrt(n);
    return x == Math.floor(x);
}

// 16. Count Digits
function countDigits(n){
    let c=0;
    while(n>0){
        c++;
        n = Math.floor(n/10);
    }
    return c;
}

// 17. Sum Digits
function sumDigits(n){
    let s=0;
    while(n>0){
        s += n%10;
        n = Math.floor(n/10);
    }
    return s;
}

// 18. Sum till single digit
function singleDigit(n){
    while(n>=10){
        n = sumDigits(n);
    }
    return n;
}

// 19. Unit digit of square
function unitDigitSquare(n){
    return (n*n)%10;
}

// 20. Abundant Number
function abundant(n){
    let s=0;
    for(let i=1;i<n;i++){
        if(n%i==0) s+=i;
    }
    return s>n;
}

// 21. Decimal to Binary
function decToBin(n){
    return n.toString(2);
}

// 22. Binary Addition
function binaryAdd(a,b){
    return (parseInt(a,2) + parseInt(b,2)).toString(2);
}

// 23. Evil Number
function evilNumber(n){
    let bin = n.toString(2);
    let count = 0;
    for(let i of bin){
        if(i=='1') count++;
    }
    return count%2==0;
}

// 24. Binary to Decimal
function binToDec(n){
    return parseInt(n,2);
}

// 25. Prime Number
function prime(n){
    if(n<=1) return false;
    for(let i=2;i<=n/2;i++){
        if(n%i==0) return false;
    }
    return true;
}


// ================= MAIN =================

console.log("Reverse:", reverse(1234));
console.log("Factorial:", factorial(5));
console.log("Strong:", strongNumber(145));
console.log("Atomic:", atomicNumber(7));
console.log("Automorphic:", automorphic(25));
console.log("Autobiographic:", autobiographic(1210));
console.log("LCM:", lcm(24,8));
console.log("HCF:", hcf(24,8));
console.log("Factors:");
factors(24);
console.log("Least Factor:", leastFactor(23));
console.log("Count Factors:", countFactor(24));
console.log("Sum Factors:", sumFactor(24));
console.log("Perfect:", perfectNumber(6));
console.log("Sunny:", sunnyNumber(8));
console.log("Square:", isSquare(16));
console.log("Cube:", isCube(27));
console.log("Digits:", countDigits(1234));
console.log("Sum Digits:", sumDigits(1234));
console.log("Single Digit:", singleDigit(987));
console.log("Unit Digit Square:", unitDigitSquare(12));
console.log("Abundant:", abundant(12));
console.log("Decimal to Binary:", decToBin(10));
console.log("Binary Add:", binaryAdd("101","11"));
console.log("Binary to Decimal:", binToDec("1010"));
console.log("Prime:", prime(7));