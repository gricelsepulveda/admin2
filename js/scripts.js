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
});
