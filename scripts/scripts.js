let eyeImgg = document.querySelector("#eyeimg");
let passInput = document.querySelector(".pwordinput");




passInput.addEventListener('keyup', function(){
    let passValue = passInput.value.length;

    if(passValue == 0){
        eyeImgg.style.display = 'none';
    }else{
        eyeImgg.style.display = 'inline-block';
    }
})
     

eyeImgg.addEventListener('click' , function(){
    let passInputType = passInput.getAttribute('type');

    if(passInputType == 'password'){
        passInput.setAttribute('type', 'text');
        eyeImgg.setAttribute('src', '/imgs/visi.png')

    }else{
        passInput.setAttribute('type', 'password');
        eyeImgg.setAttribute('src', '/imgs/invisi.png')
    }
})