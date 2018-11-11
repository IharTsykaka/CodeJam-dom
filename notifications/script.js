

window.onload=function (){

    const notificationClosed = document.getElementById('notification_container');
    const checkbox_id = document.getElementById('checkbox_id');
    const nav_dots = document.getElementById('navdots');
    const message = document.getElementById('tip');


    const disableTips = localStorage.getItem('disableTips');

    if(disableTips != null) {
      //  notificationClosed.style.display = 'none';
    } else {
        setTimeout(function() {
            notificationClosed.style.display = 'block'
        }, 5000)
    }

    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', function(e){
        e.preventDefault();
        notificationClosed.style.display = 'none';
        if(checkbox_id.checked) {
            localStorage.setItem('disableTips', 'hidden');
        }
    });
}


const dayTips = ['one',
'two',
'three',
'four',
'five',
'six',
'seven'];

var slideIndex = 3;

showContent(slideIndex);

function plusIndex(n) {
    showContent(slideIndex += n);
}

function currentSlide(n) {
    showContent(slideIndex = n);
}

function showContent(n) {
   
    var dots = document.getElementsByClassName('dots');

    if (n > dayTips.length) {
        slideIndex = 1
    };
    if (n < 1) {
        slideIndex = dayTips.length
    };
    document.getElementById('tip').innerHTML = dayTips[slideIndex - 1];

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
}


 window.document.addEventListener('keydown', checkKeyPress, false);

 function checkKeyPress(key) {
     if(key.keyCode == '37') {
         plusIndex(-1);
     }

     if (key.keyCode == '39') {
         plusIndex(+1);
     }

     if (key.keyCode == '27') {
        document.getElementById('notification_container').hidden= 1;
     }
 }
