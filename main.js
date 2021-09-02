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


  /* Scroll Reveal */

  window.sr = ScrollReveal();
    sr.reveal('.navi', {
    duration: 2000,
    origin: 'bottom'
    });

    window.sr = ScrollReveal();
    sr.reveal('.carousel', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    });

    window.sr = ScrollReveal();
    sr.reveal('.prueba', {
      duration: 2000,
      origin: 'right',
      distance: '300px',
    });

    window.sr = ScrollReveal();
    sr.reveal('.card', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
    });

    window.sr = ScrollReveal();
    sr.reveal('.layout', {
      duration: 2000,
      origin: 'top',
      distance: '300px',
    });

    window.sr = ScrollReveal();
    sr.reveal('.fooot', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px',
    });

    /* discografia */

    window.sr = ScrollReveal();
    sr.reveal('.float', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px',
    });

    window.sr = ScrollReveal();
    sr.reveal('.flip', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
    });

    /* video */

    window.sr = ScrollReveal();
    sr.reveal('.video', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
    });

    window.sr = ScrollReveal();
    sr.reveal('.subtitulos', {
      duration: 2000,
      origin: 'top',
      distance: '300px',
    });

    /* store */

    window.sr = ScrollReveal();
    sr.reveal('.card-image', {
      duration: 2000,
      origin: 'top',
      distance: '300px',
    });
