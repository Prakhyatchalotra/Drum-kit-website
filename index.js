for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let button = this.innerHTML;
        makeSound(button);
        whenPressed(button);
    })
}

document.addEventListener("keypress", function(event) {
    let button = event.key;
    makeSound(button);
    whenPressed(button);
})

function makeSound(button){
    if(button == "w"){
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    } 
    else if(button == "a"){
        let audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(button == "s"){
        let audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(button == "d"){
        let audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if(button == "j"){
        let audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(button == "k"){
        let audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(button == "l"){
        let audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
}

function whenPressed(key){
    let buttonPressed = "." + key;
    document.querySelector(buttonPressed).classList.add("pressed");
    setTimeout(function() {
        document.querySelector(buttonPressed).classList.remove("pressed");
    }, 100);
}