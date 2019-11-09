function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var res = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var newObj = {}
        newObj['penumpang'] = arrPenumpang[i][0]
        newObj['naikDari'] = arrPenumpang[i][1]
        newObj['tujuan'] = arrPenumpang[i][2]
        newObj['bayar'] = 2000

        var awal = 0
        var akhir = 0
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === newObj['naikDari']) {
                awal += j
            } else if (rute[j] === newObj['tujuan']) {
                akhir += j
            }
        }
        newObj['bayar'] = newObj['bayar'] * (akhir - awal)
        res.push(newObj)
    }
    return res
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]