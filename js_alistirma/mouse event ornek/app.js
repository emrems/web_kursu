var ul = document.querySelectorAll('li');

ul.forEach(function(li) {
    let isMouseover = false;
    li.addEventListener("mouseover", function() {
        isMouseover = !isMouseover;
        li.style.color = isMouseover ? "red" : "black";
    });
});
