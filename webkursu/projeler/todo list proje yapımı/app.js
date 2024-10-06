// tüm elementleri seçelim 

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector( ".list-group" );
const firstCardBody = document.querySelectorAll( ".card-body" )[0];
const secondCardBody =  document.querySelectorAll( ".card-body" )[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch"); 
let todos = [];










function deleteTodoArayuz(e){
    // benim buradaki amacım li etiketini yakalayıp ekrandan silmek

    if(e.target.className==="fa fa-remove"){// secondCardBody'e click yapılınca bu fonksiyona gelecek i etiketi "fa fa-remove" ise
        const todo = e.target.parentElement.parentElement;//ilk parentı aldım "a" etiketini elde ettim ikinci parentı aldım "li" etiketini elde ettim     
        todo.remove();//yakaladığım li etiketini sildim
        showAlert("success","todo başarılı bir şekilde silindi")//başarı mesajı verildi
        
        // storageden silmek
        deleteTodoStorage(todo.textContent);
    }
}


















function deleteTodoStorage(removeName){
    kontrol_et();//güncel todo listesini aldım
    todos.forEach(function(todor,index){
        if(removeName===todor){
            todos.splice(index,1);
        }
    });
    localStorage.setItem('todos',JSON.stringify(todos));//silinmeden sonra geri todaoları geri ekledim
  
}















function addTodoAraYuz(newtodo){
    /*
    <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>*/

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newtodo;

    const a = document.createElement('a');
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";//bir todo eklendikten sonra yazı silinsin ve ilk haline gelsin
}


















function addTodoStorage(newtodo){
    kontrol_et();
    todos.push(newtodo);// bu kısma geldiğinde zaten kontrol edildi ya boş bir şekilde ya da dolu biz var olan todos  değişkenimize yeni gelen verileri ekleyeceğiz
    localStorage.setItem("todos", JSON.stringify(todos)); //en son haldeki todos arrayindeki değerleri localStorage'a dizi olarak at
}











function runEvents(){
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);//sayfa yüklendiğinde  pageLoad fonksiyonunu çalıştır
    secondCardBody.addEventListener( "click", deleteTodoArayuz);// eğer secondCardBody'nin kısmına click yapılırsa deleteTodoArayuz fonksiyonuna git
    clearButton.addEventListener("click",allTodosEveywere);
    filterInput.addEventListener("keyup",filter);//input kısmında klavyeden ne girilirse tetiklenecek
}

runEvents();

function filter(e){
    const filterValue = e.target.value.toLowerCase().trim()//inputa girilen veriyi aldık ve küçük harfe çevirdik ve boşlukları aldık  karşılaşrıma yaparken sıkıntı olmasın diye
    const karsilastirilacak_li = document.querySelectorAll(".list-group-item");//var olan li etiketlerine sahip olanları aldık
    if(karsilastirilacak_li.length<=0){
        showAlert("danger","aranacak todo yok!")
    }else{
        karsilastirilacak_li.forEach(function(eleman){
            if(eleman.textContent.toLowerCase().trim().includes(filterValue)){//eleman li etiketleridir bu yuzden ilk once texContentini almak lazım ardında kucuk harfe çevir ve aranacak kelime bu elemanı içeriyormu dedik aslında includes içinde varmı diye sorguluyor
                eleman.setAttribute("style","display:block");//eğer aranan kelimeyi içeriyorsa display özellipiğni block yaparak ekranda gösterilmessini sağladık display özelliği css ile alakalıdır yani css ile oynadık
    
            }
            else{
                eleman.setAttribute("style","display:none !important");//içermiyorsa display özelliğini none yaparsan ekranda gösterilmez !important ise bootstrapı engellemek için kulladuk
    

            }
        });
    }
    


};













function allTodosEveywere(){
    // arayüzden silme
    const todoListesi = document.querySelectorAll(".list-group-item");//var olan bütün li etiketlerini yakaladık
    if(todoListesi.length>0){//eğer en az bir li varsa 
        todoListesi.forEach(function(eleman){
            eleman.remove();//her elemanı sil
        });


    }else{
        showAlert("danger","silme işlemi için en az bir todo gerekmektedir");
    }


    // storageden silme
    todos = [];//ana todos listesini tamamen boşalttık
    localStorage.setItem("todos",JSON.stringify(todos));//boş olan todos listesini tekrar storage dizi olarak yerleştirdik 
    showAlert("success","başarılı bir şekilde silindi");

}











function pageLoaded(){
    kontrol_et();//ilk once todo var mı diye kontrol et ve en güncel todo listesini al
    todos.forEach(function(todo){
        addTodoAraYuz(todo);//her bir todoyu arayüzde göstermek için addTodoAraYuz fonksiyonu kullan ve bunu her bir todo için yap 
    });
}

















function addTodo(e){
    const inputText = addInput.value.trim();//kullanıcının "todo Giriniz " kısmına yazacağı veriyi inputText içine attık trim ise sağ ve sol boşlukları kes demek

    if(inputText==null || inputText==""){
        showAlert("warning","lütfen boş bırakmayınız");
    }else{
        
    //arayüze ekleme
    addTodoAraYuz(inputText);
    
    //storage ekleme
    addTodoStorage(inputText);
    showAlert("success","todo başarılı bir şekilde eklendi");
    }

    e.preventDefault();//farklı bir sayfaya yönlendirmesini engelledik
}
















function kontrol_et(){

    if(localStorage.getItem("todos") === null){// === kullanmamızın sebebi hem değeri hem de türlerini karşılaştırmasıdır
        todos = [];// eğer önceden oluşturlmuş todos yoksa boş bir todos dizisi oluştur
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));// eğer boş değilse yani önceden eklenmiş todoslar varsa onları dizi olarak al ve todos değişkenine at

    }

}













function showAlert(type,message){
    /*
    <div class="alert alert-warning" role="alert">
    This is a warning alert—check it out!
  </div>*/

  let div = document.createElement("div");
  div.className = "alert alert-"+type;//burası danger succses falan olabilir burası dinamik olmalı bunun için fonksiyondan gelen type parametresini ekldik
  div.textContent = message;
  firstCardBody.appendChild(div);//yaptığımız divi  cardbody'e ekledik

  setTimeout(function(){
    div.remove();//2.5 saniye sonra eklediğimiz divi silecek

  },2500);

}
