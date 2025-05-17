let bg = document.querySelectorAll('.bg');
let no = document.querySelectorAll('.no');
let win = 0;

let ships = {
    2: "red", 8: "red", 25: "red", 60: "red",
    72: "blue", 73: "blue", 76: "yellow", 77: "yellow", 78: "yellow",
    96: "green", 97: "green", 98: "green", 99: "green",
    21: "blue", 22: "blue", 44: "blue", 45: "blue",
    50: "yellow", 51: "yellow", 52: "yellow"
};

for(let i=0; i < bg.length; i++){
    bg[i].onclick = function(){
        no[i].style.display = "flex";
        
        if(ships[i]){
            bg[i].style.background = ships[i];
            win++;
            no[i].style.display = "none";


            if(win === 21){
                alert("Ты нашёл все корабли!")
            }
        }
    }
}