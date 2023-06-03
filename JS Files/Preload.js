var preloader = document.getElementById('loading');

function disableScrollAndPreload() {
  // Disable scrolling
  document.body.style.overflow = 'hidden';

  // Start preloading here
  // ...

  // Call the function to re-enable scrolling after preloading is complete
  preloadComplete();
}

function preloadComplete() {
  // Restore scrolling
  document.body.style.overflow = 'auto';

  // Hide the preloader
  preloader.style.display = 'none';
}

// Call the function to disable scrolling and start preloading
disableScrollAndPreload();
