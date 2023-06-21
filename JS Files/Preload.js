var preloader = document.getElementById('loading');
var scroll = document.getElmentById('pagee');

function preloadComplete() {
  preloader.style.display = 'none';
  scroll.style.overflow = "scroll";
}

preloadComplete();
