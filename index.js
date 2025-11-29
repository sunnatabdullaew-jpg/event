const Key = document.querySelector('.key');
const space = document.querySelector('.space');
const backSpace = document.querySelector('.backspace')

window.addEventListener('keydown', (e) =>{
    if (e.keyCode == 8){
     backSpace.innerHTML = "backspace"
     Key.innerHTML = e.keyCode;
     space.innerHTML = "Not space"
    }else if (e.key == " "){
        space.innerHTML = "space"
        Key.innerHTML = e.keyCode;
        backSpace.innerHTML = "Not backspace"
    }else {
        space.innerHTML = "not space"
        Key.innerHTML = e.key;
        backSpace.innerHTML = "Not backspace"
    }
    console.log(e);
    
})