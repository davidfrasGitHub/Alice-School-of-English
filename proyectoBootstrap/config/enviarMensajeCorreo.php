<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $para = 'davidfsciclos@gmail.com'; // Cambia esto por tu dirección de correo electrónico

    $contenido = "Nombre: $nombre\nTeléfono: $telefono\nCorreo electrónico: $email\nAsunto: $asunto\nMensaje: $mensaje";

    $headers = "From: $nombre <$email>";

    if (mail($para, $asunto, $contenido, $headers)) {
        echo '<p class="mensaje-exito">Mensaje enviado con éxito.</p>';
    } else {
        echo '<p class="mensaje-error">Error al enviar el mensaje.</p>';
    }
}
?>
