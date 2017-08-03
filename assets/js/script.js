// Check Off Specific To-dos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Delete a To-do
$("ul").on("click", "span", function(event){
    // Gives us the selected li and removes it
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Creation of new To-dos
$("input[type='text']").on("keypress", function(event){
    // Check for input of the enter key
    if (event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-minus'></i></span> " + todoText + "</li>")
    }
});

// Toggle input
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});