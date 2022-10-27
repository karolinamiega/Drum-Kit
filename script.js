function playSound(event){
    let audio1 = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if(!audio1) return;
    audio1.currentTime = 0;
    audio1.play();
    
    key.classList.add('playing');
  };

  window.addEventListener('keydown', playSound);
  function removeTransition(event){
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  let keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
