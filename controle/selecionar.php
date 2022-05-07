<?php
header('Content-Type: application/json');

$pdo = new PDO('mysql:host=localhost; dbname=bd-comment;', 'root', '');
$stmt = $pdo->prepare("SELECT * FROM comments");
$stmt->execute();

if ($stmt->rowCount() >= 1) {
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
} else {
    echo json_encode('Nenhum comentário encontrado');
}

// * A melhor forma de interagir php com javascript é com o json, sendo assim, transformamos as mensagens em json