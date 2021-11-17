$("form").on("submit", function(e){
    e.preventDefault();
    //alert("hola");
    $.ajax({
        url: "./php/index.php",
        method: "POST",
        data: {
            nombre: $("#nombre").val()
        },
        success: function(res){
            $("#respuesta").html(res);
        }
    });
});