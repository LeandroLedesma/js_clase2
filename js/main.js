//capturar elemento "boton"
var addBtn =
document.querySelector("#send");

//atachar o agregar evento click
addBtn.addEventListener("click", function (e) {
    var noteInput = document.querySelector("#eInput");
    //agrego noteInput al string de la lista (value devuelve el valor del imput)
    var noteHtml = "<li class='list-group-item'>"+noteInput.value+"</li>";
    var listItems =document.querySelector("#list");

    //aca agrego a la lista
    listItems.insertAdjacentHTML('afterbegin',noteHtml);
    //se vacia el input
    noteInput.value = null;
})

document.addEventListener("keypress",function(e){
    if (e.charCode==13){
        var noteInput = document.querySelector("#eInput");
        //agrego noteInput al string de la lista (value devuelve el valor del imput)
        var noteHtml = "<li class='list-group-item'>"+noteInput.value+"</li>";
        var listItems =document.querySelector("#list");
    
        //aca agrego a la lista
        listItems.insertAdjacentHTML('afterbegin',noteHtml);
        //se vacia el input
        noteInput.value = null;
    }


})