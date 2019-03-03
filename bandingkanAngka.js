function bandingkanAngka(angka1,angka2){
    if(angka2>angka1){
        return true;
    }
    else if(angka2<angka1) {
        return false;
    }
    else
    return bandingkanAngka = -1;
}
var angka1 = 2;
var angka2 = 3;
var perbandingan = bandingkanAngka(angka1,angka2);

console.log(perbandingan);