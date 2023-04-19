document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.tecla');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        var sound = 'som_' + this.classList[1];
  
        document.getElementById(sound).play();
      });
    }
  });
