//CALLBACK 
//pek kullanılan bir yöntem değildir ama mantgını bilmek lazım
//callback bir fonksiyonu bir fonksiyona parametre geçirerek asenkron yapıyı senkron yapıya çeviririz
function getName(callback){//callback=getSurname olmuş oldu
    setTimeout(()=>{
        let name="emre";//web servisinden geldiğini düşünellm
       
        callback(name);
    },1000);
}

function getSurname(name){
    setTimeout(()=>{
        let surname = "almamış"//web servisinden geldiğini düşünelim
        console.log(name,surname);
    },500);
}

getName(getSurname);


//ilk önce egteSurname metodu çalışacak çıktı evrecek ardından getName çalışacak