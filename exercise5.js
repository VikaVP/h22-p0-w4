function ubahHuruf(kata) {
    // you can only write your code here!
    var string = "";
    for (var i = 0; i < kata.length; i++) {
        if (kata[i] >= 'A' && kata[i] <= 'Z') {
            string += String.fromCharCode(kata[i].charCodeAt(0) + 1)
        } else if (kata[i] >= 'a' && kata[i] <= 'z') {
            string += String.fromCharCode(kata[i].charCodeAt(0) + 1)
        } else {
            string += kata[i]
        }
    }
    return string
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu