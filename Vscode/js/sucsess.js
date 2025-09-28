let home = document.querySelectorAll(".Sucsess-btn");
for(let i = 0; i < home.length; i++) {
        home[i].addEventListener("click", function(){
            location.href = "/index.html";
    });
}