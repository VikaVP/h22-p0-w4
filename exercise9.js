function checkAB(num) {
    // you can only write your code here!
    var indexA = 0
    var indexB = 0
    for (var a = 0; a < num.length; a++) {
        if (num[a] === 'a') {
            indexA = a

        } else if (num[a] === 'b') {
            indexB = a
        }
    }
    if (indexA - indexB === 4 || indexB - indexA === 4) {
        return true
    } else {
        return false
    }

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false