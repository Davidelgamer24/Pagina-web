<?php
require "conecta.php";
$con = conecta();
// Cachar variables del formulario
$nombre    = $_REQUEST['nombre'];
$email     = $_REQUEST['email'];
$telefono  = $_REQUEST['telefono'];
// Consulta SQL para insertar el empleado
$sql = "INSERT INTO clientes (nombre,email,telefono) VALUES('$nombre','$email', '$telefono')";

// Ejecutar la consulta
$res = $con->query($sql);

if ($res) {
    // Redirigir a la lista de empleados si se insertó correctamente
    header("Location:index.html");
} else {
    echo "Error al insertar el empleado: " . $con->error;
}
?>

