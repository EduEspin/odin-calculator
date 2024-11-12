function addNum(a, b) {
    return a + b
}

function subtractNum(a, b){
    return a - b
}

function multiplyNum(a, b){
    return a * b
}

function divideNum(a, b){
    return a / b
}

function operate(a, b, c){
    if (a === "+") {
        return addNum(b, c)
    }
    
    if (a === "-") {
        return subtractNum(b, c)
    }

    if (a === "*") {
        return multiplyNum(b, c)
    }

    if (a === "/") {
        return divideNum(b, c)
    }
}
