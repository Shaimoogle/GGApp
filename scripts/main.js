var sidebarShowed = false;

function toggleSidebar()
{
    sidebarShowed = !sidebarShowed;
    if(sidebarShowed)
    {
        console.log("Sidebar showing");
        $("#sidebar").css("margin-left", "0%");
    }
    else
    {
        console.log("Sidebar hiding");
        $("#sidebar").css("margin-left", "-40%");
    }
}

$(document).ready(function () {

    $('#sidebarButton').on('click', toggleSidebar());

});