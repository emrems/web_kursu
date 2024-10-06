const baslik = document.querySelector("h1");//ilk h1 seçecek
//console.log(baslik.style)//bu şekilde baslık nesnesinin css içeriğini görüp manipüle edebiliriz
baslik.textContent = "Todo List";//içeriğini değiştirdik
baslik.style.color = "red";
baslik.style.borderBottom = "2px solid red";
baslik.style.fontSize = "80px";


const link = document.querySelector("a");
link.href = "https://www.sahibinden.com/ford-focus";
link.setAttribute("href","https://www.youtube.com/")//üstteki kodla aynı işi yapıyor 
link.target="_blank";