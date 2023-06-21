var preloader = document.getElementById('loading');

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}
         
function preloadComplete() {
  disableScroll()
  preloader.style.display = 'none';
  document.body.classList.remove("stop-scrolling");
}

preloadComplete();
