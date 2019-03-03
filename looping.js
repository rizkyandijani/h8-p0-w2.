/*var word1 = " - I love coding"
var word2 = " - I will become fullstack developer"
var number = 0
var number1 = 20
var judul1 = "LOOPING PERTAMA"
var judul2 = "LOOPING KEDUA"

console.log(judul1)
while(number < 20){
    number = number + 2
    console.log ( number + word1)
}
console.log(judul2)
while(number1 > 0){
    console.log(number1 + word2)
    number1 -= 2
}

console.log(judul1)
for( var num3 = 1 ; num3 <= 20 ; num3++ ){
    console.log(num3 + word1)
}
console.log(judul2)
for( var num4 = 20 ; num4 > 0 ; num4-- ){
    console.log(num4 + word2)
}

var odd = " GANJIL"
var even = " GENAP"

for( var num5 = 1 ; num5 <=100 ; num5++){
    if (num5 % 2 !== 0){
        console.log(num5 + odd)
    }
    else {
        console.log(num5 + even)
    }
}
*/
var num6 = 1
while(num6<=100){
    if(num6 % 3 === 0){
        console.log(num6 + " kelipatan 3")
    }
    else {
        console.log("")
    }
    num6 += 2
}
console.log( '\n' )
var num7 = 1
while(num7<=100){
    if(num7 % 6 === 0){
        console.log(num7 + " kelipatan 6")
    }
    else {
        console.log("")
    }
    num7 += 5
}
console.log('\n')
var num8 = 1
while(num8<=100){
    if(num8 % 10 === 0){
        console.log(num8 + " kelipatan 10")
    }
    else {
       console.log ("")
    }
    num8 += 9
}
