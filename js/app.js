window.swiper = new Swiper({
    el: ".slider__contenedor",  //Contenedor padre
    slideClass: "slider__slide", //No lleva el punto de la clase
    createElements: true,
    autoplay: {    //Se cambien las imagenes despues de 5 segundos
        delay:5000
    },
    loop: true, //Cuando llega al final se comienza desde el pricipio asi infinitamente
    pagination: true,
    navigation: true,
    paginationClickable: true
    // spaceBetween: 20, <----Esto genera un espacio entre cada imagen del slider
});