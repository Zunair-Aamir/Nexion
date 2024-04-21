const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')

  // Toggle overflow hidden class on body
  document.body.classList.toggle('overflow-hidden');

});



// JavaScript
window.openModal = function(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'block';
  var iframe = modal.querySelector('iframe');
  var player = new URL(iframe.src);
  player.searchParams.set('autoplay', 1);
  iframe.src = player;
  document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
}

window.closeModal = function(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
  var iframe = modal.querySelector('iframe');
  var player = new URL(iframe.src);
  player.searchParams.set('autoplay', 0);
  iframe.src = player;
  document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
}

// Close all modals when pressing ESC
document.onkeydown = function(event) {
  event = event || window.event;
  if (event.keyCode === 27) {
      document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
      var modals = document.getElementsByClassName('modal');
      Array.prototype.slice.call(modals).forEach(i => {
          i.style.display = 'none';
      });
  }
};

