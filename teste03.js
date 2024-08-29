//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//Note: a and b are not ordered!

function somaIntervalo(a, b) {
    if (a === b) {
        return a; 
    }
    
    const menor = Math.min(a, b);
    const maior = Math.max(a, b);
    
    
    let soma = 0;
    for (let i = menor; i <= maior; i++) {
        soma += i;
    }
    
    return soma;
}
