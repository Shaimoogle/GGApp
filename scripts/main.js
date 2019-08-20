$(document).ready(function () {

    $('#sidebarCollapse').on('click', function(){
        $("#sidebar").addClass('active');
        $("#blackveil").addClass('active');
    });

    $('#blackveil').on('click', function(){
        $("#sidebar").removeClass('active');
        $("#blackveil").removeClass('active');
    });

});