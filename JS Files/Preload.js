var preloader = document.getElementById('loading');
var x = document.getElementById("pagee");
         
function preloadComplete() {
         x.style.overflow='hidden';
         preloader.style.display = 'none';
         x.style.overflow='scroll';
}

preloadComplete();
