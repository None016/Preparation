const tumbler = document.getElementById("theme1");

tumbler.addEventListener('click', function (){
    document.documentElement.setAttribute("theme", tumbler.checked ? 'dark': '');
})

const tumbler2 = document.getElementById("theme2");

tumbler2.addEventListener('click', function (){
    document.documentElement.setAttribute("theme", tumbler2.checked ? 'dark': '');
})



var isopen = false;

function open_menu(){
    isopen = !isopen;
    if (isopen){
        document.getElementById("dropdown").style.display = "block";
    }else{
        document.getElementById("dropdown").style.display = "none";
    }
}

