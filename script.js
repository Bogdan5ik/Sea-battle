let bg = document.querySelectorAll('.bg');
let first = 4;
let second = 3;
let third = 2;
let fourth = 1;
let triClicks = 0;

function checkAllFound() {
    if (first <= 0 && second <= 0 && third <= 0 && fourth <= 0) {
        alert("Все корабли найдены!");
        document.querySelector(".container").style.display = "none";
    }
}

for(let i=0; i < bg.length; i++){
    bg[i].onclick = function(){
        let no = bg[i].querySelector('.no');
        let one = bg[i].querySelector('.one');
        let two = bg[i].querySelector('.two');
        let tri = bg[i].querySelector('.three'); 
        let four = bg[i].querySelector('.four');   

        if (no) no.style.display = "flex";
        if (one) one.style.display = "flex";
        if (two) two.style.display = "flex";
        if (tri) tri.style.display = "flex";
        if (four) four.style.display = "flex";

        
        if (one && getComputedStyle(one).display === 'flex') {
            first -= 1;
            document.querySelector('.first').innerHTML = first;
            if(first === 0){
                document.querySelector('.pervii').style.textDecoration = "line-through";
            }
            checkAllFound();
        }

        if (two && getComputedStyle(two).display === 'flex') {
            second -= 0.5;
            document.querySelector('.second').innerHTML = second;
            if(second === 0){
                document.querySelector('.vtoroi').style.textDecoration = "line-through";
            }
            checkAllFound();
        }

        if (tri && getComputedStyle(tri).display === 'flex') {
            triClicks++;

            if(triClicks === 3){
                third -= 1;
                if (third < 0) third = 0;
                document.querySelector('.third').innerHTML = third;
                if(third === 0){
                    document.querySelector('.tri').style.textDecoration = "line-through";
                }
                triClicks = 0;  // сбрасываем счётчик после уменьшения
            }
            checkAllFound();
        }

        if (four && getComputedStyle(four).display === 'flex') {
            fourth -= 0.25;
            document.querySelector('.fourth').innerHTML = fourth;
            if(fourth === 0){
                document.querySelector('.chetiri').style.textDecoration = "line-through";
            }
            checkAllFound();
        }
    }
}
