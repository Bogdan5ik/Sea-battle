let bg = document.querySelectorAll('.bg');
let no = document.querySelectorAll('.no');

for(let i=0; i < bg.length; i++){
    bg[i].onclick = function(){
        no[i].style.display = "flex";
    }

    bg[2].onclick = function(){
        bg[2].style.background = "red";
    }

    bg[8].onclick = function(){
        bg[8].style.background = "red";
    }

    bg[25].onclick = function(){
        bg[25].style.background = "red";
    }
}