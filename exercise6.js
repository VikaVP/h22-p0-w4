function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var angkaBaru = angka
    var hasil = ""
    for (var i = 1; i <= angkaBaru; i++) {
        if (angka % i === 0) {
            angkaBaru = angka / i
            hasil = i
        }
    }
    return (String(angkaBaru) + hasil).length

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2