var rows1 = 5

for ( var bintang = 0; bintang<rows1; bintang++, console.log("ini iterasi ke" + bintang)){
    console.log("*");
}
console.log("\n")

var i = 0
output = ""
while (i<5){
  var inside =""
  var j = 0
  while (j<5){
    inside += "*"
    j++
    //console.log (inside + " ini iterasi ke " + j)
    }
    output += inside + '\n'
  i ++
  //console.log(output + " ini iterasi ke " + i)
}
console.log(output)

console.log('\n')

var rows3 = 5
var i = 1
output =""
while (i<=rows3){
    var inside =""
    var j = 0
    while(j < i){
        inside += "*"
        j ++
    }
    output += inside + '\n'
    i ++
    //console.log(output + ' ini iterasi ke ' + j)
}
console.log(output)  

