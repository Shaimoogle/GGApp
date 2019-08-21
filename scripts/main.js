$(document).ready(function () {

    $('#sidebarCollapse').on('click', function(){
        $("#sidebar").addClass('active');
        $("#blackveil").addClass('active');
    });

    $('#blackveil').on('click', function(){
        $("#sidebar").removeClass('active');
        $("#blackveil").removeClass('active');
    });

    $('#chat_button').on('click', function() {
        $("#content").load('https://shaimoogle.github.io/GGApp/chat.html');
    })

    $('#invoices_button').on('click', function() {
        $("#content").load('https://shaimoogle.github.io/GGApp/invoices.html');
    })


});