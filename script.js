let send = document.querySelector('.send');

let text = document.querySelector('h2');

let imga = document.querySelector('img');
 let i = document.querySelector('i');

 let like = document.querySelector('.like');

let a =0;

function showheart(){
    i.style.opacity = 1
    i.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";

    setTimeout(function () {
        i.style.transform = 'translate(-50%,-450%) scale(1) rotate(30deg)'
    }, 800)
    setTimeout(function () {
        i.style.opacity = 0
    }, 1000)
    setTimeout(function () {
        i.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
    }, 1200)
}

like.addEventListener('click',showheart)

imga.addEventListener('dblclick', showheart)

send.addEventListener('click',function(){

    if(a ===0){
    text.innerHTML = 'Friends'

    send.innerHTML = 'Remove Friend'
    a =1;

    }
    else{
        text.innerHTML = 'Stranger'

    send.innerHTML = 'Add friend'

      a= 0;
    }
    


})