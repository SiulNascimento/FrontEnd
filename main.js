$(document).ready( function() {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        
        const newtarefa = $('#newtask').val();
        const newline = $('<li style="display: none"></li>');
        const taskdone = $('<li style="text-decoration: line-through"></li>')
        
        $(`<p>${newtarefa}</p>`).appendTo(newline);
        $(newline).appendTo('ul');
        $(newline).fadeIn();
        $('#newtask').val("");

        newline.click(function () {
            $(this).toggleClass('done');
        });
        newline.dblclick(function (){
            $(this).remove()
        });
    })
})