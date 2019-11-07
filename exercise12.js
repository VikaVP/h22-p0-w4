function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    // buat array penampung
    var temp = []
    // jika panjang array shopper kosong return []
    if (shoppers.length === 0) {
        return temp
    }
    // looping listbarang,
    for (var i = 0; i < listBarang.length; i++) {
        // value listBarang[i]
        // i++

        // buat objek penampung
        var objNew = {}
        // buat isi objek sementara
        objNew.product = listBarang[i][0]
        objNew.shoppers = []

        // looping shopper
        var qty = 0
        for (let j = 0; j < shoppers.length; j++) {
            // value shoppers[j]
            // j++

            // buat syarat jika produk sama dengan di objek dan qty <= qty listBarang
            if (shoppers[j].product === objNew.product && shoppers[j].amount <= listBarang[i][2]) {
                qty += shoppers[j].amount
                objNew.shoppers.push(shoppers[j].name)
            }
        }
        // kondisi jika qty nya <= qty di listbarang
        if (qty <= listBarang[i][2]) {
            // masukan leftover ke objek
            objNew.LeftOver = listBarang[i][2] - qty
            // buat kondisi untuk menentukan profit
            if (objNew.product === listBarang[0][0]) {
                objNew.totalProfit = qty * listBarang[0][1]
            } else if (objNew.product === listBarang[1][0]) {
                objNew.totalProfit = qty * listBarang[1][1]
            } else {
                objNew.totalProfit = qty * listBarang[2][1]
            }
        } else {
            objNew.leftOver = listBarang[i][2]
            objNew.totalProfit = 0
        }
        temp.push(objNew)
    }
    return temp
}

// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]