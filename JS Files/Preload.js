var preloader = document.getElementById('loading');
var scroll = document.getElementById('pagee');
scroll.style.overflow = "hidden";

function preloadComplete() {
  preloader.style.display = 'none';
  scroll.style.overflow = "scroll";
}

preloadComplete();
