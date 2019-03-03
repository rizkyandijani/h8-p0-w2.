
function balikKata(word) {
    if (word === "") 
      return "";
    
    else
  return balikKata(word.substr(1)) + word.charAt(0);
}

console.log(balikKata("Hello world and Coders"));
console.log(balikKata('John Doe')); 
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));