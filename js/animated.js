var animatedButton = function(e){
  e.preventDefault;
  // reset animation
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function(){e.target.classList.remove('animate');},700);
};
var bubblyButtons=document.getElementsByClassName("bubbly-button");
for (vari = 0; i<bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animatedButton, false);
}