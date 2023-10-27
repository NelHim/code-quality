function getFibonacciSequence(number) {
    let number1 = 0;
    let number2 = 1;

    let next = number1 + number2;
    const sequennce = []

    while(next <= number){
        sequennce.push(next)
        number1 = number2;
        number2 = next;
        next = number1 + number2;
    }
    return sequennce
}