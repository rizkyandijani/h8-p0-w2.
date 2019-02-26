var name = "kiki";
var classPlayer = "";

if(name === "" && classPlayer === '') {
    console.log('nama harus diisi');
}
  else if( name !== "" && classPlayer == "" ){
    console.log('Halo ' + name + ',Pilih peran mu untuk memulai game!' );
  }
  else if( name !== "" && classPlayer === "Ksatria"){
    console.log('Selamat datang di Dunia Proxytia, ' + name);
    console.log('Halo ' + classPlayer + " " + name + ', kamu dapat menyerang dengan senjatamu!');
  }
  else if( name !== "" && classPlayer === "Tabib"){
    console.log('Selamat datang di Dunia Proxytia, ' + name);
    console.log('Halo ' + classPlayer + " " + name + ', kamu akan membantu temanmu yang terluka.');
  }
  else if( name !== "" && classPlayer === "Penyihir"){
    console.log('Selamat datang di Dunia Proxytia, ' + name);
    console.log('Halo ' + classPlayer + " " + name + ', ciptakan keajaiban yang membantu kemenanganmu!');
  }
  else if ( name ==="" && classPlayer !== "") {
    console.log('halo player, silahkan isi namamu terlebih dahulu sebelum memilih peran');
  }
  else {
    console.log('halo ' + name + ' ,kelas yang kamu pilih tidak terdaftar! silahkan pilih antara \'Ksatria\' , \'Tabib\' , atau \'penyihir\'!');
  }