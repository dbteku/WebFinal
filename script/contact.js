$(document).ready(function () {


    $(this).find('#contact').slideUp();

    $(".middle-content").on('click', function () {
        $(this).find('#contact').slideToggle();
    });

});