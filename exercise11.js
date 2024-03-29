function shoppingTime(memberId, money) {
    // you can only write your code here!
    var arr = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]
    if (memberId === '' || memberId === undefined) {
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    } else if (money < 50000) {
        return `Mohon maaf, uang tidak cukup`
    } else {
        var sisa = 0
        var total = 0
        var item = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][1] <= money) {
                total += arr[i][1]
                item.push(arr[i][0])
            }
        }
        sisa = money - total
        // console.log(sisa);
    }
    var objNew = {}
    objNew.memberId = memberId
    objNew.money = money
    objNew.listPurchased = item
    objNew.changeMoney = sisa
    return objNew
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja