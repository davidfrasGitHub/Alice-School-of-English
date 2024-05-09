$(function() {

    var curso1 = `<h5>Grupos de 3-18 años</h5>
    <p>Este curso ofrece clases interactivas y divertidas para niños y adolescentes desde los 3 hasta los 18 años.</p>
    <p>Dentro de este, el curso se divide en diferentes grupos, divididos generalmente por rangos de edades hasta los 10 años.</p>
    <p>A partir de los 10 años los grupos se dividen en nivel principiante, nivel medio y nivel avanzado.</p>
    <p>Precio de matrícula de 50€.</p>`;

    var curso2 = `<h5>Adultos particulares</h5>
    <p>Este curso ofrece clases individuales para adultos de todos los niveles enfocadas en la conversación.</p>
    <p>La realización de clases en grupo está sujeta a disponibilidad de la academia.</p>
    <p>Precio de matrícula de 50€.</p>`;

    var curso3 = `<h5>Exámenes oficiales</h5>
    <p>Este curso se especializa en clases de preparación para los exámenes oficiales de Cambridge(), siendo clases más exigentes y técnicas.</p>
    <p>Dentro de este, se dividen en clases para cada nivel.</p>
    <p>Precio de matrícula de 50€.</p>`;

    $('#infoCurso').hide();
    $("#botonInfo1").on('click', function(){
       $('#infoCurso').html(curso1).show();
    });
    $("#botonInfo2").on('click', function(){
        $('#infoCurso').html(curso2).show();
     });
     $("#botonInfo3").on('click', function(){
        $('#infoCurso').html(curso3).show();
     });






});