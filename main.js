document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);


    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{
      duration: 600,
      indicators: true,
      dist: 0,
      
    });
  });