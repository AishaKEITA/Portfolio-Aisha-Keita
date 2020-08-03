let images = document.getElementById("image");
images.addEventListener("mousemove",

    function (event) {
        event.target.style.color = "red";

        setTimeout(function () {
            event.target.style.color = "grey";
        }, 500);
    }, false);

//const alltext = document.getElementById("image");

// var userSelection = document.getElementsByClassName('projectimage');
// for(let i = 0; i < userSelection.length; i++) {
//   userSelection[i].addEventListener("click", display);
// }


// function display(e) {
//     console.log(this);
//     console.log(this.className);

//     this.innerHTML = "Hello!"
// }

var pic = document.getElementById("simwebpage");
pic.addEventListener('click', displayimgtxt);
pic = document.getElementById("tretton37");
pic.addEventListener('click', displayimgtxt);
pic = document.getElementById("weatherapp");
pic.addEventListener('click', displayimgtxt);
pic = document.getElementById("moviedatabase");
pic.addEventListener('click', displayimgtxt);
pic = document.getElementById("todolist");
pic.addEventListener('click', displayimgtxt);

function displayimgtxt(e) {
    //e.currentTarget.getElementsByClassName("title")[0].innerHTML = "hhahahah";
    //e.currentTarget.getElementsByClassName("description")[0].innerHTML = "testing";
    e.currentTarget.getElementsByClassName("title")[0].style.visibility = "visible";
    e.currentTarget.getElementsByClassName("description")[0].style.visibility = "visible";
    if (e){
        pic.addEventListener( e.currentTarget == ('click', displayimgtxt));
        return ("description")[0] ;
    }else {
        return false;
    }

}


$('.projects').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
