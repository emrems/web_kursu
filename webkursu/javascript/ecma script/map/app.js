// key value mantıgı ile calsır aslında arraylaerin bir alternatifidir.Arraylarda farkı key value mantığı ile çalışır

const map1 = new Map();

//SET ile map içine istenilen veri tipinden eleman konabilir

map1.set(49,"muş");
map1.set(34,"istanbul");
map1.set(41,"kocaeli");

//GET METHODU bize geri değer dondorur

const donen_deger = map1.get(34);
//console.log(donen_deger);


//? SIZE methodu
const size = map1.size;
//console.log(size);


//?DELETE

const silme = map1.delete(41);//silme işlemini yapar ve bize geriye boolen bir deger dondurur
//console.log(silme);

//? HAS  metodu map içinde olup olmadıgını sorgulayarak true ya da false deger doner
const varMı = map1.has(49);
//console.log(varMı);



//?MAP UZERİNDE FOR OF SEKLİNDE DONME
for(let[key,value] of map1){//for içindeki let[key,value] of map1 bu kullanım destruccting ten geliyor
    //console.log(key,value);
}


for(key of map1.keys()){// bu şekilde sadece keyleri alabilirim
    //console.log(key);
}


for(value of map1.values()){ //bu şekilde sadece valueleri alabilirim
    //console.log(value);
}



//MAPTEN ARRAYA ÇEVİRME

const array = Array.from(map1);//her bir key-value çifti için bir array oluşturur ve array içinde array oluşturur
//console.log(array);

array.forEach((eleman)=>{
    console.log(eleman);
    console.log(eleman[0])
})