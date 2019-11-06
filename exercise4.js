function cariModus(arr) {
    // you can only write your code here!
    var data = []
    // membuat table frekuensi
    for (var i = 0; i < arr.length; i++) {
        var flag = false
        for (var j = 0; j < data.length; j++) {
            if (arr[i] === data[j][0]) {
                data[j][1]++
                flag = true
            }

        }
        if (!flag) {
            data.push([arr[i], 1])
        }

    }

    if (data.length < 2) {
        return -1
    }
    var modus = data[0]
    for (var l = 0; l < data.length; l++) {
        if (data[l][1] > modus[1]) {
            modus = data[l]
        } else if (data[l][1] === modus[1]) {
            if (data[l][0] < modus[0]) {
                modus = data[l]
            }
        }
    }

    if (modus[1] < 2) {
        return -1
    }
    return modus[0]


}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1