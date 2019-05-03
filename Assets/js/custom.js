$("ul").on("click", "li" ,function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span" ,function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(){
    if(event.which === 13){
        var newItem = $(this).val();
        console.log(newItem);
        $(this).val("");
        $("ul").append("<li> " + newItem + " &emsp; <span class='removeButton'> <i class='fa fa-window-close' aria-hidden='true'></i> </span> </li>");
    }
});

$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
});