function q1(){
    console.log(4);
}

var isopen = false;
console.log(2);

function open_menu(){
    console.log(1);
    isopen = !isopen;
    if (isopen){
        document.getElementById("dropdown").style.display = "block";
    }else{
        document.getElementById("dropdown").style.display = "none";
    }
}
