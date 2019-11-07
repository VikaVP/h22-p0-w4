function urutkanAbjad(str) {
    // you can only write your code here!

    var temp = []
    for (var i = 0; i < str.length; i++) {
        temp.push(str[i])
    }
    var res = ''
    var sorted = bubble(temp)
    for (let i = 0; i < sorted.length; i++) {
        res += sorted[i]
    }
    return res
}

function bubble(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var n = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = n
            }
        }
    }
    return arr
}



// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'