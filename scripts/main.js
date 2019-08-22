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

    $('.sidebar_button').on('click', function()
    {
        $("#sidebar").removeClass('active');
        $("#blackveil").removeClass('active');
        $(this).find(".sidebar_button_blackveil").addClass('active');
        setTimeout(function()
        {
            console.log("Here");
            $(this).find(".sidebar_button_blackveil").removeClass('active');
            console.log("Here2");
        }, 600);
    })


});