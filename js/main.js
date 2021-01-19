document.addEventListener('scroll', function (event) {
  if ( window.scrollY >= 70 ) {
    document.getElementById('nav').classList.add('navbar-focus')
  } else {
    document.getElementById('nav').classList.remove('navbar-focus')
  }
})
