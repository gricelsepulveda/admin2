$(document).ready(function(){
   /*ACTIVAR MENUS*/
    $(".menu_principal > a > li").click(function(){
        $(".menu_principal > a > li").removeClass("activo");
        $(this).addClass("activo");
    });
    $(".subseccion > a > li").click(function(){
        $(".subseccion > a > li").removeClass("activo");
        $(this).addClass("activo");
    });
    $(".item > a > li").click(function(){
        $(".item > a > li").removeClass("activo");
        $(this).addClass("activo");
    });
    $(".imagenes_lista > li").click(function(){
        $(".imagenes_lista > li").removeClass("activo");
        $(this).addClass("activo");
    });
    /*IMAGENES DESTACADAS*/
    $("#i_destacada").click(function(){
        $(".imagen_destacada").fadeIn("slow");
        $(".imagen_1").fadeOut("fast");
        $(".imagen_2").fadeOut("fast");
        $(".imagen_3").fadeOut("fast");
        $(".imagen_4").fadeOut("fast");
    });
    $("#i_1").click(function(){
        $(".imagen_1").fadeIn("slow");
        $(".imagen_destacada").fadeOut("fast");
        $(".imagen_2").fadeOut("fast");
        $(".imagen_3").fadeOut("fast");
        $(".imagen_4").fadeOut("fast");
    });
    $("#i_2").click(function(){
        $(".imagen_2").fadeIn("slow");
        $(".imagen_destacada").fadeOut("fast");
        $(".imagen_1").fadeOut("fast");
        $(".imagen_3").fadeOut("fast");
        $(".imagen_4").fadeOut("fast");
    });
    $("#i_3").click(function(){
        $(".imagen_3").fadeIn("slow");
        $(".imagen_1").fadeOut("fast");
        $(".imagen_2").fadeOut("fast");
        $(".imagen_destacada").fadeOut("fast");
        $(".imagen_4").fadeOut("fast");
    });
    $("#i_4").click(function(){
        $(".imagen_4").fadeIn("slow");
        $(".imagen_1").fadeOut("fast");
        $(".imagen_2").fadeOut("fast");
        $(".imagen_3").fadeOut("fast");
        $(".imagen_destacada").fadeOut("fast");
    });
});
