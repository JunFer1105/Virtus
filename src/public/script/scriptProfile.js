$(document).ready(function(){
    
    $("#perfil-normal").show("blind", 1000);
    $("#perfil-editar").show("puff", 1000);

    $("#btnInputFile").click(() => {
        $("#inputFile").click();        
    });

    $("#inputFile").change(() =>{
        const file =  $("#inputFile").val();
        if(file){
            $("#spanInputFile").text(file);
            $("#spanInputFile").show("fade", 500);
        }else{            
            $("#spanInputFile").hide("fade", 500);
        }        
    })

    $("#inst-otra-si").click(() => {
        mostrarTxt("#txtInstitucion");
    });

    $("#inst-otra-no").click(() => {
        esconderTxt("#txtInstitucion");
    });

    $("#area-otra-si").click(() => {
        mostrarTxt("#txtArea");
    });

    $("#area-otra-no").click(() => {
        esconderTxt("#txtArea");
    });

    $("#cicl-otra-si").click(() => {
        mostrarTxt("#txtCiclo");
    });

    $("#cicl-otra-no").click(() => {
        esconderTxt("#txtCiclo");
    });
    
 });

function mostrarTxt(radio){    
    $(radio).show("drop", 500);
}

function esconderTxt(radio){
    $(radio).hide("drop", 300);
}