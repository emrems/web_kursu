// İNPUT EVENTS

//focus
//blur:
//copy
//paste
//cut
//select
// key eventleri de kullanılabilir

const todogiriniz = document.querySelector("#todoName");//input butonunu seçiyoruz
// todogiriniz.addEventListener("focus",run);//innputa girince çalışır
// todogiriniz.addEventListener("blur",run);//innputtan çıkınca çalışır
// todogiriniz.addEventListener("copy",run); // inputtaki veriyi kopyalarsan çalışır
// todogiriniz.addEventListener("paste",run);// inputa veriyi yapıştırısan çalışır
// todogiriniz.addEventListener("cut",run);// inputtan veriyi kesersen çalışır
// todogiriniz.addEventListener("select",run);//inputtaki verinin bir kısmını seçip bıraktığın an çalışır
function run(e){
    console.log(e.type);// o anki çalışan eventin türünü yazdırıyoruz

}