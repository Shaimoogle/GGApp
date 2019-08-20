$(document).ready(function () {

    $('#sidebarCollapse').on('click', function(){
        $("#sidebar").toggleClass('active');
        $("#blackveil").toggleClass('active');
    });

    $('#blackveil').on('click', function(){
        $("#sidebar").toggleClass('active');
        $("#blackveil").toggleClass('active');
    });

});