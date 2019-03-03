function xo(code){
var o = 0;
var x = 0;
for(var i = 0; i < code.length ; i++){
    if(code[i] === 'x'){
        x++;
    }
    if(code[i] === 'o'){
        o++;
    }
}
return x !== o ? false : true; 
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));