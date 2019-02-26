var tanggal = 30
var bulan = 1
var tahun = 1900

switch ( tanggal >= 1 && tanggal <= 31){
case true :
        switch( tahun >= 1900 && tahun <= 2200 ){
        case true :
                switch (bulan){
                case 1:                
                console.log(tanggal + " " + "januari" + " " + tahun);
                break;
                case 2 :
                console.log(tanggal + " " + "februari" + " " + tahun);
                break;
                case 3 :
                console.log(tanggal + " " + "maret" + " " + tahun);
                break;
                case 4 :
                console.log(tanggal + " " + "april" + " " + tahun);
                break;
                case 5 :
                console.log(tanggal + " " + "mei" + " " + tahun);
                break;
                case 6 :
                console.log(tanggal + " " + "juni" + " " + tahun);
                break;
                case 7 :
                console.log(tanggal + " " + "juli" + " " + tahun);
                break;
                case 8 :
                console.log(tanggal + " " + "agustus" + " " + tahun);
                break;
                case 9 :
                console.log(tanggal + " " + "september" + " " + tahun);
                break;
                case 10 :
                console.log(tanggal + " " + "october" + " " + tahun);
                break;
                case 11 :
                console.log(tanggal + " " + "november" + " " + tahun);
                break;
                case 12 :
                console.log(tanggal + " " + "desember" + " " + tahun);
                break;
                default:
                console.log("bulan tidak valid");
                }
        break;
        default:
        console.log("tahun di luar database");
        }
break;
default:
console.log("tanggal tidak valid");
}
        