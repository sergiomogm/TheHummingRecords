'use strict'

$(document).ready( function(){

    
    $('.galeria__img1').click( function(){

        $('.caja1').addClass('activo')

    })
    $('.galeria__img2').click( function(){

        $('.caja2').addClass('activo')

    })
    $('.galeria__img3').click( function(){

        $('.caja3').addClass('activo')

    })
    $('.galeria__img4').click( function(){

        $('.caja4').addClass('activo')

    })

    
    $('.caja__cerrar').click( function(){
        $('.caja').removeClass('activo')
    })

})