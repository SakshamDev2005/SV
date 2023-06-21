var preloader = document.getElementById('loading');
document.body.style.overflow = "hidden";

function preloadComplete() {
  preloader.style.display = 'none';
  document.body.style.overflow = "scroll";
}

preloadComplete();
