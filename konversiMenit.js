function konversiMenit(menit){
    var angka = menit;
    var jam = angka / 60;
    var jamBulat = parseInt(jam);
    var menit = angka % 60
    if(menit !== 0 && menit < 10){
        return jamBulat + ":" + "0" + menit;
    }
    else if( menit !== 0) {
        return jamBulat + ":" + menit
    }
    else{
        return jam + ':' + "00";
    }
    }

console.log(konversiMenit(33))
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00