let logo = document.querySelectorAll(".logo");
for(let i = 0; i < logo.length; i++) {
        logo[i].addEventListener("click", function(){
            location.href = "/index.html";
    });
}

let user = document.querySelectorAll(".user");
for(let i = 0; i < user.length; i++) {
        user[i].addEventListener("click", function(){
            location.href = ".login.html";
    });
}



