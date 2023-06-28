var preloader = document.getElementById('loading');
var x = document.body.style.overflow("hidden");
         
function preloadComplete() {
  disableScroll()
  preloader.style.display = 'none';
  x.style.overflow='scroll';
}

preloadComplete();
