document.addEventListener('DOMContentLoaded', function() {
  var preloader = document.getElementById('loading');
  document.body.style.overflow = "hidden";
  
  function preloadComplete() {
    preloader.style.display = 'none';
    document.body.style.overflow = "scroll";
  }

    setTimeout(preloadComplete, 2500);  // Adjust the duration as needed
