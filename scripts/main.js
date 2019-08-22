$(document).ready(function () {

    $('#sidebarCollapse').on('click', function(){
        $("#sidebar").addClass('active');
        $("#blackveil").addClass('active');

    });

    $('#blackveil').on('click', function(){
        $("#sidebar").removeClass('active');
        $("#blackveil").removeClass('active');
    });

    $("#content").load('https://shaimoogle.github.io/GGApp/homepage.html');

    $('#homepage_button').on('click', function() {
        $("#content").load('https://shaimoogle.github.io/GGApp/homepage.html');
    })

    $('#chat_button').on('click', function() {
        $("#content").load('https://shaimoogle.github.io/GGApp/chat.html');
    })

    $('#invoices_button').on('click', function() {
        $("#content").load('https://shaimoogle.github.io/GGApp/invoices.html');
    })

    $('#timetable_button').on('click', function() {
        $("#content").load('https://shaimoogle.github.io/GGApp/timetable.html');
    })

    $('.sidebar_button').on('click', function()
    {
        $("#sidebar").removeClass('active');
        $("#blackveil").removeClass('active');
        $(this).find(".sidebar_button_blackveil").addClass('active');
        var concernedBlackveil = $(this).find(".sidebar_button_blackveil");
        setTimeout(function()
        {
            concernedBlackveil.removeClass('active');
        }, 200);
    })


});