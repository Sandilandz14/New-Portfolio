   // typing text animation script
   var typed = new Typed(".typing", {
    strings: ["Software Developer", "Web Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Software Developer", "Web Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// BUILDING FUNCTION FOR ONCLICK ANIMATION
let barOne = document.getElementsByClassName('bar')[0],
$boxTwo = $('.box:eq(1)');

document.getElementsByClassName('skills')[0].onclick = function() {
if(this.innerHTML === 'Play') 
{ 
this.innerHTML = 'Pause';
boxOne.classList.add('horizTranslate');
  } else {
    this.innerHTML = 'Play';
    var computedStyle = window.getComputedStyle(boxOne),
        marginLeft = computedStyle.getPropertyValue('margin-left');
    boxOne.style.marginLeft = marginLeft;
    boxOne.classList.remove('horizTranslate');    
  }  
}

$('.toggleButton:eq(1)').on('click', function() { 
  if($(this).html() === 'Play') 
  {
    $(this).html('Pause');
    $boxTwo.addClass('horizTranslate');
  } else {
    $(this).html('Play');
    var computedStyle = $boxTwo.css('margin-left');
    $boxTwo.removeClass('horizTranslate');
    $boxTwo.css('margin-left', computedStyle);
  }  
});