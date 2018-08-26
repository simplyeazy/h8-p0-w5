function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let nama = '';
    let dari = '';
    let ke = '';
    let arrObj = [];
    function getDistance(dari, ke) {
        let distance = 0;
        let flag = false;
        for (let j = 0; j < rute.length; j++) {
            if (flag === true) {
                distance++;
            }
            if (rute[j] === dari) {
                flag = true;
            }
            if (rute[j] === ke) {
                flag = false;
            }
        }
        return distance;
    }
    //your code here
    for (let i = 0; i < arrPenumpang.length; i++) {
        let Objek = {};
        nama = arrPenumpang[i][0];
        dari = arrPenumpang[i][1];
        ke = arrPenumpang[i][2];
        // console.log(dari);
        // console.log(ke);
        // console.log(getDistance(dari, ke));
        Objek.penumpang = arrPenumpang[i][0];
        Objek.naikDari = arrPenumpang[i][1];
        Objek.tujuan = arrPenumpang[i][2];
        Objek.bayar = (getDistance(dari, ke) * 2000);
        // console.log(Objek);
        arrObj.push(Objek);
    }
    return arrObj;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]