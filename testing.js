export function capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function reverseString(str) {
    return [...str].reverse().join('');
}

export class Calculator {
    add(x,y) {
        return x + y;
    }

    subtract(x,y) {
        return x - y;
    }

    multiply(x,y) {
        return x * y;
    }

    divide(x,y) {
        return x / y;
    }
}

let calc = new Calculator();

export function caesar(str, shift) {
    let arr = []
    for(let letter of str) {
        if(!checkIfLetter(letter)) {
            arr.push(letter);
            continue;
        }
        const charCode = letter.charCodeAt(0);

        if(charCode >= 97 && charCode + shift > 122) {
            arr.push(overflow(letter, shift, false));
        } 
        else if(charCode >= 65 && charCode + shift > 122) {
            arr.push(overflow(letter, shift, true));
        } else {
            const shiftedLetter = letter.charCodeAt(0) + shift;
            arr.push(String.fromCharCode(shiftedLetter));
        }
    }
    return arr.join("")
}

function overflow(char, shift, uppercase) {
    const UPPER = 90;
    const LOWER = 122;
    let diff;

    if(uppercase) {
        diff = UPPER - char.charCodeAt(0); 
        return String.fromCharCode(64 + shift - diff); // 1 lower than A because we shift into it
    } else {
        diff = LOWER - char.charCodeAt(0);
        return String.fromCharCode(96 + shift - diff);
    }
}

export function checkIfLetter(char) {
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) return true;
    else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) return true;
    else return false;
}

export function analyzeArray(arr) {
    if(arr.length === 0) return {};
    
    const total = arr.reduce((acc, cur) => {
        return (acc + cur) 
    });
    const average = total / arr.length

    let min = arr[0];
    let max = arr[0];
    for(let num of arr) {
        if(num < min) min = num;
        if(num > max) max = num;
    }
    
    return {
        "average" : average,
        "min" : min,
        "max" : max,
        "length" : arr.length
    }
}

analyzeArray([1,8,3,4,2,6])