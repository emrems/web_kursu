// function yazdır(){
//     console.log("merhaba");
// }

// yazdır(); 



const yazdır = ()=>{console.log('Merhaba')};
//yazdır();

/*
const yazdir= (firstname)=>{
    console.log("merhaba",firstname);

}

yazdir("emre");*/

//? eğer fonksiyonun içeriği tek satır ise kıvırcık parntez kullanmaya gerek yok
/*
const merhaba = ()=>"Merhaba";//bu şekilde tek satırlık kod içim {} kullanmaya gerek yok
console.log(merhaba());*/




//? eğer tek bir satırlık kod ve tek bir parametre alıyorsa "()" kullanmaya gerek yok
/*
const merhaba = ilkİsim=>console.log("merhaba",ilkİsim);
merhaba("Emre");*/

const küpAl = sayi=> sayi*sayi*sayi;// eğer bu şekilde tek bir satır kod ve return kullanıyorsak return yazmamıza gerek yok
console.log(küpAl(4));
