$(document).ready(function(){
    $('.carousel').carousel({
        interval: 300000
      });

    $("#submit").click(function(){
        //$("#panelResultados").show("drop", 1000);
        

        $("#main").hide("highlight", 950);
        
        setTimeout(function(){
            $("#panelResultados").show("drop", 1000);

            setTimeout(function(){                
                obtenerResultados(); 
            }, 1000);

        }, 1000);
    });


    $("#reiniciarEncuesta").click(function(){

        reiniciarEncuesta();
        $("#panelResultados").hide("highlight", 950);
        
        setTimeout(function(){
            $("#main").show("blind", 1000);
        },1000);
        
    });

    $("#iniciarEncuesta").click(function(){        
        $("#main").show("blind", 1000);
    });

    $("#submitMain2").click(function(){ 
        $("#main2").hide("highlight", 950);
        obtenerResultadosEncuesta2();
        setTimeout(function(){
            $("#main").show("drop", 1000);
        }, 1000);

    });



});

function obtenerResultados(){
    var puntajeTecnologia = {
        m1: calcularPuntaje("tecnologicas1"), 
        m2: calcularPuntaje("tecnologicas2"),
        m3: calcularPuntaje("tecnologicas3")
    };
   
    var puntajePedagogicas = {
        m1: calcularPuntaje("pedagogicas1"), 
        m2: calcularPuntaje("pedagogicas2"),
        m3: calcularPuntaje("pedagogicas3")
    };
    
   var puntajeComunicacion = {
        m1: calcularPuntaje("comunicacion1"), 
        m2: calcularPuntaje("comunicacion2"),
        m3: calcularPuntaje("comunicacion3")
    };

    var puntajeGestion = {
        m1: calcularPuntaje("gestion1"), 
        m2: calcularPuntaje("gestion2"),
        m3: calcularPuntaje("gestion3")
    };

    var puntajeInvestigacion = {
        m1: calcularPuntaje("investigacion1"), 
        m2: calcularPuntaje("investigacion2"),
        m3: calcularPuntaje("investigacion3")
    };

    var mTotal = {
        m1: puntajeTecnologia.m1 + puntajePedagogicas.m1 + puntajeComunicacion.m1 + puntajeGestion.m1 + puntajeInvestigacion.m1,
        m2: puntajeTecnologia.m2 + puntajePedagogicas.m2 + puntajeComunicacion.m2 + puntajeGestion.m2 + puntajeInvestigacion.m2,
        m3: puntajeTecnologia.m3 + puntajePedagogicas.m3 + puntajeComunicacion.m3 + puntajeGestion.m3 + puntajeInvestigacion.m3,
        tec: puntajeTecnologia.m1 + puntajeTecnologia.m2 + puntajeTecnologia.m3,
        ped: puntajePedagogicas.m1 + puntajePedagogicas.m2 + puntajePedagogicas.m3,
        com: puntajeComunicacion.m1 + puntajeComunicacion.m2 + puntajeComunicacion.m3,
        ges: puntajeGestion.m1 + puntajeGestion.m2 + puntajeGestion.m3,
        inv: puntajeInvestigacion.m1 + puntajeInvestigacion.m2 + puntajeInvestigacion.m3
    };

    var tablita = "";

    tablita += '<table id="tab" border="2px">';
    tablita += '<tr>';
    tablita += '<th></th>';
    tablita += '<th>Tec</th>';
    tablita += '<th>Ped</th>';
    tablita += '<th>Com</th>';
    tablita += '<th>Ges</th>';
    tablita += '<th>Inv</th>';
    tablita += '<th>Total Momento</th>';
    tablita += '</tr>';

    tablita += '<tr>';
    tablita += '<th>M1</th>';
    tablita += '<td>' + puntajeTecnologia.m1 + '</td>';
    tablita += '<td>' + puntajePedagogicas.m1 + '</td>';
    tablita += '<td>' + puntajeComunicacion.m1 + '</td>';
    tablita += '<td>' + puntajeGestion.m1 + '</td>';
    tablita += '<td>' + puntajeInvestigacion.m1 + '</td>';
    tablita += '<td>' + mTotal.m1 + '</td>';
    tablita += '</tr>';

    tablita += '<tr>';
    tablita += '<th>M2</th>';
    tablita += '<td>' + puntajeTecnologia.m2 + '</td>';
    tablita += '<td>' + puntajePedagogicas.m2+ '</td>';
    tablita += '<td>' + puntajeComunicacion.m2 + '</td>';
    tablita += '<td>' + puntajeGestion.m2 + '</td>';
    tablita += '<td>' + puntajeInvestigacion.m2 + '</td>';
    tablita += '<td>' + mTotal.m2 + '</td>';
    tablita += '</tr>';

    tablita += '<tr>';
    tablita += '<th>M3</th>';
    tablita += '<td>' + puntajeTecnologia.m3 + '</td>';
    tablita += '<td>' + puntajePedagogicas.m3 + '</td>';
    tablita += '<td>' + puntajeComunicacion.m3 + '</td>';
    tablita += '<td>' + puntajeGestion.m3 + '</td>';
    tablita += '<td>' + puntajeInvestigacion.m3 + '</td>';
    tablita += '<td>' + mTotal.m3 + '</td>';
    tablita += '</tr>';

    tablita += '<tr>';
    tablita += '<th>Total Competencia</th>';
    tablita += '<td>' + mTotal.tec + '</td>';
    tablita += '<td>' + mTotal.ped + '</td>';
    tablita += '<td>' + mTotal.com + '</td>';
    tablita += '<td>' + mTotal.ges + '</td>';
    tablita += '<td>' + mTotal.inv + '</td>';
    tablita += '<td></td>';
    tablita += '</tr>';
    tablita += '</table>';


    $("#tabla").html(tablita);

    tablita = "";

    tablita += '<table id="tab" border="4px">';
    tablita += '<tr>';
    tablita += '<th>Competencia</th>';
    tablita += '<th>Momento</th>';
    tablita += '<th>Estado</th>';
    tablita += '</tr>';

    tablita += '<tr>';
    
    tablita += "<td class='tec'>Tecnología</td>";
    tablita += '<td>' + calcularMomento(mTotal.tec) + '</td>';
    tablita += '<td>' + calcularCompentecia(mTotal.tec, "tecnologica") + '</td>';
    tablita += '</tr>';

    tablita += '<tr>';
    
    tablita += "<td class='ped'>Pedagógica</td>";
    tablita += '<td>' + calcularMomento(mTotal.ped) + '</td>';
    tablita += '<td>' + calcularCompentecia(mTotal.ped, "pedagogica") + '</td>';
    tablita += '</tr>';

    tablita += '<tr>';
    
    tablita += "<td class='com'>Comunicativa</td>";
    tablita += '<td>' + calcularMomento(mTotal.com) + '</td>';
    tablita += '<td>' + calcularCompentecia(mTotal.com, "comunicativa") + '</td>';
    tablita += '</tr>';

    tablita += '<tr>';
    
    tablita += "<td class='ges'>Gestión</td>";
    tablita += '<td>' + calcularMomento(mTotal.ges) + '</td>';
    tablita += '<td>' + calcularCompentecia(mTotal.ges, "gestion") + '</td>';
    tablita += '</tr>';

    tablita += '<tr>';
    
    tablita += "<td class='inv'>Investigativa</td>";
    tablita += '<td>' + calcularMomento(mTotal.inv) + '</td>';
    tablita += '<td>' + calcularCompentecia(mTotal.inv, "investigativa") + '</td>';       
    tablita += '</tr>';

    tablita += '</table>';

    $("#resultados").html(tablita);


    var tx = [33, 70, 108];
    var ty = [110, 120, 138];

    var px = 183;
    var py = [2, 42, 85];

    var cx = [335, 297, 260];
    var cy = [110, 120, 138];
    
    var gx = [280, 260, 234];
    var gy = [280, 255, 230];

    var ix = [80, 108, 134];
    var iy = [270, 255, 230];
    

    var tIndex = calcularNivel(mTotal.tec);
    var pIndex = calcularNivel(mTotal.ped);
    var cIndex = calcularNivel(mTotal.com);
    var gIndex = calcularNivel(mTotal.ges);
    var iIndex = calcularNivel(mTotal.inv);

    var lienzo = $("#lienzo")[0];
    var contexto = lienzo.getContext("2d");
    var buffer = document.createElement("canvas");
    buffer.width = lienzo.width;
    buffer.height = lienzo.height;

    contextoBuffer = buffer.getContext("2d");   
    contextoBuffer.clearRect(0,0,buffer.width,buffer.height);          

    var total = mTotal.m1 + mTotal.m2 + mTotal.m3;

    if (total < 60) {
        contextoBuffer.drawImage($("#graficoExploracion")[0], 0, 0);
    }else if (total < 140) {
        contextoBuffer.drawImage($("#graficoIntegracion")[0], 0, 0);
    }else {
        contextoBuffer.drawImage($("#graficoInnovacion")[0], 0, 0);
    }       

    contextoBuffer.drawImage($("#investigacion")[0], ix[iIndex], iy[iIndex]);
    contextoBuffer.drawImage($("#comunicativa")[0],  cx[cIndex], cy[cIndex]);
    contextoBuffer.drawImage($("#gestion")[0],  gx[gIndex], gy[gIndex]);
    contextoBuffer.drawImage($("#pedagogica")[0],  px, py[pIndex]);
    contextoBuffer.drawImage($("#tecnologia")[0],  tx[tIndex], ty[tIndex]);


    contexto.clearRect(0,0,lienzo.width, lienzo.height);
    contexto.drawImage(buffer,0,0);




    c3.generate({
        bindto: '#grafTec',
        data: {
          columns: [
            ['M1', puntajeTecnologia.m1],
            ['M2', puntajeTecnologia.m2],
            ['M3', puntajeTecnologia.m3]
          ],
          type : 'bar',
        }
    });

    c3.generate({
        bindto: '#grafPed',
        data: {
          columns: [
            ['M1', puntajePedagogicas.m1],
            ['M2', puntajePedagogicas.m2],
            ['M3', puntajePedagogicas.m3]
          ],
          type : 'bar',
        }
    });

    c3.generate({
        bindto: '#grafCom',
        data: {
          columns: [
            ['M1', puntajeComunicacion.m1],
            ['M2', puntajeComunicacion.m2],
            ['M3', puntajeComunicacion.m3]
          ],
          type : 'bar',
        }
    });

    c3.generate({
        bindto: '#grafGes',
        data: {
          columns: [
            ['M1', puntajeGestion.m1],
            ['M2', puntajeGestion.m2],
            ['M3', puntajeGestion.m3]
          ],
          type : 'bar',
        }
    });

    c3.generate({
        bindto: '#grafInv',
        data: {
          columns: [
            ['M1', puntajeInvestigacion.m1],
            ['M2', puntajeInvestigacion.m2],
            ['M3', puntajeInvestigacion.m3]
          ],
          type : 'bar',
        }
    });
}




function calcularNivel(puntaje){
    if (puntaje < 15){
        return 0;
    } else if (puntaje < 32) {
        return 1;
    } else{
        return 2;
    }
}

function calcularCompentecia(puntaje, competencia){
    var index;    
    if (puntaje < 12){
        index =  1;
    } else if (puntaje < 26) {
        index =  2;
    } else{
        index =  3;
    }

    if(index == 1 && competencia == "tecnologica"){
        return "Reconoce un amplio espectro de herramientas tecnológicasy algunas formas de integrarlas a la práctica educativa.";
    }
    if(index == 2 && competencia == "tecnologica"){
        return "Utiliza diversas herramientas tecnológicas en los procesos educativos, de acuerdo a su rol, área de formación, nivel y contexto en el que se desempeña.";
    }
    if(index == 3 && competencia == "tecnologica"){
        return "Aplica el conocimiento de una amplia variedad de tecnologías en el diseño de ambientes de aprendizaje innovadores y para plantear soluciones a problemas identificados en el contexto.";
    }


    if(index == 1 && competencia == "pedagogica"){
        return "Identifica nuevas estrategias y metodologías mediadas por las TIC, como herramienta para su desempeño profesional.";    
    }
    if(index == 2 && competencia == "pedagogica"){
        return "Propone proyectos y estrategias de aprendizaje con el uso de TIC para potenciar el aprendizaje de los estudiantes.";
    }
    if(index == 3 && competencia == "pedagogica"){
        return "Lidera experiencias significativas que involucran ambientes de aprendizaje diferenciados de acuerdo a las necesidades e intereses propias y de los estudiantes.";
    }


    if(index == 1 && competencia == "comunicativa"){
        return "Emplea diversos canales y lenguajes propios de las TIC para comunicarse con la comunidad educativa.";
    }
    if(index == 2 && competencia == "comunicativa"){
        return "Desarrolla estrategias de trabajo colaborativo en el contexto escolar a partir de su participación en redes y comunidades con el uso de las TIC.";

    }
    if(index == 3 && competencia == "comunicativa"){
        return "Participa en comunidades y publica sus producciones textuales en diversos espacios virtuales y a través de múltiples medios digitales, usando los lenguajes que posibilitan las TIC.";
    }


    if(index == 1 && competencia == "gestion"){
        return "Organiza actividades propias de su que hacer profesional con el uso de las TIC.";
    }
    if(index == 2 && competencia == "gestion"){
        return "Integra las TIC en procesos de dinamización de las gestiones directiva, académica, administrativa y comunitaria de su institución."    }
    if(index == 3 && competencia == "gestion"){
        return "Propone y lidera acciones para optimizar procesos integrados de la gestión escolar."    
    }


    if(index == 1 && competencia == "investigativa"){
        return "Usa las TIC para hacer registro y seguimiento de lo que vive y observa en su práctica, su contexto y el de sus estudiantes.";
    }
    if(index == 2 && competencia == "investigativa"){
        return "Lidera proyectos de investigación propia y con sus estudiantes.";
    }
    if(index == 3 && competencia == "investigativa"){
        return "Construye estrategias educativas innovadoras que incluyen la generación colectiva  de conocimientos."
    }


}

function calcularPuntaje(res){
    var puntajeTotal = 0;
    var result = $('input[class="' + res + '"]:checked');
    
    for (var i = 0; i < result.length; i++) {
        if (result[i].value == "MuyFrecuentemente"){
            puntajeTotal += 4;
        }else if (result[i].value == "Frecuente") {
            puntajeTotal += 3;
        }else if (result[i].value == "Ocasionalmente") {
            puntajeTotal += 2;
        }else if (result[i].value == "Raramente") {
            puntajeTotal += 1;
        }else if (result[i].value == "Nunca") {            
        }
    }
    return puntajeTotal;
}

function calcularMomento(puntaje){
    
    if (puntaje < 12){
        return "Explorador";
    } else if (puntaje < 26) {
        return "Integrador";
    } else{
        return "Innovador";
    }
    
}

function reiniciarEncuesta(){
    document.getElementById("myForm").reset();
}

function obtenerResultadosEncuesta2(){
    var result = $("input[type='checkbox']");
    
    var b = true;
    var tabla = "<table id='tab2' border='2px'>";    
    tabla += '<tr>';
    tabla += '<th>Tipo de Herramienta</th>';
    tabla += '<th>Herramienta</th>';    
    tabla += '</tr>';
    
    
    
    for (var i = 0; i < result.length; i++){
                
        var fila = result[i].id.split('-');       
        
        if (b){
            tabla += "<tr><td>" + determinarEnunciado(fila[1], fila[2]) + "</td><td><ul>";
            b = false;
        }
        
        if(result[i].checked == true){

            if (result[i].value == "Otros"){
                var text = "";

                if (fila[1] == '1' || fila[1] == '8'){
                    text = $("#p-" + fila[1] + "-" + fila[2] + "-cuales").val();
                    
                }else{
                    text = $("p-" + fila[1] + "-cuales").val();
                }

                tabla += "<li>" + text + "</li></ul></td></tr>";
            }else{
                tabla += "<li>" + result[i].value + "</li>";
            }           
        }
        if (result[i].value == "Otros"){
            b = true;
        }
    }

    $("#tablaEncuesta1").html(tabla);
}

function determinarEnunciado(f1, f2){

    switch (f1){
        case "1":
            switch(f2){
                case "a":
                    return "Herramientas de trabajo colaborativo: a. Para documentos colaborativos:";
                case "b":
                    return "Herramientas de trabajo colaborativo: b. Para la generación de conocimiento:";
                case "c":
                    return "Herramientas de trabajo colaborativo: c. Para la creación de sitios web o blogs educativos:";
            }
            break;
        case "2":
            return "Herramientas para la creación de Objetos Virtuales de Aprendizaje (OVA)";
        case "3":
            return "Herramientas para el manejo de video";
        case "4":
            return "Herramienta para el manejo de audio";
        case "5":
            return "Herramientas para el manejo de textos e imágenes";
        case "6":
            return "Herramientas para presentaciones en la nube";
        case "7":
            return "Herramientas para videoconferencias y reuniones online";
        case "8":
            switch(f2){
                case "a":
                    return "Herramientas para comunidades: a. Redes sociales";
                case "b":
                    return "Herramientas para comunidades: b. Mundos Virtuales";
                case "c":
                    return "Herramientas para comunidades: c. BooksMarks y agregadores RSS:";
            }
            break;
        case "9":
            return "Herramientas para tratamiento bibliográfico";
        case "10":
            return "Herramientas para la creación de mapas mentales";
        case "11":
            return "Herramientas para la creación de líneas de tiempo";
        case "12":
            return "Herramientas para la creación de actividades digitales lúdicas";
        case "13":
            return "Sistemas administradores de aprendizaje (LMS)";
        case "14":
            return "Herramientas para comunicación y gestión";
        case "15":
            return "Herramientas estadísticas";
        
    }
    
        
    

}