document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{
      duration: 600,
      indicators: true,
      dist: 0,
      
    });
  });