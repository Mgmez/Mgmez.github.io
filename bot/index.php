<?php

if (isset($_GET['url_request'])) {
    $url = $_GET['url_request'];

    // Realiza la solicitud GET a la URL
    $response = file_get_contents($url);

    if ($response !== false) {
        // Decodifica la respuesta JSON
        $decoded_response = json_decode($response, true);

        if ($decoded_response !== null) {
            // Establece las cabeceras de respuesta como JSON
            header("Content-Type: application/json");
            echo json_encode($decoded_response);
        } else {
            header("HTTP/1.1 500 Internal Server Error");
            echo "Error al decodificar la respuesta JSON.";
        }
    } else {
        header("HTTP/1.1 500 Internal Server Error");
        echo "Error al obtener la URL.";
    }
} else {
    header("HTTP/1.1 400 Bad Request");
    echo "La URL de solicitud no se proporcionó.";
}
