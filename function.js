function shoutOut(){
 return "Halo Function!"
}

console.log(shoutOut());
console.log('\n');


function calculateMultiply(num1,num2){
    return num1 * num2
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

console.log('\n');

function processSentence(name, age, addres, hobby){
    return "nama saya " + name + ", umur saya " + age + " tahun" + ", alamat saya di " + addres + ", dan saya punya hobby yaitu " + hobby + "!"
}
var name = "rizky";
var age = 23;
var addres = "jl. wahid hasyom, jakarta";
var hobby = "belajar";

var fullSentence = processSentence(name, age, addres, hobby);

console.log(fullSentence);