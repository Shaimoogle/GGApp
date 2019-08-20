var sidebarShowed = false;

function toggleSidebar()
{
    sidebarShowed = !sidebarShowed;
    if(sidebarShowed)
    {
        $("#sidebar").css("margin-left", "0%");
    }
    else
    {
        $("#sidebar").css("margin-left", "-40%");
    }
}

$(document).ready(function () {

    $('#sidebarButton').on('click', toggleSidebar());

});