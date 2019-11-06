function cariModus(arr) {
    // you can only write your code here!
    var obj = {}
    var modus = [0, 0]
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {

            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] > modus[1]) {
                modus = [key, obj[key]]
            } else if (obj[key] === modus[1]) {
                if (Number(key) < modus[0]) {
                    modus = [key, obj[key]]
                }
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